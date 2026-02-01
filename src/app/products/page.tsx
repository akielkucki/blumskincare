import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  ProductCard,
  FeaturedProduct,
} from "@/components/products/ProductCard";
import { getAllProducts } from "@/lib/shopify";
import { ProductsHero } from "@/components/products/ProductsHero";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductsPage() {
  const products = await getAllProducts();
  const featuredProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <main className="pt-24">
      {/* Hero */}
      <ProductsHero />

      {/* Featured Product */}
      {featuredProduct && (
        <section className="py-20 md:py-32 bg-cream">
          <Container>
            <FeaturedProduct product={featuredProduct} />
          </Container>
        </section>
      )}

      {/* Product Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Full Collection
            </p>
            <h2>All Products</h2>
          </AnimatedSection>

          {otherProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {otherProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={(index % 3) * 0.1}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          ) : products.length === 1 ? (
            <p className="text-center text-muted-foreground">
              More products coming soon.
            </p>
          ) : (
            <p className="text-center text-muted-foreground">
              No products available at the moment.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}
