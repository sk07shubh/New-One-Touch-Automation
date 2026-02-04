import { Link } from 'react-router-dom';
import { Category } from '@/types/product';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.slug}`} className="category-chip flex-shrink-0 min-w-[80px]">
      <div className="category-icon">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xs text-center text-foreground font-medium leading-tight line-clamp-2 max-w-[80px]">
        {category.name}
      </span>
    </Link>
  );
};

export default CategoryCard;
