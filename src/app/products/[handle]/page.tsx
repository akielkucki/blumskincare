import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllProducts, getProductByHandle } from "@/lib/shopify";

export const revalidate = 60;

interface ProductDetailPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.handle}` },
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const allProducts = await getAllProducts();
  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.handle !== product.handle &&
        p.category.toLowerCase() === product.category.toLowerCase(),
    )
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
              href="/products"
              className="hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </Container>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-20">
        <Container>
          <ProductDetailClient product={product} />
        </Container>
      </section>

      {/* Ingredients */}
      {product.ingredients && product.ingredients.length > 0 && (
        <section className="py-12 md:py-20 bg-cream">
          <Container>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-8">Key Ingredients</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="px-6 py-3 bg-background border border-border rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-20">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2>You May Also Like</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <AnimatedSection key={relatedProduct.id} delay={index * 0.1}>
                  <ProductCard product={relatedProduct} />
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
