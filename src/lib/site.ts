/**
 * Central business configuration for BLÜM Skin Therapy.
 * Single source of truth for contact details, hours, booking, and SEO.
 */

export const siteConfig = {
  name: "BLÜM Skin Therapy",
  shortName: "BLÜM",
  legalName: "BLÜM Skin Therapy Studio & Spa",
  tagline: "Skincare Elevated",
  description:
    "BLÜM Skin Therapy is a results-driven skin studio in Warminster, PA offering customized facials, acne treatments, DMK enzyme therapy, PROCELL microchanneling, and buccal sculpting massage. Book your treatment or shop our curated skincare.",
  // Public site URL — override with NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.blumskintherapy.com",
  bookingUrl: "https://blumskintherapy.glossgenius.com/services",
  email: "hello@blumskincare.com",
  phone: "(215) 485-3671",
  phoneHref: "tel:+12154853671",
  address: {
    street: "755 York Rd, Suite 204",
    city: "Warminster",
    state: "PA",
    zip: "18974",
    country: "US",
  },
  geo: {
    latitude: 40.211717,
    longitude: -75.098979,
  },
  /** Hours in a structured, render-friendly shape. */
  hours: [
    { day: "Monday", time: "10:00 AM – 4:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { day: "Thursday", time: "10:00 AM – 7:00 PM" },
    { day: "Friday", time: "10:00 AM – 5:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://www.instagram.com/blumskintherapy/",
    facebook: "https://www.facebook.com/blumskintherapy",
  },
  /** schema.org openingHoursSpecification for structured data. */
  openingHours: [
    { days: ["Monday"], opens: "10:00", closes: "16:00" },
    {
      days: ["Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
    { days: ["Friday"], opens: "10:00", closes: "17:00" },
    { days: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

/**
 * schema.org LocalBusiness JSON-LD for local SEO.
 * Rendered in the root layout.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/landing_photo.jpeg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${siteConfig.legalName} ${fullAddress}`
    )}`,
  };
}
