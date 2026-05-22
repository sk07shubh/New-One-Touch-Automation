import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import AuthPage from "./pages/AuthPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import AddressesPage from "./pages/profile/AddressesPage";
import PaymentPage from "./pages/profile/PaymentPage";
import WishlistPage from "./pages/profile/WishlistPage";
import ContactPage from "./pages/profile/ContactPage";
import AboutPage from "./pages/profile/AboutPage";
import TermsPage from "./pages/profile/TermsPage";
import PrivacyPage from "./pages/profile/PrivacyPage";
import CataloguePage from "./pages/profile/CataloguePage";
import PriceListPage from "./pages/profile/PriceListPage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-muted/30">
              <div className="max-w-lg mx-auto bg-background min-h-screen shadow-xl relative">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/category/:slug" element={<CategoryPage />} />
                  <Route path="/product/:slug" element={<ProductDetailPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/order/:id" element={<OrderDetailPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/profile/edit" element={<EditProfilePage />} />
                  <Route path="/profile/addresses" element={<AddressesPage />} />
                  <Route path="/profile/payment" element={<PaymentPage />} />
                  <Route path="/profile/wishlist" element={<WishlistPage />} />
                  <Route path="/profile/contact" element={<ContactPage />} />
                  <Route path="/profile/about" element={<AboutPage />} />
                  <Route path="/profile/terms" element={<TermsPage />} />
                  <Route path="/profile/privacy" element={<PrivacyPage />} />
                  <Route path="/profile/catalogue" element={<CataloguePage />} />
                  <Route path="/profile/pricelist" element={<PriceListPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
