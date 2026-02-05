 import PageHeader from '@/components/PageHeader';
 
 const AboutPage = () => {
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="About" />
 
       <main className="px-4 py-4 space-y-4">
         <div className="bg-card rounded-xl border border-border p-4">
           <h2 className="text-lg font-semibold text-foreground mb-3">About New Onetouch Automation</h2>
           <p className="text-muted-foreground text-sm leading-relaxed mb-4">
             New Onetouch Automation and Solutions is a leading manufacturer and supplier of 
             industrial food processing machinery. We specialize in high-quality automation 
             equipment for commercial kitchens, restaurants, and food production facilities.
           </p>
           <p className="text-muted-foreground text-sm leading-relaxed mb-4">
             With years of experience in the industry, we have established ourselves as a 
             trusted partner for businesses looking to improve their food processing efficiency 
             and quality.
           </p>
           <p className="text-muted-foreground text-sm leading-relaxed">
             Our range includes machines for making rotis, namkeen, sweets, beverages, and 
             various other food products. All our machines are built with high-quality 
             stainless steel and are designed for durability and easy maintenance.
           </p>
         </div>
 
         <div className="bg-card rounded-xl border border-border p-4">
           <h2 className="text-lg font-semibold text-foreground mb-3">Our Mission</h2>
           <p className="text-muted-foreground text-sm leading-relaxed">
             To provide affordable, high-quality food processing machinery that helps 
             businesses scale their operations while maintaining product quality and hygiene 
             standards.
           </p>
         </div>
 
         <div className="bg-card rounded-xl border border-border p-4">
           <h2 className="text-lg font-semibold text-foreground mb-3">Why Choose Us</h2>
           <ul className="space-y-2 text-sm text-muted-foreground">
             <li className="flex gap-2">
               <span className="text-primary">✓</span>
               <span>High-quality stainless steel construction</span>
             </li>
             <li className="flex gap-2">
               <span className="text-primary">✓</span>
               <span>Competitive pricing with GST included</span>
             </li>
             <li className="flex gap-2">
               <span className="text-primary">✓</span>
               <span>After-sales support and maintenance</span>
             </li>
             <li className="flex gap-2">
               <span className="text-primary">✓</span>
               <span>Pan-India delivery and installation</span>
             </li>
             <li className="flex gap-2">
               <span className="text-primary">✓</span>
               <span>Customization options available</span>
             </li>
           </ul>
         </div>
       </main>
     </div>
   );
 };
 
 export default AboutPage;