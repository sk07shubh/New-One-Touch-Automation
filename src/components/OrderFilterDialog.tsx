 import { useState } from 'react';
 import { X } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 interface OrderFilterDialogProps {
   isOpen: boolean;
   onClose: () => void;
   filters: { status: string | null; date: string | null };
   onApply: (filters: { status: string | null; date: string | null }) => void;
 }
 
 const OrderFilterDialog = ({ isOpen, onClose, filters, onApply }: OrderFilterDialogProps) => {
   const [localFilters, setLocalFilters] = useState(filters);
 
   if (!isOpen) return null;
 
   const statusOptions = [
     { value: 'confirmed', label: 'Confirmed' },
     { value: 'processing', label: 'Processing' },
     { value: 'ready_to_dispatch', label: 'Ready to Dispatch' },
     { value: 'out_for_delivery', label: 'Out for Delivery' },
     { value: 'cancelled', label: 'Cancelled' },
   ];
 
   const dateOptions = [
     { value: 'last_month', label: 'Last Month' },
     { value: 'last_3_months', label: 'Last 3 Month' },
     { value: '2026', label: '2026' },
     { value: '2025', label: '2025' },
     { value: '2024', label: '2024' },
     { value: '2023', label: '2023' },
     { value: '2022', label: '2022' },
   ];
 
   const handleApply = () => {
     onApply(localFilters);
     onClose();
   };
 
   const handleClear = () => {
     setLocalFilters({ status: null, date: null });
   };
 
   return (
     <div className="fixed inset-0 z-50 flex items-end justify-center">
       <div className="absolute inset-0 bg-black/50" onClick={onClose} />
       <div className="relative bg-card rounded-t-3xl w-full max-w-lg p-6 animate-in slide-in-from-bottom">
         <div className="flex items-center justify-between mb-6">
           <h2 className="text-xl font-semibold text-foreground">Apply Filter</h2>
           <button onClick={onClose} className="p-1 hover:bg-secondary rounded-full transition-colors">
             <X className="w-6 h-6 text-muted-foreground" />
           </button>
         </div>
 
         {/* Order Status */}
         <div className="mb-6">
           <h3 className="text-base font-semibold text-foreground mb-4">Order Status</h3>
           <div className="grid grid-cols-2 gap-3">
             {statusOptions.map(option => (
               <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                   localFilters.status === option.value ? 'border-primary' : 'border-border'
                 }`}>
                   {localFilters.status === option.value && (
                     <div className="w-3 h-3 rounded-full bg-primary" />
                   )}
                 </div>
                 <span className="text-sm text-foreground">{option.label}</span>
                 <input
                   type="radio"
                   name="status"
                   value={option.value}
                   checked={localFilters.status === option.value}
                   onChange={() => setLocalFilters(prev => ({ ...prev, status: option.value }))}
                   className="sr-only"
                 />
               </label>
             ))}
           </div>
         </div>
 
         {/* Order Dates */}
         <div className="mb-8">
           <h3 className="text-base font-semibold text-foreground mb-4">Order Dates</h3>
           <div className="grid grid-cols-2 gap-3">
             {dateOptions.map(option => (
               <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                   localFilters.date === option.value ? 'border-primary' : 'border-border'
                 }`}>
                   {localFilters.date === option.value && (
                     <div className="w-3 h-3 rounded-full bg-primary" />
                   )}
                 </div>
                 <span className="text-sm text-foreground">{option.label}</span>
                 <input
                   type="radio"
                   name="date"
                   value={option.value}
                   checked={localFilters.date === option.value}
                   onChange={() => setLocalFilters(prev => ({ ...prev, date: option.value }))}
                   className="sr-only"
                 />
               </label>
             ))}
           </div>
         </div>
 
         {/* Buttons */}
         <div className="flex gap-4">
           <Button variant="outline" className="flex-1" onClick={handleClear}>
             Clear
           </Button>
           <Button className="flex-1" onClick={handleApply}>
             Apply
           </Button>
         </div>
       </div>
     </div>
   );
 };
 
 export default OrderFilterDialog;