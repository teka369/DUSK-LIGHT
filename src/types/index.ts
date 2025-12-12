export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
}

export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export type CartItemType = 'product' | 'photo';

export interface CartItem {
  id: number;
  title: string;
  image: string;
  unitPriceCents: number;
  quantity: number;
  type: CartItemType;
  meta?: Record<string, string | number | boolean>;
}

export interface PromoCode {
  code: string;
  description?: string;
  percentage?: number;
  amountCents?: number;
  active: boolean;
}

export interface OrderPayload {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate?: string;
    address?: string;
    city?: string;
    country?: string;
  };
  items: CartItem[];
  currency: string;
  subtotalCents: number;
  discountCents: number;
  totalCents: number;
  promoApplied?: string;
  notes?: string;
}
