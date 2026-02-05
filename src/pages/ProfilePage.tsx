 import { useState, useEffect } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
 import BottomNavigation from '@/components/BottomNavigation';
 import { useAuth } from '@/contexts/AuthContext';
 import { supabase } from '@/integrations/supabase/client';
 import { useToast } from '@/hooks/use-toast';
 import logo from '@/assets/logo.png';
 import {
   MapPin, CreditCard, DollarSign, Heart, Package, FileText,
   Phone, Info, ClipboardList, Lock, LogOut, Trash2, ChevronRight, Check
 } from 'lucide-react';
 
 interface Profile {
   full_name: string | null;
   company_name: string | null;
   phone: string | null;
   gst_number: string | null;
   is_verified: boolean;
   avatar_url: string | null;
 }
 
 const ProfilePage = () => {
   const { user, signOut } = useAuth();
   const navigate = useNavigate();
   const { toast } = useToast();
   const [profile, setProfile] = useState<Profile | null>(null);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     if (user) {
       fetchProfile();
     } else {
       setLoading(false);
     }
   }, [user]);
 
   const fetchProfile = async () => {
     const { data, error } = await supabase
       .from('profiles')
       .select('*')
       .eq('user_id', user?.id)
       .single();
 
     if (!error && data) {
       setProfile(data);
     }
     setLoading(false);
   };
 
   const handleLogout = async () => {
     await signOut();
     toast({
       title: 'Logged out',
       description: 'You have been logged out successfully.',
     });
     navigate('/');
   };
 
   if (!user) {
     return (
       <div className="min-h-screen bg-background pb-20">
         <header className="px-4 py-4 bg-card flex items-center justify-between border-b border-border">
           <h1 className="text-lg font-semibold text-foreground">Profile</h1>
           <img src={logo} alt="Logo" className="h-10" />
         </header>
 
         <main className="px-4 py-4">
           <div className="flex flex-col items-center justify-center py-16 text-center">
             <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
               <span className="text-4xl">👤</span>
             </div>
             <h2 className="text-lg font-semibold text-foreground mb-2">Sign in to your account</h2>
             <p className="text-muted-foreground text-sm mb-6">Access your orders, wishlist, and more</p>
             <Link
               to="/auth"
               className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
             >
               Sign In
             </Link>
           </div>
         </main>
 
         <BottomNavigation />
       </div>
     );
   }
 
   return (
     <div className="min-h-screen bg-background pb-20">
       <header className="px-4 py-4 bg-card flex items-center justify-between border-b border-border">
         <h1 className="text-lg font-semibold text-foreground">Profile</h1>
         <img src={logo} alt="Logo" className="h-10" />
       </header>
 
       <main className="px-4 py-4">
         {/* Profile Card */}
         <div className="bg-card rounded-xl border border-border p-5 mb-4">
           <div className="flex items-start gap-4">
             <div className="relative">
               <div className="w-20 h-20 rounded-full border-4 border-primary/20 flex items-center justify-center bg-secondary">
                 <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                   <span className="text-2xl">👤</span>
                 </div>
               </div>
               <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                 <Check className="w-4 h-4 text-primary-foreground" />
               </div>
             </div>
             
             <div className="flex-1">
               <h2 className="text-xl font-semibold text-foreground">
                 {profile?.full_name || user.email?.split('@')[0] || 'User'}
               </h2>
               {profile?.company_name && (
                 <p className="text-muted-foreground text-sm">{profile.company_name}</p>
               )}
               <div className="flex items-center gap-2 mt-1">
                 {profile?.phone && (
                   <span className="text-primary text-sm">{profile.phone}</span>
                 )}
                 {profile?.is_verified && (
                   <span className="px-2 py-0.5 bg-success/10 text-success text-xs rounded-full">Verified</span>
                 )}
               </div>
               {profile?.gst_number && (
                 <p className="text-muted-foreground text-xs mt-1">GST: {profile.gst_number}</p>
               )}
             </div>
           </div>
           <Link
             to="/profile/edit"
             className="mt-4 w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium text-center block hover:bg-primary/90 transition-colors"
           >
             Edit Profile
           </Link>
         </div>
 
         {/* Account Section */}
         <div className="bg-card rounded-xl border border-border mb-4">
           <div className="px-4 py-3 border-b border-border">
             <h3 className="text-sm font-semibold text-muted-foreground">Account</h3>
           </div>
           <div className="divide-y divide-border">
             <Link to="/profile/addresses" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                   <MapPin className="w-5 h-5 text-destructive" />
                 </div>
                 <span className="text-foreground">Addresses</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/payment" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                   <CreditCard className="w-5 h-5 text-warning" />
                 </div>
                 <span className="text-foreground">Payment Methods</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/pricelist" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                   <DollarSign className="w-5 h-5 text-warning" />
                 </div>
                 <span className="text-foreground">Price List</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/wishlist" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                   <Heart className="w-5 h-5 text-accent" />
                 </div>
                 <span className="text-foreground">Wishlist</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
           </div>
         </div>
 
         {/* Products Section */}
         <div className="bg-card rounded-xl border border-border mb-4">
           <div className="px-4 py-3 border-b border-border">
             <h3 className="text-sm font-semibold text-muted-foreground">Products</h3>
           </div>
           <div className="divide-y divide-border">
             <Link to="/products" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                   <Package className="w-5 h-5 text-warning" />
                 </div>
                 <span className="text-foreground">All Products</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/catalogue" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                   <FileText className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-foreground">Catalogue</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
           </div>
         </div>
 
         {/* Support Section */}
         <div className="bg-card rounded-xl border border-border mb-4">
           <div className="px-4 py-3 border-b border-border">
             <h3 className="text-sm font-semibold text-muted-foreground">Support</h3>
           </div>
           <div className="divide-y divide-border">
             <Link to="/profile/contact" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                   <Phone className="w-5 h-5 text-muted-foreground" />
                 </div>
                 <span className="text-foreground">Contact Us</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/about" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                   <Info className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-foreground">About</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/terms" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                   <ClipboardList className="w-5 h-5 text-warning" />
                 </div>
                 <span className="text-foreground">Terms & Conditions</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
             <Link to="/profile/privacy" className="flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                   <Lock className="w-5 h-5 text-warning" />
                 </div>
                 <span className="text-foreground">Privacy Policy</span>
               </div>
               <ChevronRight className="w-5 h-5 text-muted-foreground" />
             </Link>
           </div>
         </div>
 
         {/* Account Actions */}
         <div className="bg-card rounded-xl border border-border mb-4">
           <div className="px-4 py-3 border-b border-border">
             <h3 className="text-sm font-semibold text-muted-foreground">Account Actions</h3>
           </div>
           <div className="p-4 space-y-3">
             <button
               onClick={handleLogout}
               className="w-full bg-destructive text-destructive-foreground py-3 rounded-xl font-medium hover:bg-destructive/90 transition-colors flex items-center justify-center gap-2"
             >
               <LogOut className="w-5 h-5" />
               Logout
             </button>
             <button
               className="w-full border-2 border-destructive text-destructive py-3 rounded-xl font-medium hover:bg-destructive/5 transition-colors flex items-center justify-center gap-2"
             >
               <Trash2 className="w-5 h-5" />
               Delete Account
             </button>
           </div>
         </div>
 
         {/* Footer */}
         <div className="text-center py-4">
           <p className="text-muted-foreground text-sm">
             Developed by <span className="text-primary font-medium underline">New Onetouch Automation</span>
           </p>
         </div>
       </main>
 
       <BottomNavigation />
     </div>
   );
 };
 
 export default ProfilePage;