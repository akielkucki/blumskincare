"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.article
        className="group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square overflow-hidden bg-cream rounded-lg mb-4">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-medium tracking-tight group-hover:text-skin-dark transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground">${product.price}</p>
        </div>
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
        className="aspect-square overflow-hidden bg-cream rounded-lg"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
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

        <p className="text-2xl font-medium">${product.price}</p>

        <Link
          href={`/products/${product.id}`}
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
