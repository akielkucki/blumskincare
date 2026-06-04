"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimatedText } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/landing_photo.jpeg"
          alt="BLÜM Store — skincare and treatment studio in Warminster, PA"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <Container className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/90 drop-shadow-md mb-6">
            {siteConfig.tagline}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white drop-shadow-lg tracking-tight mb-8 max-w-4xl mx-auto">
            <AnimatedText delay={0.3}>BLÜM Store</AnimatedText>
          </h1>
          <motion.p
            className="text-lg md:text-xl drop-shadow-md text-white/90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Shop curated, professional-grade skincare — and book results-driven
            treatments at our Warminster, PA studio. Everything your skin needs,
            in one place.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button href="/products" size="lg">
              Shop Now
            </Button>
            <Button
              href={siteConfig.bookingUrl}
              variant="outlineHero"
              size="lg"
            >
              Book a Treatment
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-skin/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-skin-light/30 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
