 import PageHeader from '@/components/PageHeader';
 import { Building, Smartphone, Copy } from 'lucide-react';
 import { useToast } from '@/hooks/use-toast';
 
 const PaymentPage = () => {
   const { toast } = useToast();
 
   const copyToClipboard = (text: string, label: string) => {
     navigator.clipboard.writeText(text);
     toast({ title: 'Copied!', description: `${label} copied to clipboard` });
   };
 
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Payment Details" />
 
       <main className="px-4 py-4 space-y-4">
         {/* Bank Details */}
         <div className="bg-card rounded-xl border border-border overflow-hidden">
           <div className="flex items-center gap-3 p-4 border-b border-border bg-secondary/30">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
               <Building className="w-5 h-5 text-blue-600" />
             </div>
             <h3 className="font-semibold text-foreground">Bank Details</h3>
           </div>
           <div className="p-4 space-y-3">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-muted-foreground text-sm">Account Holder:</p>
                 <p className="text-foreground font-medium"></p>
               </div>
             </div>
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-muted-foreground text-sm">Bank Name:</p>
                 <p className="text-foreground font-medium"></p>
               </div>
             </div>
             <div className="flex justify-between items-center">
               <div>
                 <p className="text-muted-foreground text-sm">Account Number:</p>
                 <p className="text-foreground font-medium"></p>
               </div>
               <button onClick={() => copyToClipboard('', 'Account Number')} className="p-2 hover:bg-secondary rounded-lg">
                 <Copy className="w-4 h-4 text-muted-foreground" />
               </button>
             </div>
             <div className="flex justify-between items-center">
               <div>
                 <p className="text-muted-foreground text-sm">IFSC Code:</p>
                 <p className="text-foreground font-medium"></p>
               </div>
               <button onClick={() => copyToClipboard('', 'IFSC Code')} className="p-2 hover:bg-secondary rounded-lg">
                 <Copy className="w-4 h-4 text-muted-foreground" />
               </button>
             </div>
             <div className="flex justify-between items-center">
               <div>
                 <p className="text-muted-foreground text-sm">GST Number:</p>
                 <p className="text-foreground font-medium"></p>
               </div>
               <button onClick={() => copyToClipboard('', 'GST Number')} className="p-2 hover:bg-secondary rounded-lg">
                 <Copy className="w-4 h-4 text-muted-foreground" />
               </button>
             </div>
           </div>
         </div>
 
         {/* UPI Payment */}
         <div className="bg-card rounded-xl border border-border overflow-hidden">
           <div className="flex items-center gap-3 p-4 border-b border-border bg-secondary/30">
             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
               <Smartphone className="w-5 h-5 text-green-600" />
             </div>
             <h3 className="font-semibold text-foreground">UPI Payment</h3>
           </div>
           <div className="p-4">
             {/* QR Code Placeholder */}
             <div className="w-48 h-48 mx-auto bg-secondary rounded-xl flex items-center justify-center mb-4">
               <span className="text-muted-foreground text-sm">QR Code</span>
             </div>
             
             <div className="space-y-3">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="text-muted-foreground text-sm">Account Holder:</p>
                   <p className="text-foreground font-medium"></p>
                 </div>
               </div>
               <div className="flex justify-between items-center">
                 <div>
                   <p className="text-muted-foreground text-sm">Mobile Number:</p>
                   <p className="text-foreground font-medium"></p>
                 </div>
                 <button onClick={() => copyToClipboard('', 'Mobile Number')} className="p-2 hover:bg-secondary rounded-lg">
                   <Copy className="w-4 h-4 text-muted-foreground" />
                 </button>
               </div>
               <div className="flex justify-between items-center">
                 <div>
                   <p className="text-muted-foreground text-sm">UPI ID:</p>
                   <p className="text-foreground font-medium"></p>
                 </div>
                 <button onClick={() => copyToClipboard('', 'UPI ID')} className="p-2 hover:bg-secondary rounded-lg">
                   <Copy className="w-4 h-4 text-muted-foreground" />
                 </button>
               </div>
             </div>
           </div>
         </div>
 
         {/* Payment Instructions */}
         <div className="bg-card rounded-xl border border-border p-4">
           <h3 className="font-semibold text-foreground mb-3">Payment Instructions</h3>
           <ul className="space-y-2 text-sm text-muted-foreground">
             <li className="flex gap-2">
               <span>•</span>
               <span>For bank transfer, use the account details above</span>
             </li>
             <li className="flex gap-2">
               <span>•</span>
               <span>For UPI payment, scan the QR code or use the UPI ID</span>
             </li>
             <li className="flex gap-2">
               <span>•</span>
               <span>Please mention your order number in the payment reference</span>
             </li>
             <li className="flex gap-2">
               <span>•</span>
               <span>Payment confirmation will be sent via SMS/Email</span>
             </li>
           </ul>
         </div>
       </main>
     </div>
   );
 };
 
 export default PaymentPage;