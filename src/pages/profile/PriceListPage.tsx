 import PageHeader from '@/components/PageHeader';
 import { categories, products } from '@/data/products';
 import { Link } from 'react-router-dom';
 
 const PriceListPage = () => {
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Price List" />
 
       <main className="px-4 py-4">
         <div className="space-y-4">
           {categories.slice(0, 10).map(category => {
             const categoryProducts = products.filter(p => p.categoryId === category.id);
             if (categoryProducts.length === 0) return null;
 
             return (
               <div key={category.id} className="bg-card rounded-xl border border-border overflow-hidden">
                 <div className="bg-secondary/30 px-4 py-3 border-b border-border">
                   <h3 className="font-semibold text-foreground">{category.name}</h3>
                 </div>
                 <div className="divide-y divide-border">
                   {categoryProducts.map(product => (
                     <Link
                       key={product.id}
                       to={`/product/${product.slug}`}
                       className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
                     >
                       <span className="text-sm text-foreground">{product.name}</span>
                       <span className="text-sm font-semibold text-primary">
                         ₹{product.basePrice.toLocaleString('en-IN')}+
                       </span>
                     </Link>
                   ))}
                 </div>
               </div>
             );
           })}
         </div>
       </main>
     </div>
   );
 };
 
 export default PriceListPage;