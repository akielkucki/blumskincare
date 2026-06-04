"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createCartCheckoutUrl } from "@/lib/shopify";

export interface CartItem {
  variantId: string;
  handle: string;
  name: string;
  image: string;
  price: number;
  currencyCode: string;
  quantity: number;
}

export type CheckoutResult = {
  ok: boolean;
  reason?: "empty" | "demo" | "error";
};

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  currencyCode: string;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clear: () => void;
  checkout: () => Promise<CheckoutResult>;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "blum-cart";

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // Ignore malformed storage.
    }
    setHydrated(true);
  }, []);

  // Persist on change (after initial hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be unavailable (private mode, etc.).
    }
  }, [items, hydrated]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.variantId === item.variantId);
        if (existing) {
          return prev.map((i) =>
            i.variantId === item.variantId
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          );
        }
        return [...prev, { ...item, quantity }];
      });
    },
    [],
  );

  const removeItem = useCallback((variantId: string) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  }, []);

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.variantId !== variantId)
        : prev.map((i) => (i.variantId === variantId ? { ...i, quantity } : i)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const checkout = useCallback(async (): Promise<CheckoutResult> => {
    if (items.length === 0) return { ok: false, reason: "empty" };

    // Example/fallback products can't be purchased until the real store is live.
    const allReal = items.every((i) => i.variantId.startsWith("gid://shopify"));
    if (!allReal) return { ok: false, reason: "demo" };

    const url = await createCartCheckoutUrl(
      items.map((i) => ({ variantId: i.variantId, quantity: i.quantity })),
    );
    if (url) {
      window.location.href = url;
      return { ok: true };
    }
    return { ok: false, reason: "error" };
  }, [items]);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items],
  );
  const currencyCode = items[0]?.currencyCode ?? "USD";

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      subtotal,
      currencyCode,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      checkout,
    }),
    [
      items,
      count,
      subtotal,
      currencyCode,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      checkout,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
