import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  ProductCard,
  FeaturedProduct,
} from "@/components/products/ProductCard";
import { getAllProducts, getCollectionsWithProducts } from "@/lib/shopify";
import { ProductsHero } from "@/components/products/ProductsHero";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductsPage() {
  const collections = await getCollectionsWithProducts();
  const hasCollections = collections.length > 0;

  // Featured product: first product from first collection, or first product overall
  const featuredProduct = hasCollections
    ? collections[0]?.products[0]
    : (await getAllProducts())[0];

  // Fallback: if no collections, fetch all products for a flat grid
  const allProducts = hasCollections ? null : await getAllProducts();

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

      {/* Collection Sections */}
      {hasCollections ? (
        collections.map((collection) => (
          <section
            key={collection.id}
            id={collection.handle}
            className="py-20 md:py-32 scroll-mt-24"
          >
            <Container>
              <AnimatedSection className="text-center mb-16">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Collection
                </p>
                <h2>{collection.title}</h2>
                {collection.description && (
                  <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    {collection.description}
                  </p>
                )}
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {collection.products.map((product, index) => (
                  <AnimatedSection key={product.id} delay={(index % 3) * 0.1}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
              </div>
            </Container>
          </section>
        ))
      ) : (
        <section className="py-20 md:py-32">
          <Container>
            <AnimatedSection className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Full Collection
              </p>
              <h2>All Products</h2>
            </AnimatedSection>

            {allProducts && allProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {allProducts.map((product, index) => (
                  <AnimatedSection key={product.id} delay={(index % 3) * 0.1}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                No products available at the moment.
              </p>
            )}
          </Container>
        </section>
      )}
    </main>
  );
}
