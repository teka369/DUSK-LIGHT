import React from 'react';
import type { CartItem } from '../types';

type CartContextValue = {
  items: CartItem[];
  currency: string;
  promo?: string;
  subtotalCents: number;
  discountCents: number;
  totalCents: number;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: number, type?: CartItem['type']) => void;
  setQuantity: (id: number, qty: number, type?: CartItem['type']) => void;
  clear: () => void;
  buyNow: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  applyPromo: (code: string) => void;
};

const STORAGE_KEY = 'cart_items';
const STORAGE_CURRENCY = 'cart_currency';
const STORAGE_PROMO = 'cart_promo';

const getInitialItems = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const getInitialCurrency = (): string => {
  try {
    return localStorage.getItem(STORAGE_CURRENCY) || 'COP';
  } catch {
    return 'COP';
  }
};

const getInitialPromo = (): string | undefined => {
  try {
    return localStorage.getItem(STORAGE_PROMO) || undefined;
  } catch {
    return undefined;
  }
};

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = React.useState<CartItem[]>(getInitialItems);
  const [currency] = React.useState<string>(getInitialCurrency);
  const [promo, setPromo] = React.useState<string | undefined>(getInitialPromo);

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  React.useEffect(() => {
    try {
      if (promo) localStorage.setItem(STORAGE_PROMO, promo);
      else localStorage.removeItem(STORAGE_PROMO);
    } catch {}
  }, [promo]);

  const subtotalCents = React.useMemo(
    () => items.reduce((sum, it) => sum + it.unitPriceCents * it.quantity, 0),
    [items]
  );

  const discountCents = React.useMemo(() => {
    if (!promo) return 0;
    if (promo.toUpperCase() === 'DL10') return Math.floor(subtotalCents * 0.1);
    if (promo.toUpperCase() === 'DL20') return Math.floor(subtotalCents * 0.2);
    return 0;
  }, [promo, subtotalCents]);

  const totalCents = React.useMemo(() => Math.max(subtotalCents - discountCents, 0), [subtotalCents, discountCents]);

  const addItem: CartContextValue['addItem'] = (item) => {
    setItems((prev) => {
      const qty = item.quantity ?? 1;
      const idx = prev.findIndex((p) => p.id === item.id && p.type === item.type);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const removeItem: CartContextValue['removeItem'] = (id, type) => {
    setItems((prev) => prev.filter((p) => !(p.id === id && (type ? p.type === type : true))));
  };

  const setQuantity: CartContextValue['setQuantity'] = (id, qty, type) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id && (type ? p.type === type : true) ? { ...p, quantity: Math.max(qty, 1) } : p))
    );
  };

  const clear = () => {
    setItems([]);
    setPromo(undefined);
  };

  const buyNow: CartContextValue['buyNow'] = (item) => {
    setItems([{ ...item, quantity: item.quantity ?? 1 }]);
  };

  const applyPromo = (code: string) => {
    setPromo(code.trim());
  };

  const value: CartContextValue = {
    items,
    currency,
    promo,
    subtotalCents,
    discountCents,
    totalCents,
    addItem,
    removeItem,
    setQuantity,
    clear,
    buyNow,
    applyPromo,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
