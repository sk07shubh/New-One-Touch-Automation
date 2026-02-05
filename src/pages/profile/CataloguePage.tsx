 import PageHeader from '@/components/PageHeader';
 import { FileText, Download } from 'lucide-react';
 
 const CataloguePage = () => {
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Catalogue" />
 
       <main className="px-4 py-4">
         <div className="bg-card rounded-xl border border-border p-6 text-center">
           <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
             <FileText className="w-10 h-10 text-primary" />
           </div>
           <h2 className="text-lg font-semibold text-foreground mb-2">Product Catalogue</h2>
           <p className="text-muted-foreground text-sm mb-6">
             Download our complete product catalogue with specifications and pricing
           </p>
           <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
             <Download className="w-5 h-5" />
             Download Catalogue
           </button>
         </div>
       </main>
     </div>
   );
 };
 
 export default CataloguePage;