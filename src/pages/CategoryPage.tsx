import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/PageHeader';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import BottomNavigation from '@/components/BottomNavigation';
import { getCategoryBySlug, getProductsByCategory, categories, products } from '@/data/products';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const category = slug ? getCategoryBySlug(slug) : null;
  
  // Get products for this category, or show all if category not found
  let categoryProducts = category ? getProductsByCategory(category.id) : [];
  
  // If no specific products for this category, show products that match the category image
  if (categoryProducts.length === 0 && category) {
    // Find a product that could represent this category
    const matchingProduct = products.find(p => p.categoryId === category.id);
    if (matchingProduct) {
      categoryProducts = [matchingProduct];
    } else {
      // Create mock variants for the category
      categoryProducts = [{
        id: category.id + '-1',
        name: category.name,
        slug: category.slug,
        categoryId: category.id,
        description: `Professional grade ${category.name.toLowerCase()} for commercial and industrial use.`,
        image: category.image,
        basePrice: 25000,
        variants: [
          {
            id: `${category.id}-v1`,
            name: `${category.name} - Small`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-01`,
            price: 25000,
            size: '50 X 40 X 60',
            weight: '80 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Standard',
            motor: '1 hp',
            gstPercent: 18,
            description: 'Compact model for small operations',
          },
          {
            id: `${category.id}-v2`,
            name: `${category.name} - Medium`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-02`,
            price: 38000,
            size: '65 X 50 X 75',
            weight: '120 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Medium',
            motor: '1.5 hp',
            gstPercent: 18,
            description: 'Medium capacity for growing businesses',
          },
          {
            id: `${category.id}-v3`,
            name: `${category.name} - Large`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-03`,
            price: 55000,
            size: '80 X 60 X 90',
            weight: '180 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Large',
            motor: '2 hp',
            gstPercent: 18,
            description: 'Large capacity for commercial production',
          },
          {
            id: `${category.id}-v4`,
            name: `${category.name} - Industrial`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-04`,
            price: 75000,
            size: '100 X 75 X 110',
            weight: '250 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Industrial',
            motor: '3 hp',
            gstPercent: 18,
            description: 'Industrial grade for large scale operations',
          },
        ],
      }];
    }
  }

  const filteredProducts = searchQuery
    ? categoryProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryProducts;

  if (!category) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <PageHeader title="Category Not Found" />
        <div className="p-4 text-center text-muted-foreground">
          The category you're looking for doesn't exist.
        </div>
        <BottomNavigation />
      </div>
    );
  }

  const catTitle = `${category.name} — New One Touch`;
  const catDesc = `Browse ${category.name.toLowerCase()} from New One Touch. Quality SS body food processing machinery available in multiple capacities for commercial use.`;
  const catCanonical = `/category/${category.slug}`;

  return (
    <div className="min-h-screen bg-background pb-20">
      <Helmet>
        <title>{catTitle}</title>
        <meta name="description" content={catDesc} />
        <link rel="canonical" href={catCanonical} />
        <meta property="og:title" content={catTitle} />
        <meta property="og:description" content={catDesc} />
        <meta property="og:url" content={catCanonical} />
        <meta property="og:image" content={category.image} />
      </Helmet>
      <PageHeader title={category.name} />

      <div className="px-4 py-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <main className="px-4 pb-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No products found in this category
          </p>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default CategoryPage;
