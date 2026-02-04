import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import BottomNavigation from '@/components/BottomNavigation';
import { products, getFeaturedProducts, getNewArrivals } from '@/data/products';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'featured' | 'new'>('all');

  const getFilteredProducts = () => {
    let filtered = products;
    
    if (filter === 'featured') {
      filtered = getFeaturedProducts();
    } else if (filter === 'new') {
      filtered = getNewArrivals();
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="All Products" />

      <div className="px-4 py-4 space-y-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        <div className="flex gap-2">
          {[
            { key: 'all', label: 'All' },
            { key: 'featured', label: 'Featured' },
            { key: 'new', label: 'New Arrivals' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key as typeof filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <main className="px-4 pb-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">No products found</p>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default ProductsPage;
