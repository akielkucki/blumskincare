"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream rounded-lg mb-6">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {service.category}
      </p>
      <h3 className="text-xl font-medium mb-2 group-hover:text-skin-dark transition-colors">
        {service.name}
      </h3>
      <p className="text-muted-foreground line-clamp-2">
        {service.description}
      </p>
    </article>
  );
}
