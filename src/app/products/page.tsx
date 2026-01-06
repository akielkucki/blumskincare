"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductCard, FeaturedProduct } from "@/components/products/ProductCard";
import { products, getFeaturedProduct } from "@/data/products";

export default function ProductsPage() {
  const featuredProduct = getFeaturedProduct();
  const otherProducts = products.filter((p) => p.id !== featuredProduct.id);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The Collection
            </motion.p>
            <motion.h1
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Products
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thoughtfully formulated essentials for radiant, healthy skin.
              Each product is designed to deliver visible results with clean,
              effective ingredients.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Featured Product */}
      <section className="py-20 md:py-32 bg-cream">
        <Container>
          <FeaturedProduct product={featuredProduct} />
        </Container>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Full Collection
            </p>
            <h2>All Products</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {otherProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
