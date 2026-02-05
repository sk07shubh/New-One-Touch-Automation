 import { useState, useEffect } from 'react';
 import { useParams } from 'react-router-dom';
 import PageHeader from '@/components/PageHeader';
 import { useAuth } from '@/contexts/AuthContext';
 import { supabase } from '@/integrations/supabase/client';
 import { Check, ClipboardList } from 'lucide-react';
 
 interface OrderItem {
   id: string;
   product_name: string;
   product_image: string | null;
   variant_name: string | null;
   price: number;
   quantity: number;
   total: number;
 }
 
 interface Address {
   company: string | null;
   address_line: string | null;
   city: string | null;
   state: string | null;
   country: string | null;
   zip_code: string | null;
   mobile: string | null;
   transporter: string | null;
 }
 
 interface Order {
   id: string;
   order_number: string;
   status: string;
   net_amount: number;
   tax_amount: number;
   total_amount: number;
   order_note: string | null;
   created_at: string;
   confirmed_at: string | null;
   processing_at: string | null;
   dispatch_at: string | null;
   delivered_at: string | null;
   order_items: OrderItem[];
   addresses: Address | null;
 }
 
 const OrderDetailPage = () => {
   const { id } = useParams();
   const { user } = useAuth();
   const [order, setOrder] = useState<Order | null>(null);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     if (user && id) {
       fetchOrder();
     }
   }, [user, id]);
 
   const fetchOrder = async () => {
     const { data, error } = await supabase
       .from('orders')
       .select(`
         *,
         order_items (*),
         addresses (*)
       `)
       .eq('id', id)
       .single();
 
     if (!error && data) {
       setOrder(data as Order);
     }
     setLoading(false);
   };
 
   const statusSteps = [
     { key: 'confirmed', label: 'Confirmed', dateKey: 'confirmed_at' },
     { key: 'processing', label: 'Processing', dateKey: 'processing_at' },
     { key: 'ready_to_dispatch', label: 'Ready to Dispatch', dateKey: 'dispatch_at' },
     { key: 'out_for_delivery', label: 'Out for Delivery', dateKey: 'delivered_at' },
   ];
 
   const getStatusIndex = (status: string) => {
     const index = statusSteps.findIndex(s => s.key === status);
     return index >= 0 ? index : -1;
   };
 
   if (loading) {
     return (
       <div className="min-h-screen bg-background flex items-center justify-center">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
       </div>
     );
   }
 
   if (!order) {
     return (
       <div className="min-h-screen bg-background">
         <PageHeader title="Order Details" />
         <div className="flex flex-col items-center justify-center py-16 text-center px-4">
           <ClipboardList className="w-16 h-16 text-muted-foreground mb-4" />
           <h2 className="text-lg font-semibold text-foreground">Order not found</h2>
         </div>
       </div>
     );
   }
 
   const currentStatusIndex = getStatusIndex(order.status);
 
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Order Details" />
 
       <main className="px-4 py-4 space-y-4">
         {/* Order Info */}
         <div className="bg-card rounded-xl border border-border p-4">
           <h2 className="font-semibold text-foreground text-lg">Order {order.order_number}</h2>
           <p className="text-muted-foreground text-sm">
             {new Date(order.created_at).toLocaleDateString('en-IN', {
               day: '2-digit',
               month: 'short',
               year: 'numeric'
             })}, {new Date(order.created_at).toLocaleTimeString('en-IN', {
               hour: '2-digit',
               minute: '2-digit',
               hour12: true
             })}
           </p>
         </div>
 
         {/* Products */}
         <div className="bg-card rounded-xl border border-border p-4">
           <h3 className="font-semibold text-foreground mb-4">Products</h3>
           <div className="space-y-4">
             {order.order_items.map(item => (
               <div key={item.id} className="flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                 <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                   {item.product_image ? (
                     <img src={item.product_image} alt={item.product_name} className="w-full h-full object-cover" />
                   ) : (
                     <ClipboardList className="w-8 h-8 text-muted-foreground" />
                   )}
                 </div>
                 <div className="flex-1">
                   <p className="font-medium text-foreground">{item.product_name}</p>
                   <p className="text-muted-foreground text-sm">Price: ₹{item.price.toLocaleString('en-IN')}</p>
                   <p className="text-muted-foreground text-sm">Quantity: {item.quantity}</p>
                   <p className="text-primary font-medium">Total: ₹{item.total.toLocaleString('en-IN')}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
 
         {/* Order Status */}
         <div className="bg-card rounded-xl border border-border p-4">
           <h3 className="font-semibold text-foreground mb-4">Order Status</h3>
           <div className="flex justify-between">
             {statusSteps.map((step, index) => {
               const isCompleted = index <= currentStatusIndex;
               const dateValue = order[step.dateKey as keyof Order] as string | null;
               
               return (
                 <div key={step.key} className="flex flex-col items-center text-center">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                     isCompleted ? 'bg-primary' : 'bg-secondary'
                   }`}>
                     {isCompleted && <Check className="w-5 h-5 text-primary-foreground" />}
                   </div>
                   <p className="text-xs text-foreground mt-2 max-w-[60px]">{step.label}</p>
                   {dateValue && (
                     <>
                       <p className="text-xs text-muted-foreground mt-1">
                         {new Date(dateValue).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                       </p>
                       <p className="text-xs text-muted-foreground">
                         {new Date(dateValue).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
                       </p>
                     </>
                   )}
                 </div>
               );
             })}
           </div>
         </div>
 
         {/* Delivery Address */}
         {order.addresses && (
           <div className="bg-card rounded-xl border border-border p-4">
             <h3 className="font-semibold text-foreground mb-3">Delivery Address</h3>
             <div className="text-sm text-muted-foreground space-y-1">
               {order.addresses.address_line && <p>{order.addresses.address_line}</p>}
               <p>{order.addresses.city}, {order.addresses.state}</p>
               <p>{order.addresses.country} - {order.addresses.zip_code}</p>
               {order.addresses.mobile && <p>Mobile: {order.addresses.mobile}</p>}
               {order.addresses.transporter && <p>Transporter: {order.addresses.transporter}</p>}
             </div>
           </div>
         )}
 
         {/* Order Note */}
         <div className="bg-card rounded-xl border border-border p-4">
           <h3 className="font-semibold text-foreground mb-2">Order Note</h3>
           <p className="text-muted-foreground text-sm italic">
             {order.order_note || 'No special instructions'}
           </p>
         </div>
 
         {/* Amount Details */}
         <div className="bg-card rounded-xl border border-border p-4">
           <h3 className="font-semibold text-foreground mb-4">Amount Details</h3>
           <div className="space-y-2">
             <div className="flex justify-between text-sm">
               <span className="text-muted-foreground">Net Amount:</span>
               <span className="text-foreground">₹{order.net_amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
             </div>
             <div className="flex justify-between text-sm">
               <span className="text-muted-foreground">Tax Amount:</span>
               <span className="text-foreground">₹{order.tax_amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
             </div>
             <div className="flex justify-between text-base font-semibold pt-2 border-t border-border">
               <span className="text-foreground">Total Amount:</span>
               <span className="text-primary">₹{order.total_amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
             </div>
           </div>
         </div>
       </main>
     </div>
   );
 };
 
 export default OrderDetailPage;