import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, Play } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { getProductBySlug, getCategoryBySlug, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { ProductVariant } from '@/types/product';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  let product = slug ? getProductBySlug(slug) : null;

  // If product not found, try to find by category slug
  if (!product && slug) {
    const category = getCategoryBySlug(slug);
    if (category) {
      product = {
        id: category.id + '-1',
        name: category.name,
        slug: category.slug,
        categoryId: category.id,
        description: `Professional grade ${category.name.toLowerCase()} for commercial and industrial use. Available in multiple sizes to suit your production needs.`,
        image: category.image,
        basePrice: 25000,
        variants: [
          {
            id: `${category.id}-v1`,
            name: `${category.name} - Small`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-01`,
            price: 25000,
            size: '50 X 40 X 60',
            weight: '80 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Standard',
            motor: '1 hp',
            gstPercent: 18,
            description: 'Compact model for small operations',
          },
          {
            id: `${category.id}-v2`,
            name: `${category.name} - Medium`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-02`,
            price: 38000,
            size: '65 X 50 X 75',
            weight: '120 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Medium',
            motor: '1.5 hp',
            gstPercent: 18,
            description: 'Medium capacity for growing businesses',
          },
          {
            id: `${category.id}-v3`,
            name: `${category.name} - Large`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-03`,
            price: 55000,
            size: '80 X 60 X 90',
            weight: '180 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Large',
            motor: '2 hp',
            gstPercent: 18,
            description: 'Large capacity for commercial production',
          },
          {
            id: `${category.id}-v4`,
            name: `${category.name} - Industrial`,
            modelNo: `${category.slug.toUpperCase().slice(0, 3)}-04`,
            price: 75000,
            size: '100 X 75 X 110',
            weight: '250 kg',
            bodyMaterial: 'SS Body',
            capacity: 'Industrial',
            motor: '3 hp',
            gstPercent: 18,
            description: 'Industrial grade for large scale operations',
          },
        ],
      };
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <PageHeader title="Product Not Found" />
        <div className="p-4 text-center text-muted-foreground">
          The product you're looking for doesn't exist.
        </div>
        <BottomNavigation />
      </div>
    );
  }

  const selectedVariant = product.variants[selectedVariantIndex];
  const category = categories.find(c => c.id === product!.categoryId);

  const handleAddToCart = () => {
    addToCart(product!, selectedVariant, quantity);
    toast.success(`${selectedVariant.name} added to cart`);
  };

  const specs = [
    { label: 'Category', value: category?.name || 'N/A' },
    { label: 'Model No', value: selectedVariant.modelNo },
    { label: 'Weight', value: selectedVariant.weight },
    { label: 'Body Material', value: selectedVariant.bodyMaterial },
    { label: 'GST Tax', value: `${selectedVariant.gstPercent}%` },
    { label: 'Size (L*H*W)', value: selectedVariant.size },
    { label: 'Capacity', value: selectedVariant.capacity },
    { label: 'Motor', value: selectedVariant.motor },
    ...(selectedVariant.drumSize ? [{ label: 'Drum Size', value: selectedVariant.drumSize }] : []),
  ];

  const pageTitle = `${selectedVariant.name} — New One Touch`;
  const pageDesc = `${selectedVariant.name} (${selectedVariant.modelNo}). ${product.description}`.slice(0, 160);
  const canonical = `/product/${product.slug}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: selectedVariant.name,
    description: product.description,
    image: product.image,
    sku: selectedVariant.modelNo,
    brand: { "@type": "Brand", name: "New One Touch" },
    offers: {
      "@type": "Offer",
      price: selectedVariant.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://automation-genius-shop.lovable.app${canonical}`,
    },
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>
      <PageHeader title="Product Details" />

      <main>
        {/* Image Gallery */}
        <div className="relative bg-secondary/30 aspect-square">
          <span className="badge-tag absolute top-4 left-4 z-10">Auto-rotating</span>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-8"
          />
          <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-muted/80 rounded-full flex items-center justify-center shadow-md">
            <ChevronLeft className="w-6 h-6 text-muted-foreground" />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-muted/80 rounded-full flex items-center justify-center shadow-md">
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === imageIndex ? 'bg-primary w-4' : 'bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Title and Wishlist */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-foreground">{selectedVariant.name}</h1>
              <p className="text-muted-foreground text-sm mt-1">{selectedVariant.modelNo}</p>
            </div>
            <button
              onClick={() => setIsFavorite(prev => !prev)}
              className="w-10 h-10 flex items-center justify-center"
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`}
              />
            </button>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="price-display">
              ₹{selectedVariant.price.toLocaleString('en-IN')}
            </span>
            {selectedVariant.mrp && selectedVariant.mrp > selectedVariant.price && (
              <span className="text-muted-foreground line-through text-sm">₹{selectedVariant.mrp.toLocaleString('en-IN')}</span>
            )}
            <span className="gst-text">GST: {selectedVariant.gstPercent}%</span>
            <a
              href={`https://wa.me/919922051400?text=${encodeURIComponent(`Hi, I'm interested in ${selectedVariant.name} (${selectedVariant.modelNo}) - ₹${selectedVariant.price.toLocaleString('en-IN')}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Quantity and Demo Video */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="quantity-btn"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium border border-border rounded-md py-2">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="quantity-btn"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Play className="w-4 h-4 fill-current" />
              Demo Video
            </button>
          </div>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-foreground mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariantIndex(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      index === selectedVariantIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {variant.capacity || variant.drumSize || variant.size || variant.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Details */}
          <div className="border-t border-border pt-4">
            <h3 className="font-semibold text-foreground mb-3">Product Details</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="border-t border-border pt-4">
            <h3 className="font-semibold text-foreground mb-3">Specifications</h3>
            <div className="space-y-0">
              {specs.map((spec, index) => (
                <div key={index} className="spec-row">
                  <span className="spec-label">{spec.label}:</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <p className="price-display">
              ₹{selectedVariant.price.toLocaleString('en-IN')}
            </p>
            <p className="text-xs text-muted-foreground">Qty. {quantity}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ProductDetailPage;
