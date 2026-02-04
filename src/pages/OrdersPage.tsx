import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="My Orders" showBack={false} />

      <main className="px-4 py-4">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
            <ClipboardList className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">No orders yet</h2>
          <p className="text-muted-foreground text-sm mb-6">Your order history will appear here</p>
          <Link
            to="/"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default OrdersPage;
