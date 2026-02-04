import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import HeroBanner from '@/components/HeroBanner';
import BottomNavigation from '@/components/BottomNavigation';
import { categories, getFeaturedProducts, getNewArrivals, products } from '@/data/products';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  const filteredProducts = searchQuery
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 bg-card">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-foreground">Welcome to</h1>
            <p className="text-lg font-semibold text-primary">New Onetouch Automation</p>
            <p className="text-sm text-muted-foreground">Industrial Machinery Solutions</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">NTA</span>
          </div>
        </div>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </header>

      <main className="px-4 py-4 space-y-6">
        {/* Search Results */}
        {filteredProducts ? (
          <section>
            <div className="section-header">
              <h2 className="section-title">Search Results ({filteredProducts.length})</h2>
              <button onClick={() => setSearchQuery('')} className="see-all-link">
                Clear
              </button>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">No products found</p>
            )}
          </section>
        ) : (
          <>
            {/* Categories */}
            <section>
              <div className="section-header">
                <h2 className="section-title">Categories</h2>
                <Link to="/categories" className="see-all-link">
                  See all
                </Link>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar -mx-4 px-4">
                {categories.slice(0, 8).map(category => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </section>

            {/* Hero Banner */}
            <section>
              <HeroBanner />
            </section>

            {/* Featured Products */}
            <section>
              <div className="section-header">
                <h2 className="section-title">Featured Products</h2>
                <Link to="/products" className="see-all-link">
                  See all
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {featuredProducts.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* New Arrivals */}
            <section>
              <div className="section-header">
                <h2 className="section-title">New Arrivals</h2>
                <Link to="/products?filter=new" className="see-all-link">
                  See all
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {newArrivals.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Index;
