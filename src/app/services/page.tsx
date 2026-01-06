"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceSection } from "@/components/services/ServiceSection";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesPage() {
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
              Professional Treatments
            </motion.p>
            <motion.h1
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience professional skincare treatments tailored to your unique
              needs. Our expert estheticians combine advanced techniques with our
              signature products for transformative results.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <div className="border-t border-border">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Booking CTA */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <Container className="text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
              Ready to Begin?
            </p>
            <h2 className="text-background mb-6">
              Book Your Appointment
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
              Take the first step toward healthier, more radiant skin. Contact us
              to schedule your treatment or consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Book Now
              </Button>
              <Button
                href="tel:+15551234567"
                variant="outline"
                size="lg"
                className="border-background text-background hover:bg-background hover:text-foreground"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
