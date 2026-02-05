 import PageHeader from '@/components/PageHeader';
 
 const PrivacyPage = () => {
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Privacy Policy" />
 
       <main className="px-4 py-4">
         <div className="bg-card rounded-xl border border-border p-4 space-y-6">
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">Information We Collect</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               We collect information you provide directly to us, such as when you create 
               an account, place an order, or contact us for support. This includes your 
               name, email, phone number, and shipping address.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">How We Use Your Information</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               We use the information we collect to process orders, communicate with you, 
               and improve our services. We may also use your information to send you 
               updates about new products and promotions.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">Information Security</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               We implement appropriate security measures to protect your personal information 
               against unauthorized access, alteration, disclosure, or destruction.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">Data Sharing</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               We do not sell, trade, or otherwise transfer your personal information to 
               third parties except for trusted partners who assist us in operating our 
               website and delivering orders.
             </p>
           </section>
 
           <section>
             <h2 className="text-lg font-semibold text-foreground mb-2">Contact Us</h2>
             <p className="text-muted-foreground text-sm leading-relaxed">
               If you have any questions about this Privacy Policy, please contact us at 
               info@newonetouchautomation.com
             </p>
           </section>
         </div>
       </main>
     </div>
   );
 };
 
 export default PrivacyPage;