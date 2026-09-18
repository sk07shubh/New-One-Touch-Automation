import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import CartItemCard from '@/components/CartItemCard';
import { useCart } from '@/contexts/CartContext';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { getWhatsAppCartUrl } from '@/lib/whatsapp';

const CartPage = () => {
  const { items, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-background pb-40">
      <PageHeader title="Shopping Cart" showBack={false} />

      <main className="px-4 py-4">
        {items.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground text-sm">{items.length} items in cart</p>
              <button
                onClick={clearCart}
                className="text-destructive text-sm font-medium hover:underline"
              >
                Clear All
              </button>
            </div>
            <div className="space-y-4">
              {items.map(item => (
                <CartItemCard key={`${item.productId}-${item.variantId}`} item={item} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground text-sm mb-6">Add some products to get started</p>
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </main>

      {items.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4 z-40">
          <div className="max-w-lg mx-auto space-y-3">
            <div className="flex items-center gap-3 border-t border-border pt-3">
              <MessageCircle className="w-5 h-5 text-success flex-shrink-0" />
              <p className="text-sm text-muted-foreground">Send your machine list to the owner for availability and a quotation.</p>
            </div>
            <a
              href={getWhatsAppCartUrl(items)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-success text-success-foreground py-3 rounded-lg font-semibold hover:bg-success/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Send Enquiry on WhatsApp
            </a>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
};

export default CartPage;
