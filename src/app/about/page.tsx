"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const values = [
  {
    title: "Intentional Formulation",
    description:
      "Every ingredient is chosen with purpose. We don't add fillers or trendy ingredients—just what your skin truly needs.",
  },
  {
    title: "Sustainable Beauty",
    description:
      "From responsible sourcing to recyclable packaging, we're committed to practices that respect our planet.",
  },
  {
    title: "Honest Results",
    description:
      "We believe in transparency. Our products deliver real, visible results backed by science, not marketing hype.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.p>
            <motion.h1
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Beauty Through Balance
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              BLUM was born from a simple belief: skincare should work with your
              skin, not against it. Founded in 2020, we set out to create products
              that honor the skin&apos;s natural wisdom while delivering transformative
              results.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="pb-20">
        <Container size="large">
          <AnimatedSection>
            <div className="aspect-[21/9] bg-cream rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80"
                alt="BLUM skincare laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Philosophy
              </p>
              <h2 className="mb-6">Less, But Better</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In a world of 12-step routines and endless product launches, we
                chose a different path. Our philosophy is rooted in the belief that
                skin thrives on simplicity and consistency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We formulate each product with a focused approach—fewer ingredients,
                higher concentrations, better results. This isn&apos;t about what we
                leave out; it&apos;s about perfecting what we include.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The result? Streamlined routines that deliver. Products that feel
                luxurious. Skin that glows with health.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="aspect-[4/5] bg-skin-light rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80"
                  alt="Skincare ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What We Stand For
            </p>
            <h2>Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-skin flex items-center justify-center">
                    <span className="text-lg font-medium">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-32 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Meet the Founder
              </p>
              <h2 className="mb-6">Sarah Chen</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 15 years in cosmetic chemistry, Sarah founded BLUM after
                witnessing firsthand how the industry prioritized trends over
                efficacy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                &ldquo;I wanted to create products I would trust on my own skin,&rdquo; Sarah
                explains. &ldquo;That meant stripping away the noise and focusing on what
                actually works—proven ingredients in their most effective forms.&rdquo;
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Sarah oversees every formulation, ensuring BLUM products meet
                the highest standards of quality and efficacy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="aspect-square bg-skin-light rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Sarah Chen, Founder of BLUM"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="mb-6">Experience the BLUM Difference</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Ready to simplify your routine and transform your skin? Explore our
              collection or book a consultation with one of our skincare experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                Shop Products
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
