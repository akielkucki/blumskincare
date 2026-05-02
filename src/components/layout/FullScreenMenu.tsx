"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { getCollections, type Collection } from "@/lib/shopify";

type Submenu = "services" | "products" | null;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", submenu: "services" as const },
  { href: "/products", label: "Products", submenu: "products" as const },
  { href: "/contact", label: "Contact" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<Submenu>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const pathname = usePathname();

  // Fetch collections once on mount
  useEffect(() => {
    getCollections()
      .then(setCollections)
      .catch(() => {});
  }, []);

  // Auto-close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Reset submenu on close
  useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key handler
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeSubmenu) {
          setActiveSubmenu(null);
        } else {
          onClose();
        }
      }
    },
    [activeSubmenu, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, handleEscape]);

  const backButton = (
    <motion.button
      type="button"
      onClick={() => setActiveSubmenu(null)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4, ease }}
      className="flex z-20 items-center gap-2 text-sm tracking-wide uppercase cursor-pointer text-background/60 hover:text-skin transition-colors duration-300 mb-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </motion.button>
  );

  const chevronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 md:w-8 md:h-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-foreground text-background"
          initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
          transition={{ duration: 0.6, ease }}
        >
          {/* Decorative blurred circle */}
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-skin/10 blur-3xl pointer-events-none" />

          <div className="relative h-full flex items-center justify-center px-6 overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Main Nav */}
              {activeSubmenu === null && (
                <motion.nav
                  key="main"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex flex-col items-center gap-6 md:gap-8"
                >
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.08,
                        duration: 0.5,
                        ease,
                      }}
                    >
                      {link.submenu ? (
                        <button
                          type="button"
                          onClick={() => setActiveSubmenu(link.submenu)}
                          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight hover:text-skin transition-colors duration-300 flex items-center gap-3"
                        >
                          {link.label}
                          {chevronRight}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight hover:text-skin transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.nav>
              )}

              {/* Services Submenu */}
              {activeSubmenu === "services" && (
                <motion.div
                  key="services-submenu"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3, ease }}
                  className="w-full max-w-2xl self-start mt-28 max-h-[calc(100vh-8rem)] overflow-y-auto"
                >
                  {backButton}

                  <div className="flex flex-col gap-6">
                    {services.map((service, i) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          duration: 0.5,
                          ease,
                        }}
                      >
                        <Link
                          href={`/services#${service.id}`}
                          onClick={onClose}
                          className="group block"
                        >
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-skin transition-colors duration-300">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-background/50">
                            <span>{service.category}</span>
                            {service.duration && (
                              <>
                                <span className="w-1 h-1 rounded-full bg-background/30" />
                                <span>{service.duration}</span>
                              </>
                            )}
                            {service.price && (
                              <>
                                <span className="w-1 h-1 rounded-full bg-background/30" />
                                <span>${service.price}</span>
                              </>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Products / Collections Submenu */}
              {activeSubmenu === "products" && (
                <motion.div
                  key="products-submenu"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3, ease }}
                  className="w-full max-w-2xl self-start mt-28 max-h-[calc(100vh-8rem)] overflow-y-auto"
                >
                  {backButton}

                  <div className="flex flex-col gap-6">
                    {/* View All link */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5, ease }}
                    >
                      <Link
                        href="/products"
                        onClick={onClose}
                        className="group block"
                      >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-skin transition-colors duration-300">
                          View All
                        </h3>
                        <p className="mt-1 text-sm text-background/50">
                          Browse our full product range
                        </p>
                      </Link>
                    </motion.div>

                    {collections.map((collection, i) => (
                      <motion.div
                        key={collection.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3 + i * 0.1,
                          duration: 0.5,
                          ease,
                        }}
                      >
                        <Link
                          href={`/products#${collection.handle}`}
                          onClick={onClose}
                          className="group block"
                        >
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-skin transition-colors duration-300">
                            {collection.title}
                          </h3>
                          {collection.description && (
                            <p className="mt-1 text-sm text-background/50 line-clamp-1">
                              {collection.description}
                            </p>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
