"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function ProductsHero() {
  return (
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
            Thoughtfully formulated essentials for radiant, healthy skin. Each
            product is designed to deliver visible results with clean, effective
            ingredients.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
