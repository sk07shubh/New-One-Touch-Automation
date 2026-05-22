// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { categories, products } from "../src/data/products";

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

const categoryEntries: SitemapEntry[] = categories.map(c => ({
  path: `/category/${c.slug}`,
  changefreq: "weekly",
  priority: "0.7",
}));

const productEntries: SitemapEntry[] = products.map(p => ({
  path: `/product/${p.slug}`,
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
