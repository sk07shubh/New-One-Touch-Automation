 import { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
 import PageHeader from '@/components/PageHeader';
 import { useAuth } from '@/contexts/AuthContext';
 import { supabase } from '@/integrations/supabase/client';
 import { useToast } from '@/hooks/use-toast';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 
 const EditProfilePage = () => {
   const { user } = useAuth();
   const navigate = useNavigate();
   const { toast } = useToast();
   const [loading, setLoading] = useState(true);
   const [saving, setSaving] = useState(false);
   const [formData, setFormData] = useState({
     full_name: '',
     company_name: '',
     phone: '',
     gst_number: '',
   });
 
   useEffect(() => {
     if (user) {
       fetchProfile();
     }
   }, [user]);
 
   const fetchProfile = async () => {
     const { data, error } = await supabase
       .from('profiles')
       .select('*')
       .eq('user_id', user?.id)
       .single();
 
     if (!error && data) {
       setFormData({
         full_name: data.full_name || '',
         company_name: data.company_name || '',
         phone: data.phone || '',
         gst_number: data.gst_number || '',
       });
     }
     setLoading(false);
   };
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setSaving(true);
 
     const { error } = await supabase
       .from('profiles')
       .update(formData)
       .eq('user_id', user?.id);
 
     if (error) {
       toast({ title: 'Error', description: error.message, variant: 'destructive' });
     } else {
       toast({ title: 'Success', description: 'Profile updated successfully' });
       navigate('/profile');
     }
     setSaving(false);
   };
 
   if (loading) {
     return (
       <div className="min-h-screen bg-background">
         <PageHeader title="Edit Profile" />
         <div className="flex items-center justify-center py-16">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
         </div>
       </div>
     );
   }
 
   return (
     <div className="min-h-screen bg-background pb-8">
       <PageHeader title="Edit Profile" />
 
       <main className="px-4 py-4">
         <form onSubmit={handleSubmit} className="space-y-4">
           <div className="space-y-2">
             <Label>Full Name</Label>
             <Input
               value={formData.full_name}
               onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
               placeholder="Enter your full name"
             />
           </div>
 
           <div className="space-y-2">
             <Label>Company Name</Label>
             <Input
               value={formData.company_name}
               onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
               placeholder="Enter your company name"
             />
           </div>
 
           <div className="space-y-2">
             <Label>Phone Number</Label>
             <Input
               value={formData.phone}
               onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
               placeholder="Enter your phone number"
             />
           </div>
 
           <div className="space-y-2">
             <Label>GST Number</Label>
             <Input
               value={formData.gst_number}
               onChange={(e) => setFormData(prev => ({ ...prev, gst_number: e.target.value }))}
               placeholder="Enter your GST number"
             />
           </div>
 
           <Button type="submit" className="w-full" disabled={saving}>
             {saving ? 'Saving...' : 'Save Changes'}
           </Button>
         </form>
       </main>
     </div>
   );
 };
 
 export default EditProfilePage;