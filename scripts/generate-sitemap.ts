// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://automation-genius-shop.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/categories", changefreq: "weekly", priority: "0.8" },
  { path: "/products", changefreq: "weekly", priority: "0.8" },
  { path: "/profile/about", changefreq: "monthly", priority: "0.5" },
  { path: "/profile/contact", changefreq: "monthly", priority: "0.5" },
  { path: "/profile/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/profile/privacy", changefreq: "yearly", priority: "0.3" },
];

// Parse slugs from products.ts without importing it (it imports image assets).
const productsSource = readFileSync(resolve("src/data/products.ts"), "utf8");
const slugRegex = /slug:\s*'([^']+)'/g;

const categoryBlock = productsSource.split("export const products")[0];
const productBlock = productsSource.split("export const products")[1] ?? "";

function extractSlugs(block: string): string[] {
  const slugs = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = slugRegex.exec(block)) !== null) slugs.add(m[1]);
  return Array.from(slugs);
}

const categorySlugs = extractSlugs(categoryBlock);
slugRegex.lastIndex = 0;
const productSlugs = extractSlugs(productBlock);

const categoryEntries: SitemapEntry[] = categorySlugs.map(slug => ({
  path: `/category/${slug}`,
  changefreq: "weekly",
  priority: "0.7",
}));

const productEntries: SitemapEntry[] = productSlugs.map(slug => ({
  path: `/product/${slug}`,
  changefreq: "weekly",
  priority: "0.7",
}));

const entries = [...staticEntries, ...categoryEntries, ...productEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map(e =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
