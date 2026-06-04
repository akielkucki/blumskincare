import type { Metadata } from "next";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ContactCTA } from "@/components/home/ContactCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceCard } from "@/components/home/ServiceCard";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { getAllProducts } from "@/lib/shopify";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "BLÜM Store — shop curated, professional-grade skincare and book results-driven treatments in Warminster, PA. Serums, cleansers, moisturizers, facials, and advanced skin therapy.",
};

export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const featuredProducts = products.slice(0, 6);
  const featuredServices = services.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <HomeHero />

      {/* Shop — Featured Products (lead with the store) */}
      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Shop the Collection
              </p>
              <h2>Bestselling Skincare</h2>
            </div>
            <Button href="/products" variant="outline">
              Shop All Products
            </Button>
          </AnimatedSection>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={(index % 3) * 0.1}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Products coming soon.
            </p>
          )}

          <AnimatedSection className="text-center mt-14">
            <Button href="/products" size="lg">
              Shop All Products
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Overview (secondary to the store) */}
      <section className="py-24 md:py-32">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              In-Studio Treatments
            </p>
            <h2>Book a Service</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Pair your routine with results-driven treatments — from signature
              facials to advanced skin therapy, performed in our Warminster
              studio.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <ServiceCard service={service} />
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

      {/* About Teaser */}
      <AboutTeaser />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
