import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Minus, Plus } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  showVariantSelector?: boolean;
}

const ProductCard = ({ product, showVariantSelector = false }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const defaultVariant = product.variants[0];
  const priceDisplay = `₹${defaultVariant.price.toLocaleString('en-IN')}`;
  const gstText = `+ ${defaultVariant.gstPercent}% GST`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, quantity);
    toast.success(`${product.name} added to cart`);
    setQuantity(1);
  };

  const handleQuantityChange = (delta: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(prev => !prev);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block overflow-hidden animate-fade-in">
      <div className="relative aspect-square bg-secondary/30 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 w-8 h-8 bg-card rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground text-sm leading-tight line-clamp-2 mb-2 min-h-[40px]">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-foreground">
          {priceDisplay} <span className="text-muted-foreground font-normal">{gstText}</span>
        </p>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => handleQuantityChange(-1, e)}
              className="quantity-btn"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm font-medium border border-border rounded-md py-1">
              {quantity}
            </span>
            <button
              onClick={(e) => handleQuantityChange(1, e)}
              className="quantity-btn"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="add-to-cart-btn mt-3"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
