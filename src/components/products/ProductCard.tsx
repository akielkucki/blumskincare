"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/shopify";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart();

  const variant = product.variants[0];
  const inStock = variant?.availableForSale ?? false;

  function handleQuickAdd(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!variant || !inStock) return;
    addItem({
      variantId: variant.id,
      handle: product.handle,
      name: product.name,
      image: product.image,
      price: product.price,
      currencyCode: product.currencyCode,
    });
    openCart();
  }

  return (
    <Link href={`/products/${product.handle}`}>
      <motion.article
        className="group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square overflow-hidden bg-cream rounded-lg mb-4 relative">
          {product.image ? (
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-medium tracking-tight group-hover:text-skin-dark transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground">
            ${product.price.toFixed(2)} {product.currencyCode}
          </p>
        </div>

        <button
          type="button"
          onClick={handleQuickAdd}
          disabled={!inStock}
          className="mt-3 w-full py-2.5 text-sm font-medium border border-foreground/20 rounded-full transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed md:opacity-0 md:group-hover:opacity-100"
        >
          {inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </motion.article>
    </Link>
  );
}

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        className="aspect-square overflow-hidden bg-cream rounded-lg relative"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
      </motion.div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Featured Product
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            {product.name}
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <p className="text-2xl font-medium">
          ${product.price.toFixed(2)} {product.currencyCode}
        </p>

        <Link
          href={`/products/${product.handle}`}
          className="inline-flex items-center gap-2 text-sm font-medium border-b-2 border-foreground pb-1 hover:border-skin-dark transition-colors"
        >
          View Details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
