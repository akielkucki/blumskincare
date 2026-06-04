import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet BLÜM Store — a Warminster, PA skincare store and skin studio founded by esthetician Tatiana Mikhalev. Our philosophy: results-driven, fully customized skin therapy that works with your skin.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
