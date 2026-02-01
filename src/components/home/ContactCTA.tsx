"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <Container className="text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
            Get in Touch
          </p>
          <h2 className="text-background mb-6">Ready to Transform Your Skin?</h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Book a consultation with our skincare experts or reach out with any
            questions. We&apos;re here to help you achieve your best skin ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-background bg-background"
            >
              Book a Service
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
