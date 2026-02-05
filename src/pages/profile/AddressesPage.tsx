 import { useState, useEffect } from 'react';
 import PageHeader from '@/components/PageHeader';
 import { useAuth } from '@/contexts/AuthContext';
 import { supabase } from '@/integrations/supabase/client';
 import { useToast } from '@/hooks/use-toast';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { Plus, X } from 'lucide-react';
 
 interface Address {
   id: string;
   company: string | null;
   mobile: string | null;
   address_line: string | null;
   city: string | null;
   state: string | null;
   country: string | null;
   zip_code: string | null;
   transporter: string | null;
   created_at: string;
 }
 
 const AddressesPage = () => {
   const { user } = useAuth();
   const { toast } = useToast();
   const [addresses, setAddresses] = useState<Address[]>([]);
   const [loading, setLoading] = useState(true);
   const [showForm, setShowForm] = useState(false);
   const [editingId, setEditingId] = useState<string | null>(null);
   const [formData, setFormData] = useState({
     company: '',
     mobile: '',
     address_line: '',
     city: '',
     state: '',
     country: 'India',
     zip_code: '',
     transporter: '',
   });
 
   useEffect(() => {
     if (user) {
       fetchAddresses();
     }
   }, [user]);
 
   const fetchAddresses = async () => {
     const { data, error } = await supabase
       .from('addresses')
       .select('*')
       .order('created_at', { ascending: false });
 
     if (!error && data) {
       setAddresses(data);
     }
     setLoading(false);
   };
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     if (editingId) {
       const { error } = await supabase
         .from('addresses')
         .update(formData)
         .eq('id', editingId);
 
       if (error) {
         toast({ title: 'Error', description: error.message, variant: 'destructive' });
       } else {
         toast({ title: 'Success', description: 'Address updated successfully' });
         fetchAddresses();
         resetForm();
       }
     } else {
       const { error } = await supabase
         .from('addresses')
         .insert([{ ...formData, user_id: user?.id }]);
 
       if (error) {
         toast({ title: 'Error', description: error.message, variant: 'destructive' });
       } else {
         toast({ title: 'Success', description: 'Address added successfully' });
         fetchAddresses();
         resetForm();
       }
     }
   };
 
   const handleDelete = async (id: string) => {
     const { error } = await supabase.from('addresses').delete().eq('id', id);
     if (error) {
       toast({ title: 'Error', description: error.message, variant: 'destructive' });
     } else {
       toast({ title: 'Success', description: 'Address deleted successfully' });
       fetchAddresses();
     }
   };
 
   const handleEdit = (address: Address) => {
     setEditingId(address.id);
     setFormData({
       company: address.company || '',
       mobile: address.mobile || '',
       address_line: address.address_line || '',
       city: address.city || '',
       state: address.state || '',
       country: address.country || 'India',
       zip_code: address.zip_code || '',
       transporter: address.transporter || '',
     });
     setShowForm(true);
   };
 
   const resetForm = () => {
     setShowForm(false);
     setEditingId(null);
     setFormData({
       company: '',
       mobile: '',
       address_line: '',
       city: '',
       state: '',
       country: 'India',
       zip_code: '',
       transporter: '',
     });
   };
 
   return (
     <div className="min-h-screen bg-background pb-24">
       <PageHeader title="Manage Addresses" />
 
       <main className="px-4 py-4">
         {loading ? (
           <div className="flex items-center justify-center py-16">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
           </div>
         ) : showForm ? (
           <form onSubmit={handleSubmit} className="space-y-4">
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-lg font-semibold">{editingId ? 'Edit Address' : 'Add New Address'}</h2>
               <button type="button" onClick={resetForm}>
                 <X className="w-6 h-6 text-muted-foreground" />
               </button>
             </div>
             
             <div className="space-y-2">
               <Label>Company</Label>
               <Input value={formData.company} onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))} />
             </div>
             <div className="space-y-2">
               <Label>Mobile</Label>
               <Input value={formData.mobile} onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))} />
             </div>
             <div className="space-y-2">
               <Label>Address</Label>
               <Input value={formData.address_line} onChange={(e) => setFormData(prev => ({ ...prev, address_line: e.target.value }))} />
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label>City</Label>
                 <Input value={formData.city} onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))} />
               </div>
               <div className="space-y-2">
                 <Label>State</Label>
                 <Input value={formData.state} onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))} />
               </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label>Country</Label>
                 <Input value={formData.country} onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))} />
               </div>
               <div className="space-y-2">
                 <Label>ZIP Code</Label>
                 <Input value={formData.zip_code} onChange={(e) => setFormData(prev => ({ ...prev, zip_code: e.target.value }))} />
               </div>
             </div>
             <div className="space-y-2">
               <Label>Transporter</Label>
               <Input value={formData.transporter} onChange={(e) => setFormData(prev => ({ ...prev, transporter: e.target.value }))} />
             </div>
             
             <Button type="submit" className="w-full">{editingId ? 'Update Address' : 'Save Address'}</Button>
           </form>
         ) : (
           <div className="space-y-4">
             {addresses.map((address, index) => (
               <div key={address.id} className="bg-card rounded-xl border border-border p-4">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="font-semibold text-foreground">Address #{index + 1}</h3>
                   <div className="flex gap-2">
                     <button
                       onClick={() => handleEdit(address)}
                       className="px-4 py-1.5 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90"
                     >
                       Edit
                     </button>
                     <button
                       onClick={() => handleDelete(address.id)}
                       className="px-4 py-1.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
                     >
                       Delete
                     </button>
                   </div>
                 </div>
                 
                 <div className="space-y-2 text-sm">
                   {address.company && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">Company:</span>
                       <span className="text-foreground">{address.company}</span>
                     </div>
                   )}
                   {address.mobile && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">Mobile:</span>
                       <span className="text-foreground">{address.mobile}</span>
                     </div>
                   )}
                   {address.address_line && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">Address:</span>
                       <span className="text-foreground">{address.address_line}</span>
                     </div>
                   )}
                   {address.city && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">City:</span>
                       <span className="text-foreground">{address.city}</span>
                     </div>
                   )}
                   {address.state && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">State:</span>
                       <span className="text-foreground">{address.state}</span>
                     </div>
                   )}
                   {address.country && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">Country:</span>
                       <span className="text-foreground">{address.country}</span>
                     </div>
                   )}
                   {address.zip_code && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">ZIP Code:</span>
                       <span className="text-foreground">{address.zip_code}</span>
                     </div>
                   )}
                   {address.transporter && (
                     <div className="flex">
                       <span className="text-muted-foreground w-28">Transporter:</span>
                       <span className="text-foreground">{address.transporter}</span>
                     </div>
                   )}
                   <div className="flex">
                     <span className="text-muted-foreground w-28">Created:</span>
                     <span className="text-foreground">
                       {new Date(address.created_at).toLocaleDateString('en-IN', { 
                         month: 'short', day: 'numeric', year: 'numeric' 
                       })}
                     </span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
       </main>
 
       {!showForm && (
         <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
           <Button onClick={() => setShowForm(true)} className="w-full">
             <Plus className="w-5 h-5 mr-2" />
             Add New Address
           </Button>
         </div>
       )}
     </div>
   );
 };
 
 export default AddressesPage;