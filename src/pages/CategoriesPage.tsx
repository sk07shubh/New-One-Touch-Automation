import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { categories } from '@/data/products';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="All Categories" />

      <main className="px-4 py-4">
        <div className="grid grid-cols-3 gap-4">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center gap-2 p-3 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-center font-medium text-foreground line-clamp-2 leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default CategoriesPage;
