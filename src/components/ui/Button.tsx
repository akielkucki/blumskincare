"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outlineHero";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "bg-skin text-foreground hover:bg-skin-dark",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
    outlineHero: "border-2 border-white drop-shadow-sm drop-shadow-black text-white hover:bg-foreground hover:text-background",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion.create("button");
  const MotionLink = motion.create(Link);
  const MotionAnchor = motion.create("a");

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const isProtocol = /^(tel:|mailto:|#)/.test(href);

    // External URLs (e.g. the GlossGenius booking site) open in a new tab;
    // tel:/mailto:/anchor links use a plain anchor; internal routes use next/link.
    if (isExternal || isProtocol) {
      return (
        <MotionAnchor
          href={href}
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </MotionAnchor>
      );
    }

    return (
      <MotionLink
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
