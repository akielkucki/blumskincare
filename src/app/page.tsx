import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductCard } from "@/components/products/ProductCard";
import { getAllProducts } from "@/lib/shopify";
import { services } from "@/data/services";
import { HomeHero } from "@/components/home/HomeHero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServiceCard } from "@/components/home/ServiceCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "BLÜM Skin Therapy — a results-driven skin studio in Warminster, PA. Customized facials, acne treatments, DMK enzyme therapy, PROCELL microchanneling, and curated skincare. Book online today.",
};

export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <HomeHero />

      {/* About Teaser */}
      <AboutTeaser />

      {/* Featured Products */}
      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Curated Selection
            </p>
            <h2>Featured Products</h2>
          </AnimatedSection>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Products coming soon.
            </p>
          )}

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

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
