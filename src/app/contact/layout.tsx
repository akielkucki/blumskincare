import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Visit BLÜM Skin Therapy at 755 York Rd, Suite 204, Warminster, PA 18974. Book online, call (215) 485-3671, or send us a message. See our hours and location.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
