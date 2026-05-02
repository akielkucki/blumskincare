"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FullScreenMenu } from "./FullScreenMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              BLUM
            </Link>

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
        </nav>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
