"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { createCheckout, type Product } from "@/lib/shopify";
import { siteConfig } from "@/lib/site";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "unavailable">(
    "idle",
  );
  const { addItem, openCart } = useCart();

  const variantId = product.variants[0]?.id;
  const inStock = product.variants[0]?.availableForSale ?? false;
  const isShopifyProduct = variantId?.startsWith("gid://shopify") ?? false;

  function handleAddToCart() {
    if (!variantId || !inStock) return;
    addItem({
      variantId,
      handle: product.handle,
      name: product.name,
      image: product.image,
      price: product.price,
      currencyCode: product.currencyCode,
    });
    openCart();
  }

  async function handleCheckout() {
    if (!variantId) return;
    setStatus("loading");
    const checkoutUrl = await createCheckout(variantId, 1);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      setStatus("unavailable");
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Image */}
      <motion.div
        className="aspect-square bg-cream rounded-lg overflow-hidden relative"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image available
          </div>
        )}
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
          <p className="text-2xl font-medium">
            ${product.price.toFixed(2)} {product.currencyCode}
          </p>
          {product.size && (
            <p className="text-muted-foreground mt-1">{product.size}</p>
          )}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
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
        <div className="space-y-3 pt-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              {!inStock ? "Sold Out" : "Add to Cart"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCheckout}
              disabled={status === "loading" || !inStock}
            >
              {status === "loading" ? "Preparing…" : "Buy Now"}
            </Button>
          </div>

          {status === "unavailable" && (
            <p className="text-sm text-muted-foreground">
              {isShopifyProduct
                ? "Checkout is temporarily unavailable. Please try again shortly or purchase in studio."
                : "Our online shop is launching soon — this is a sample product. Visit us in studio or book a treatment to purchase."}
            </p>
          )}
          {!isShopifyProduct && status === "idle" && (
            <p className="text-sm text-muted-foreground">
              Sample product preview — you can add it to your cart to try the
              experience. Online checkout activates once our shop goes live.
            </p>
          )}

          <p className="text-sm text-muted-foreground">
            Prefer in person?{" "}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-skin-dark"
            >
              Book a consultation
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
