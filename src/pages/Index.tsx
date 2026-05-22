import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import HeroBanner from '@/components/HeroBanner';
import BottomNavigation from '@/components/BottomNavigation';
import logo from '@/assets/logo.png';
import { categories, getFeaturedProducts, getNewArrivals, products } from '@/data/products';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuth();
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
      <Helmet>
        <title>New One Touch — Industrial Food Processing Machines</title>
        <meta name="description" content="Shop industrial food processing machines: atta & masala mixers, roti, namkeen, dhokla, juicer & more. Quality SS body machinery built for commercial use." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="New One Touch — Industrial Food Processing Machines" />
        <meta property="og:description" content="Shop industrial food processing machines: atta, masala, roti, namkeen, dhokla, juicer & more." />
        <meta property="og:url" content="/" />
      </Helmet>
      {/* Header */}
      <header className="px-4 pt-6 pb-4 bg-card">
        <div className="grid grid-cols-3 items-center mb-4">
          <div />
          <img src={logo} alt="New Onetouch Food Machines" className="h-12 w-auto mx-auto" />
          <div className="flex justify-end">
            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-2 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
            ) : (
              <Link
                to="/auth"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </Link>
            )}
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
