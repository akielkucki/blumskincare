import type { Product } from "@/lib/shopify";

/**
 * Example products used as a graceful fallback when Shopify is not connected,
 * the store is unpaid/paused, or the catalog is empty. These let the storefront
 * render fully during development and before the real catalog goes live.
 *
 * Variant IDs are intentionally non-Shopify ("example:") so checkout knows to
 * show a "coming soon" state instead of attempting a real cart.
 */
function makeExample(p: {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  size?: string;
  ingredients?: string[];
  benefits?: string[];
  howToUse?: string;
}): Product {
  return {
    id: `example:${p.id}`,
    handle: p.id,
    name: p.name,
    category: p.category,
    price: p.price,
    currencyCode: "USD",
    description: p.description,
    descriptionHtml: `<p>${p.description}</p>`,
    image: p.image,
    images: [{ url: p.image, altText: p.name }],
    tags: [p.category],
    variants: [
      {
        id: `example:${p.id}:default`,
        title: "Default",
        price: p.price,
        availableForSale: true,
      },
    ],
    ingredients: p.ingredients,
    benefits: p.benefits,
    howToUse: p.howToUse,
    size: p.size,
  };
}

export const exampleProducts: Product[] = [
  makeExample({
    id: "hydrating-hyaluronic-serum",
    name: "Hydrating Hyaluronic Serum",
    category: "Serums",
    price: 68,
    description:
      "A lightweight, deeply hydrating serum formulated with triple-weight hyaluronic acid to plump and smooth skin at every level. Perfect for all skin types seeking lasting moisture.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    size: "30ml",
    ingredients: [
      "Hyaluronic Acid",
      "Vitamin B5",
      "Aloe Vera",
      "Glycerin",
      "Rose Water",
    ],
    benefits: [
      "Intense hydration",
      "Plumps fine lines",
      "Strengthens skin barrier",
      "Non-greasy formula",
    ],
    howToUse:
      "Apply 2–3 drops to clean, damp skin morning and evening. Follow with moisturizer.",
  }),
  makeExample({
    id: "vitamin-c-brightening-essence",
    name: "Vitamin C Brightening Essence",
    category: "Serums",
    price: 82,
    description:
      "A potent yet gentle vitamin C formula that brightens, evens skin tone, and protects against environmental stressors. Formulated with stabilized L-ascorbic acid for maximum efficacy.",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
    size: "30ml",
    ingredients: [
      "L-Ascorbic Acid (15%)",
      "Vitamin E",
      "Ferulic Acid",
      "Niacinamide",
      "Green Tea Extract",
    ],
    benefits: [
      "Brightens complexion",
      "Fades dark spots",
      "Antioxidant protection",
      "Boosts collagen",
    ],
    howToUse:
      "Apply in the morning to clean skin before moisturizer and sunscreen.",
  }),
  makeExample({
    id: "gentle-cream-cleanser",
    name: "Gentle Cream Cleanser",
    category: "Cleansers",
    price: 42,
    description:
      "A silky, non-foaming cleanser that effectively removes makeup and impurities while maintaining the skin's natural moisture barrier. Ideal for sensitive and dry skin types.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    size: "150ml",
    ingredients: [
      "Ceramides",
      "Squalane",
      "Chamomile Extract",
      "Oat Extract",
      "Coconut-derived Surfactants",
    ],
    benefits: [
      "Gently cleanses",
      "Maintains moisture",
      "Soothes irritation",
      "Suitable for sensitive skin",
    ],
    howToUse:
      "Massage onto dry skin, add water to emulsify, then rinse thoroughly.",
  }),
  makeExample({
    id: "renewal-night-cream",
    name: "Renewal Night Cream",
    category: "Moisturizers",
    price: 95,
    description:
      "A rich, restorative night cream that works while you sleep to repair, renew, and rejuvenate. Infused with retinol and peptides for visible anti-aging results.",
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=800&q=80",
    size: "50ml",
    ingredients: [
      "Retinol (0.5%)",
      "Peptide Complex",
      "Shea Butter",
      "Jojoba Oil",
      "Bakuchiol",
    ],
    benefits: [
      "Reduces fine lines",
      "Improves texture",
      "Deeply nourishes",
      "Promotes cell turnover",
    ],
    howToUse:
      "Apply a small amount to face and neck as the last step of your evening routine.",
  }),
  makeExample({
    id: "daily-barrier-moisturizer",
    name: "Daily Barrier Moisturizer",
    category: "Moisturizers",
    price: 56,
    description:
      "A lightweight yet effective daily moisturizer that strengthens and protects the skin barrier. Fast-absorbing formula perfect for layering under makeup or sunscreen.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    size: "50ml",
    ingredients: [
      "Ceramide Complex",
      "Squalane",
      "Centella Asiatica",
      "Panthenol",
      "Zinc PCA",
    ],
    benefits: [
      "All-day hydration",
      "Barrier repair",
      "Non-comedogenic",
      "Suitable for all skin types",
    ],
    howToUse:
      "Apply morning and evening after serums. Can be used under sunscreen.",
  }),
  makeExample({
    id: "glow-exfoliating-toner",
    name: "Glow Exfoliating Toner",
    category: "Toners",
    price: 48,
    description:
      "A gentle yet effective exfoliating toner with AHA and BHA to reveal smoother, brighter skin. Balances and preps skin for better absorption of following products.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
    size: "200ml",
    ingredients: [
      "Glycolic Acid (5%)",
      "Salicylic Acid (0.5%)",
      "Witch Hazel",
      "Allantoin",
      "Cucumber Extract",
    ],
    benefits: [
      "Gentle exfoliation",
      "Unclogs pores",
      "Improves texture",
      "Preps skin for serums",
    ],
    howToUse:
      "Apply with cotton pad or hands to clean skin in the evening. Start 2–3 times per week.",
  }),
];

/** True when a product id came from the example fallback (not a real Shopify product). */
export function isExampleProduct(id: string): boolean {
  return id.startsWith("example:");
}
