"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductById, products } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  if (!product) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <Container className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button href="/products">Back to Products</Button>
        </Container>
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
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
            <Link href="/products" className="hover:text-foreground transition-colors">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              className="aspect-square bg-cream rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-medium">${product.price}</p>
                {product.size && (
                  <p className="text-muted-foreground mt-1">{product.size}</p>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Benefits */}
              {product.benefits && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-medium mb-4">
                    Benefits
                  </h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {product.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-skin-dark" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to Use */}
              {product.howToUse && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-medium mb-4">
                    How to Use
                  </h3>
                  <p className="text-muted-foreground">{product.howToUse}</p>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Ingredients */}
      {product.ingredients && (
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
