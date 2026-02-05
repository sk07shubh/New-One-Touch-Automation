import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import OrderFilterDialog from '@/components/OrderFilterDialog';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { ClipboardList, Search, SlidersHorizontal } from 'lucide-react';
import logo from '@/assets/logo.png';

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string | null;
  variant_name: string | null;
  price: number;
  quantity: number;
  total: number;
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_amount: number;
  created_at: string;
  order_items: OrderItem[];
}

const OrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{ status: string | null; date: string | null }>({
    status: null,
    date: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    applyFilters();
  }, [orders, searchQuery, filters]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setOrders(data as Order[]);
    }
    setLoading(false);
  };

  const applyFilters = () => {
    let result = [...orders];

    if (searchQuery) {
      result = result.filter(order =>
        order.order_number.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.status) {
      result = result.filter(order => order.status === filters.status);
    }

    if (filters.date) {
      const now = new Date();
      result = result.filter(order => {
        const orderDate = new Date(order.created_at);
        if (filters.date === 'last_month') {
          const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
          return orderDate >= lastMonth;
        }
        if (filters.date === 'last_3_months') {
          const last3Months = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
          return orderDate >= last3Months;
        }
        const year = parseInt(filters.date!);
        if (!isNaN(year)) {
          return orderDate.getFullYear() === year;
        }
        return true;
      });
    }

    setFilteredOrders(result);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-orange-100 text-orange-800';
      case 'ready_to_dispatch': return 'bg-yellow-100 text-yellow-800';
      case 'out_for_delivery': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="px-4 py-4 bg-card flex items-center justify-between border-b border-border">
          <h1 className="text-lg font-semibold text-foreground">Order History</h1>
          <img src={logo} alt="Logo" className="h-10" />
        </header>

        <main className="px-4 py-4">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ClipboardList className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Sign in to view orders</h2>
            <p className="text-muted-foreground text-sm mb-6">Please sign in to see your order history</p>
            <Link
              to="/auth"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </main>

        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="px-4 py-4 bg-card flex items-center justify-between border-b border-border">
        <h1 className="text-lg font-semibold text-foreground">Order History</h1>
        <img src={logo} alt="Logo" className="h-10" />
      </header>

      <main className="px-4 py-4">
        {/* Search and Filter */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search Order history"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="w-12 h-12 flex items-center justify-center border border-border rounded-xl bg-card hover:bg-secondary transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : filteredOrders.length === 0 ? (
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
        ) : (
          <div className="space-y-4">
            {filteredOrders.map(order => (
              <div key={order.id} className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Order</h3>
                    <p className="text-foreground text-sm">{order.order_number}</p>
                    <p className="text-muted-foreground text-sm">
                      {new Date(order.created_at).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {formatStatus(order.status)}
                  </span>
                </div>

                <div className="space-y-3 mt-4">
                  {order.order_items.slice(0, 2).map((item, index) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                          {item.product_image ? (
                            <img src={item.product_image} alt={item.product_name} className="w-full h-full object-cover" />
                          ) : (
                            <ClipboardList className="w-8 h-8 text-muted-foreground" />
                          )}
                        </div>
                        {index === 1 && order.order_items.length > 2 && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <span className="text-white font-medium">+{order.order_items.length - 2}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{item.product_name}</p>
                        <p className="text-muted-foreground text-xs">
                          ({item.quantity}p) ({item.price.toLocaleString('en-IN')})
                        </p>
                      </div>
                      <p className="font-medium text-foreground">₹{item.total.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <p className="text-xl font-bold text-foreground">₹{order.total_amount.toLocaleString('en-IN')}</p>
                  <Link
                    to={`/order/${order.id}`}
                    className="px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    See details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <OrderFilterDialog
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApply={setFilters}
      />

      <BottomNavigation />
    </div>
  );
};

export default OrdersPage;
