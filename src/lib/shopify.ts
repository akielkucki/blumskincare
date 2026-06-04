import { exampleProducts } from "@/data/exampleProducts";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const endpoint = domain ? `https://${domain}/api/2024-01/graphql.json` : "";

export interface ShopifyImage {
  url: string;
  altText: string | null;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  priceRange: {
    minVariantPrice: ShopifyPrice;
    maxVariantPrice: ShopifyPrice;
  };
  images: {
    edges: Array<{
      node: ShopifyImage;
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: ShopifyPrice;
        availableForSale: boolean;
      };
    }>;
  };
  metafields: Array<{
    key: string;
    value: string;
    namespace: string;
  } | null>;
}

export interface Product {
  id: string;
  handle: string;
  name: string;
  category: string;
  price: number;
  currencyCode: string;
  description: string;
  descriptionHtml: string;
  image: string;
  images: Array<{ url: string; altText: string | null }>;
  tags: string[];
  variants: Array<{
    id: string;
    title: string;
    price: number;
    availableForSale: boolean;
  }>;
  ingredients?: string[];
  benefits?: string[];
  howToUse?: string;
  size?: string;
}

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T | null> {
  if (!endpoint || !storefrontAccessToken) {
    console.warn(
      "[shopify] Missing NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN or NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN — skipping fetch."
    );
    return null;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      // 402/403 typically indicate billing/payment or access issues.
      // Log and return null so pages can render gracefully.
      console.error(
        `[shopify] API responded ${response.status} ${response.statusText}`
      );
      return null;
    }

    const json = await response.json();

    if (json.errors) {
      console.error(
        "[shopify] GraphQL errors:",
        json.errors[0]?.message || json.errors
      );
      return null;
    }

    return json.data as T;
  } catch (err) {
    console.error("[shopify] Network/fetch error:", err);
    return null;
  }
}

const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
          availableForSale
        }
      }
    }
    metafields(identifiers: [
      {namespace: "custom", key: "ingredients"},
      {namespace: "custom", key: "benefits"},
      {namespace: "custom", key: "how_to_use"},
      {namespace: "custom", key: "size"}
    ]) {
      key
      value
      namespace
    }
  }
`;

const GET_ALL_PRODUCTS_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetAllProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_HANDLE_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ...ProductFragment
    }
  }
`;

function normalizeProduct(shopifyProduct: ShopifyProduct): Product {
  const metafields = shopifyProduct.metafields?.filter(Boolean) || [];

  const getMetafield = (key: string): string | undefined => {
    const field = metafields.find((m) => m?.key === key);
    return field?.value;
  };

  const parseJsonArray = (value: string | undefined): string[] | undefined => {
    if (!value) return undefined;
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : undefined;
    } catch {
      // If not JSON, try splitting by comma or return as single item
      if (value.includes(",")) {
        return value.split(",").map((s) => s.trim());
      }
      return [value];
    }
  };

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    name: shopifyProduct.title,
    category: shopifyProduct.productType || "Products",
    price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    currencyCode: shopifyProduct.priceRange.minVariantPrice.currencyCode,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    image: shopifyProduct.images.edges[0]?.node.url || "",
    images: shopifyProduct.images.edges.map((edge) => ({
      url: edge.node.url,
      altText: edge.node.altText,
    })),
    tags: shopifyProduct.tags,
    variants: shopifyProduct.variants.edges.map((edge) => ({
      id: edge.node.id,
      title: edge.node.title,
      price: parseFloat(edge.node.price.amount),
      availableForSale: edge.node.availableForSale,
    })),
    ingredients: parseJsonArray(getMetafield("ingredients")),
    benefits: parseJsonArray(getMetafield("benefits")),
    howToUse: getMetafield("how_to_use"),
    size: getMetafield("size"),
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: { edges: Array<{ node: ShopifyProduct }> };
  }>({
    query: GET_ALL_PRODUCTS_QUERY,
    variables: { first: 100 },
  });

  const products = data
    ? data.products.edges.map((edge) => normalizeProduct(edge.node))
    : [];

  // Fall back to example products when Shopify is unconfigured, unpaid, or empty,
  // so the storefront always renders a populated catalog.
  return products.length > 0 ? products : exampleProducts;
}

export async function getProductByHandle(
  handle: string
): Promise<Product | null> {
  const data = await shopifyFetch<{
    productByHandle: ShopifyProduct | null;
  }>({
    query: GET_PRODUCT_BY_HANDLE_QUERY,
    variables: { handle },
  });

  if (data?.productByHandle) {
    return normalizeProduct(data.productByHandle);
  }

  // Fall back to a matching example product when Shopify has no result.
  return exampleProducts.find((p) => p.handle === handle) ?? null;
}

// --- Cart / Checkout ---

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

/**
 * Creates a Shopify cart for a single variant and returns the hosted checkout URL.
 * Returns null when Shopify is unconfigured or the variant isn't a real Shopify
 * product (e.g. example fallback products) — callers should handle this gracefully.
 */
export async function createCheckout(
  variantId: string,
  quantity = 1
): Promise<string | null> {
  if (!variantId.startsWith("gid://shopify")) {
    return null;
  }

  const data = await shopifyFetch<{
    cartCreate: {
      cart: { id: string; checkoutUrl: string } | null;
      userErrors: Array<{ message: string }>;
    };
  }>({
    query: CART_CREATE_MUTATION,
    variables: { lines: [{ merchandiseId: variantId, quantity }] },
  });

  return data?.cartCreate?.cart?.checkoutUrl ?? null;
}

export async function getFeaturedProduct(): Promise<Product | null> {
  const products = await getAllProducts();
  return products[0] || null;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

// --- Collections ---

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ShopifyImage | null;
  products?: {
    edges: Array<{ node: ShopifyProduct }>;
  };
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: string | null;
}

export interface CollectionWithProducts extends Collection {
  products: Product[];
}

const GET_COLLECTIONS_QUERY = `
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            url
            altText
          }
        }
      }
    }
  }
`;

const GET_COLLECTIONS_WITH_PRODUCTS_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetCollectionsWithProducts($first: Int!, $productsFirst: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            url
            altText
          }
          products(first: $productsFirst) {
            edges {
              node {
                ...ProductFragment
              }
            }
          }
        }
      }
    }
  }
`;

function normalizeCollection(node: ShopifyCollection): Collection {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    image: node.image?.url || null,
  };
}

export async function getCollections(): Promise<Collection[]> {
  const data = await shopifyFetch<{
    collections: { edges: Array<{ node: ShopifyCollection }> };
  }>({
    query: GET_COLLECTIONS_QUERY,
    variables: { first: 20 },
  });

  if (!data) return [];

  return data.collections.edges
    .map((edge) => normalizeCollection(edge.node))
    .filter((c) => c.handle !== "frontpage");
}

export async function getCollectionsWithProducts(): Promise<
  CollectionWithProducts[]
> {
  const data = await shopifyFetch<{
    collections: { edges: Array<{ node: ShopifyCollection }> };
  }>({
    query: GET_COLLECTIONS_WITH_PRODUCTS_QUERY,
    variables: { first: 20, productsFirst: 100 },
  });

  if (!data) return [];

  return data.collections.edges
    .map((edge) => ({
      ...normalizeCollection(edge.node),
      products:
        edge.node.products?.edges.map((e) => normalizeProduct(e.node)) || [],
    }))
    .filter((c) => c.handle !== "frontpage" && c.products.length > 0);
}
