"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { services } from "@/data/services";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
        <Container className="py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Skincare Elevated
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 max-w-4xl mx-auto">
              <AnimatedText delay={0.3}>
                Reveal Your Natural Radiance
              </AnimatedText>
            </h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
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
              <Button href="/services" variant="outline" size="lg">
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

      {/* About Teaser */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/5] bg-cream rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
                  alt="Skincare products"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Philosophy
              </p>
              <h2 className="mb-6">
                Beauty in Simplicity
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At BLUM, we believe that effective skincare doesn&apos;t need to be
                complicated. Our products are formulated with carefully selected
                ingredients that work in harmony with your skin&apos;s natural processes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each formula is designed with intention, free from unnecessary
                additives, and focused on delivering real results you can see and feel.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium border-b-2 border-foreground pb-1 hover:border-skin-dark transition-colors"
              >
                Learn Our Story
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
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Curated Selection
            </p>
            <h2>Featured Products</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button href="/products" variant="outline">
              View All Products
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Professional Care
            </p>
            <h2>Our Services</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <article className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-cream rounded-lg mb-6">
                    <motion.img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {service.category}
                  </p>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-skin-dark transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <Container className="text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
              Get in Touch
            </p>
            <h2 className="text-background mb-6">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
              Book a consultation with our skincare experts or reach out with any
              questions. We&apos;re here to help you achieve your best skin ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Contact Us
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-background bg-background "
              >
                Book a Service
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
