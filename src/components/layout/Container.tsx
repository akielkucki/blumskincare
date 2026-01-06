import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
}

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    large: "max-w-[1400px]",
  };

  return (
    <div className={`mx-auto px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
