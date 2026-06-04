import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceCard } from "@/components/home/ServiceCard";
import { Container } from "@/components/layout/Container";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { getServiceById, services } from "@/data/services";
import { siteConfig } from "@/lib/site";

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.id}`,
      images: [service.image],
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <main className="pt-24">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.name}</span>
          </nav>
        </Container>
      </section>

      {/* Detail */}
      <section className="py-12 md:py-20">
        <Container>
          <ServiceDetail service={service} />
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-cream">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                You May Also Like
              </p>
              <h2>Related Treatments</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((related, i) => (
                <AnimatedSection key={related.id} delay={i * 0.1}>
                  <Link href={`/services/${related.id}`} className="block">
                    <ServiceCard service={related} />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Booking CTA */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <Container className="text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
              Ready to Begin?
            </p>
            <h2 className="text-background mb-6">Book Your Appointment</h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
              Take the first step toward healthier, more radiant skin. Contact
              us to schedule your treatment or consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={siteConfig.bookingUrl}
                variant="secondary"
                size="lg"
              >
                Book Now
              </Button>
              <Button
                href={siteConfig.phoneHref}
                variant="outline"
                size="lg"
                className="border-background text-background bg-white hover:bg-gray-300 hover:text-foreground"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
