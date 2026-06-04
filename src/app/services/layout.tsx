import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BLÜM Skin Therapy's services in Warminster, PA — signature facials, Face Reality acne treatments, DMK enzyme therapy, PROCELL microchanneling, buccal sculpting massage, and brow & lash tinting.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
