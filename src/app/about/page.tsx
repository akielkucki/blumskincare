"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    question: "What skin types are your products suitable for?",
    answer:
      "The skincare we carry is selected to work across skin types, and every treatment is customized to yours. Our curated, minimalist approach means fewer potential irritants — especially well-suited for sensitive skin. Each product page notes specific skin-type recommendations.",
  },
  {
    question: "Are your products cruelty-free and vegan?",
    answer:
      "Yes. The lines we carry are cruelty-free, and many are vegan as well. We prioritize professional-grade brands that share our commitment to clean, results-driven formulations.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most clients notice improved hydration and texture within the first week. For concerns like hyperpigmentation or fine lines, we recommend consistent use for 6–8 weeks to see meaningful changes, as that aligns with your skin's natural renewal cycle.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If a product doesn't work for your skin, contact us for a full refund or exchange—no questions asked. We'd rather help you find the right fit than have you settle.",
  },
  {
    question: "Do you offer skincare consultations?",
    answer:
      "Absolutely. We offer personalized one-on-one consultations where our experts analyze your skin and build a tailored routine. You can book a session through our Services page or contact us directly.",
  },
  {
    question: "What skincare lines do you carry?",
    answer:
      "We curate professional, results-driven brands used in our treatments and available for home care — including Environ, DMK, and Face Reality. Every product on our shelves is one our estheticians personally trust and use.",
  },
];

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
              BLÜM Store was born from a simple belief: skincare should work
              with your skin, not against it. From our studio in Warminster, PA,
              we offer a curated line of professional skincare — and
              results-driven, fully customized treatments — that honor your
              skin&apos;s natural wisdom.
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
                alt="BLÜM Store treatment studio"
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
                chose a different path. Our philosophy is rooted in the belief
                that skin thrives on simplicity and consistency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We build each treatment with a focused approach—the right
                modalities, in the right order, for your skin. This isn&apos;t
                about doing more; it&apos;s about doing what actually works.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The result? Streamlined routines that deliver. Products that
                feel luxurious. Skin that glows with health.
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

      {/* FAQ */}
      <FAQSection />

      {/* Founder */}
      <section className="py-20 md:py-32 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Meet the Founder
              </p>
              <h2 className="mb-6">Tatiana Mikhalev</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A licensed esthetician with a deep passion for corrective skin
                care, Tatiana founded BLÜM Store to offer something the industry
                too often overlooks: truly personalized treatment that works
                with each client&apos;s skin rather than against it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                &ldquo;I never wanted to hand someone a one-size-fits-all
                facial,&rdquo; Tatiana explains. &ldquo;Every treatment I do is
                built around the skin in front of me that day — what it needs to
                heal, balance, and glow.&rdquo;
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Trained in advanced modalities including DMK enzyme therapy,
                Face Reality acne care, PROCELL microchanneling, and buccal
                sculpting massage, Tatiana brings real results to every client
                who sits in her chair.
              </p>
              <Button href={siteConfig.bookingUrl} size="lg">
                Book With Tatiana
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="relative aspect-square bg-skin-light rounded-lg overflow-hidden">
                <Image
                  src="/owner.png"
                  alt="Tatiana Mikhalev, founder of BLÜM Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
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
            <h2 className="mb-6">Experience the BLÜM Difference</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Ready to transform your skin? Book a treatment with Tatiana or
              explore our curated skincare collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={siteConfig.bookingUrl} size="lg">
                Book a Treatment
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Shop Products
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Abstract decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large ring top-right */}
        <div className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full border border-skin-dark/20" />
        <div className="absolute -top-12 -right-12 w-56 h-56 md:w-72 md:h-72 rounded-full border border-skin/30" />

        {/* Small dot cluster bottom-left */}
        <div className="absolute bottom-24 left-12 w-3 h-3 rounded-full bg-skin-dark/20" />
        <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full bg-skin/30" />
        <div className="absolute bottom-20 left-24 w-4 h-4 rounded-full bg-skin-dark/10" />

        {/* Diagonal line accent */}
        <div className="absolute top-1/2 -left-8 w-40 h-px bg-gradient-to-r from-transparent via-skin-dark/20 to-transparent rotate-[-30deg]" />

        {/* Soft blurred circle */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-skin/10 blur-3xl" />
      </div>

      <Container className="relative">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Common Questions
          </p>
          <h2>Frequently Asked</h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border-b border-border/60">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                >
                  <span className="text-lg md:text-xl font-medium pr-8 group-hover:text-skin-dark transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-skin-dark group-hover:text-skin-dark transition-colors duration-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 1v12M1 7h12" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        },
                        opacity: { duration: 0.3, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground leading-relaxed pr-16">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
