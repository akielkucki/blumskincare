import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { localBusinessJsonLd, siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Shop Skincare & Book Treatments in Warminster, PA`,
    template: `%s | ${siteConfig.name}`,
  },
  // Help search engines associate the store with the established studio name.
  other: { "business:legal_name": siteConfig.legalName },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "skin therapy",
    "facials Warminster PA",
    "acne treatment",
    "DMK enzyme therapy",
    "PROCELL microchanneling",
    "buccal massage",
    "esthetician Warminster",
    "Bucks County facials",
    "skincare studio",
    "skincare store",
    "shop skincare online",
    "BLÜM Store",
    "BLÜM Skin Therapy",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Shop Skincare & Book Treatments in Warminster, PA`,
    description: siteConfig.description,
    images: [
      {
        url: "/landing_photo.jpeg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Shop Skincare & Book Treatments in Warminster, PA`,
    description: siteConfig.description,
    images: ["/landing_photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
