import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { User, Phone, Mail, MapPin, Building } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Profile" showBack={false} />

      <main className="px-4 py-4">
        {/* Profile Header */}
        <div className="bg-card rounded-xl border border-border p-6 text-center mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Guest User</h2>
          <p className="text-muted-foreground text-sm">Sign in to track orders</p>
        </div>

        {/* Company Info */}
        <div className="bg-card rounded-xl border border-border p-4 space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Building className="w-5 h-5 text-primary" />
            Contact Us
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">info@newonetouchautomation.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Address</p>
                <p className="text-muted-foreground text-sm">
                  New Onetouch Automation and Solutions<br />
                  Industrial Area, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-card rounded-xl border border-border p-4 mt-4">
          <h3 className="font-semibold text-foreground mb-3">About Us</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            New Onetouch Automation and Solutions is a leading manufacturer and supplier of 
            industrial food processing machinery. We specialize in high-quality automation 
            equipment for commercial kitchens, restaurants, and food production facilities.
          </p>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
