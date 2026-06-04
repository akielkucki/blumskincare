"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { useCart } from "./CartProvider";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function CartDrawer() {
  const {
    items,
    count,
    subtotal,
    currencyCode,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    checkout,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Body scroll lock + Escape to close while open.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  // Clear any notice when the drawer is closed.
  useEffect(() => {
    if (!isOpen) setNotice(null);
  }, [isOpen]);

  async function handleCheckout() {
    setNotice(null);
    setLoading(true);
    const res = await checkout();
    setLoading(false);
    if (res.ok) return; // redirecting to Shopify checkout
    if (res.reason === "demo") {
      setNotice(
        "Online checkout launches with our shop — these are sample products. Visit us in studio or book a treatment to purchase.",
      );
    } else if (res.reason === "error") {
      setNotice(
        "Checkout is temporarily unavailable. Please try again shortly or purchase in studio.",
      );
    }
  }

  const formatPrice = (n: number) =>
    `$${n.toFixed(2)}${currencyCode && currencyCode !== "USD" ? ` ${currencyCode}` : ""}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.aside
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-background shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease }}
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="text-lg font-medium tracking-tight">
                Your Cart{count > 0 ? ` (${count})` : ""}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="w-9 h-9 -mr-2 flex items-center justify-center rounded-full hover:bg-cream transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-5">
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-skin-dark">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M6 7h12l-1 13H7L6 7zM9 7a3 3 0 0 1 6 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Discover our curated skincare collection.
                  </p>
                </div>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-border">
                  {items.map((item) => (
                    <li key={item.variantId} className="flex gap-4 py-4">
                      <Link
                        href={`/products/${item.handle}`}
                        onClick={closeCart}
                        className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md bg-cream"
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        ) : null}
                      </Link>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-3">
                          <Link
                            href={`/products/${item.handle}`}
                            onClick={closeCart}
                            className="text-sm font-medium leading-snug hover:text-skin-dark transition-colors line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeItem(item.variantId)}
                            aria-label={`Remove ${item.name}`}
                            className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                d="M6 6l12 12M18 6L6 18"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <p className="text-sm text-muted-foreground mt-1">
                          {formatPrice(item.price)}
                        </p>

                        {/* Quantity stepper */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="inline-flex items-center border border-border rounded-full">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.variantId,
                                  item.quantity - 1,
                                )
                              }
                              aria-label="Decrease quantity"
                              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-sm tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.variantId,
                                  item.quantity + 1,
                                )
                              }
                              aria-label="Increase quantity"
                              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-border px-6 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Subtotal
                    </span>
                    <span className="text-lg font-medium">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shipping and taxes calculated at checkout.
                  </p>

                  {notice && (
                    <p className="text-sm text-foreground bg-cream rounded-md p-3">
                      {notice}{" "}
                      <a
                        href={siteConfig.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-skin-dark"
                      >
                        Book a treatment
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base tracking-wide font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Preparing checkout…" : "Checkout"}
                  </button>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Continue shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
