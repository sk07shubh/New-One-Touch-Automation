import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItemCard = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const priceWithGst = item.variant.price * (1 + item.variant.gstPercent / 100);
  const totalPrice = priceWithGst * item.quantity;

  return (
    <div className="product-card p-4 flex gap-4 animate-fade-in">
      <div className="w-20 h-20 bg-secondary/30 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground text-sm line-clamp-2">{item.variant.name}</h3>
        <p className="text-xs text-muted-foreground mt-1">Model: {item.variant.modelNo}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
              className="quantity-btn w-7 h-7"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
              className="quantity-btn w-7 h-7"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.productId, item.variantId)}
            className="text-destructive hover:text-destructive/80 p-1"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm font-semibold text-foreground mt-2">
          ₹{totalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
