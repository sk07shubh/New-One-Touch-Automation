 import { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import PageHeader from '@/components/PageHeader';
 import { useAuth } from '@/contexts/AuthContext';
 import { supabase } from '@/integrations/supabase/client';
 import { products } from '@/data/products';
 import { Heart, Trash2 } from 'lucide-react';
 import { useToast } from '@/hooks/use-toast';
 
 interface WishlistItem {
   id: string;
   product_id: string;
   variant_id: string | null;
 }
 
 const WishlistPage = () => {
   const { user } = useAuth();
   const { toast } = useToast();
   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     if (user) {
       fetchWishlist();
     } else {
       setLoading(false);
     }
   }, [user]);
 
   const fetchWishlist = async () => {
     const { data, error } = await supabase
       .from('wishlist')
       .select('*')
       .order('created_at', { ascending: false });
 
     if (!error && data) {
       setWishlist(data);
     }
     setLoading(false);
   };
 
   const removeFromWishlist = async (id: string) => {
     const { error } = await supabase.from('wishlist').delete().eq('id', id);
     if (!error) {
       setWishlist(prev => prev.filter(item => item.id !== id));
       toast({ title: 'Removed', description: 'Item removed from wishlist' });
     }
   };
 
   const getProductDetails = (productId: string) => {
     return products.find(p => p.id === productId);
   };
 
   if (loading) {
     return (
       <div className="min-h-screen bg-background">
         <PageHeader title="Wishlist" />
         <div className="flex items-center justify-center py-16">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
         </div>
       </div>
     );
   }
 
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Wishlist" />
 
       <main className="px-4 py-4">
         {wishlist.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-16 text-center">
             <div className="text-6xl mb-4">💝</div>
             <h2 className="text-xl font-semibold text-foreground mb-2">Your Wishlist is Empty</h2>
             <p className="text-muted-foreground text-sm mb-6">Start adding products to your wishlist to see them here</p>
             <Link
               to="/products"
               className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
             >
               Browse Products
             </Link>
           </div>
         ) : (
           <div className="space-y-4">
             {wishlist.map(item => {
               const product = getProductDetails(item.product_id);
               if (!product) return null;
               
               return (
                 <div key={item.id} className="bg-card rounded-xl border border-border p-4 flex gap-4">
                   <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                     <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1">
                     <Link to={`/product/${product.slug}`} className="font-medium text-foreground hover:text-primary">
                       {product.name}
                     </Link>
                     <p className="text-primary font-semibold mt-1">₹{product.basePrice.toLocaleString('en-IN')}</p>
                   </div>
                   <button
                     onClick={() => removeFromWishlist(item.id)}
                     className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                   >
                     <Trash2 className="w-5 h-5" />
                   </button>
                 </div>
               );
             })}
           </div>
         )}
       </main>
     </div>
   );
 };
 
 export default WishlistPage;