"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedSection";

export function HomeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center  relative overflow-hidden">
      <div className={"absolute w-full h-full bg-[url(/hero.webp)] bg-cover -z-10 brightness-75"}></div>
      <Container className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted drop-shadow-md drop-shadow-black mb-6">
            Skincare Elevated
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-muted drop-shadow-lg drop-shadow-black tracking-tight mb-8 max-w-4xl mx-auto">
            <AnimatedText delay={0.3}>BLÜM Skin Therapy</AnimatedText>
          </h1>
          <motion.p
            className="text-lg md:text-xl drop-shadow-md drop-shadow-black text-muted max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Thoughtfully crafted formulas designed to nourish, protect, and
            transform your skin. Experience the difference of intentional beauty.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button href="/products" size="lg">
              Shop Products
            </Button>
            <Button href="/services" variant="outlineHero" size="lg">
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-skin/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-skin-light/40 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
