const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

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
}): Promise<T> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message || "Unknown Shopify error");
  }

  return json.data;
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

  return data.products.edges.map((edge) => normalizeProduct(edge.node));
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

  if (!data.productByHandle) {
    return null;
  }

  return normalizeProduct(data.productByHandle);
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
