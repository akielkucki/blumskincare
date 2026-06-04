"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { FullScreenMenu } from "./FullScreenMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isMenuOpen
            ? "bg-transparent"
            : "bg-background/80 backdrop-blur-md border-b border-border"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`text-2xl font-medium tracking-tight transition-colors duration-500 ${
                isMenuOpen ? "text-background" : "text-foreground"
              }`}
            >
              BLÜM
            </Link>

            <div className="flex items-center gap-6">
              {/* Shop quick link — store-forward */}
              <Link
                href="/products"
                className={`hidden sm:inline-block text-sm font-medium uppercase tracking-wider transition-colors duration-500 ${
                  isMenuOpen
                    ? "text-background/0 pointer-events-none"
                    : "text-foreground hover:text-skin-dark"
                }`}
              >
                Shop
              </Link>

              {/* Cart button with item-count badge */}
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart${count > 0 ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
                className={`relative transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-0 pointer-events-none"
                    : "text-foreground hover:text-skin-dark"
                }`}
              >
                <svg
                  width="22"
                  height="22"
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
                <AnimatePresence>
                  {count > 0 && (
                    <motion.span
                      key={count}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-foreground text-background text-[11px] font-medium flex items-center justify-center tabular-nums"
                    >
                      {count}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Hamburger Button — always visible */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 w-6 h-5 flex flex-col justify-between"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={
                    isMenuOpen
                      ? { rotate: 45, y: 7.6, backgroundColor: "#FFFFFF" }
                      : { rotate: 0, y: 0, backgroundColor: "#1A1A1A" }
                  }
                  transition={{ duration: 0.4 }}
                  className="w-full h-0.5 origin-left"
                />
                <motion.span
                  animate={
                    isMenuOpen
                      ? { opacity: 0, backgroundColor: "#FFFFFF" }
                      : { opacity: 1, backgroundColor: "#1A1A1A" }
                  }
                  transition={{ duration: 0.4 }}
                  className="w-full h-0.5"
                />
                <motion.span
                  animate={
                    isMenuOpen
                      ? { rotate: -45, y: 6.5, backgroundColor: "#FFFFFF" }
                      : { rotate: 0, y: 0, backgroundColor: "#1A1A1A" }
                  }
                  transition={{ duration: 0.4 }}
                  className="w-full h-0.5 origin-left"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
