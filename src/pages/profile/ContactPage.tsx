 import PageHeader from '@/components/PageHeader';
 import { Phone, Mail, MapPin, Globe } from 'lucide-react';
 
 const ContactPage = () => {
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Contact Us" />
 
       <main className="px-4 py-4 space-y-4">
         <div className="bg-card rounded-xl border border-border p-4">
           <h2 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h2>
           
           <div className="space-y-4">
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                 <Phone className="w-5 h-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium text-foreground">Phone</p>
                 <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
               </div>
             </div>
 
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                 <Mail className="w-5 h-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium text-foreground">Email</p>
                 <p className="text-muted-foreground text-sm">info@newonetouchautomation.com</p>
               </div>
             </div>
 
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                 <MapPin className="w-5 h-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium text-foreground">Address</p>
                 <p className="text-muted-foreground text-sm">
                   New Onetouch Automation and Solutions<br />
                   Industrial Area, India
                 </p>
               </div>
             </div>
 
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                 <Globe className="w-5 h-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium text-foreground">Website</p>
                 <p className="text-muted-foreground text-sm">www.newonetouchautomation.com</p>
               </div>
             </div>
           </div>
         </div>
 
         <div className="bg-card rounded-xl border border-border p-4">
           <h2 className="text-lg font-semibold text-foreground mb-3">Business Hours</h2>
           <div className="space-y-2 text-sm">
             <div className="flex justify-between">
               <span className="text-muted-foreground">Monday - Saturday</span>
               <span className="text-foreground">9:00 AM - 7:00 PM</span>
             </div>
             <div className="flex justify-between">
               <span className="text-muted-foreground">Sunday</span>
               <span className="text-foreground">Closed</span>
             </div>
           </div>
         </div>
       </main>
     </div>
   );
 };
 
 export default ContactPage;