"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutTeaser() {
  return (
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
            <h2 className="mb-6">Beauty in Simplicity</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At BLUM, we believe that effective skincare doesn&apos;t need to be
              complicated. Our products are formulated with carefully selected
              ingredients that work in harmony with your skin&apos;s natural
              processes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each formula is designed with intention, free from unnecessary
              additives, and focused on delivering real results you can see and
              feel.
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
  );
}
