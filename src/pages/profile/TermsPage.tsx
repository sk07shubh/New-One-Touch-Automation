 import PageHeader from '@/components/PageHeader';
 
 const TermsPage = () => {
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Terms & Conditions" />
 
       <main className="px-4 py-4">
         <div className="bg-card rounded-xl border border-border p-4 space-y-6">
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">1. General Terms</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               By accessing and using this website, you accept and agree to be bound by the 
               terms and conditions of this agreement. If you do not agree to these terms, 
               please do not use this website.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">2. Products</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               All products displayed on this website are subject to availability. Prices are 
               subject to change without notice. All prices displayed include applicable GST.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">3. Orders</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               Once an order is placed, it cannot be cancelled without prior approval. 
               Delivery times are estimates and may vary based on location and product 
               availability.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">4. Payment</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               Payment must be made in full before dispatch of goods. We accept bank 
               transfers and UPI payments.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">5. Warranty</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               All machines come with a standard warranty. Warranty terms vary by product 
               and will be specified at the time of purchase.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">6. Returns</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               Returns are accepted only for manufacturing defects reported within 7 days 
               of delivery. The product must be unused and in original packaging.
             </p>
           </section>
         </div>
       </main>
     </div>
   );
 };
 
 export default TermsPage;