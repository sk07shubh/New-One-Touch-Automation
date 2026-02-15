export interface ProductVariant {
  id: string;
  name: string;
  modelNo: string;
  price: number;
  mrp?: number;
  size?: string;
  weight?: string;
  bodyMaterial?: string;
  capacity?: string;
  motor?: string;
  drumSize?: string;
  gstPercent: number;
  description: string;
  features?: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  image: string;
  basePrice: number;
  variants: ProductVariant[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
}
