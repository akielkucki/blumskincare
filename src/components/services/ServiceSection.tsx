"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const isReversed = index % 2 === 1;

  return (
    <section className="py-20 border-b border-border last:border-b-0">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            className={`aspect-[4/5] overflow-hidden bg-cream rounded-lg ${
              isReversed ? "lg:order-2" : ""
            }`}
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {service.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                {service.name}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            {service.features && (
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-skin-dark" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Duration and Price */}
            <div className="flex flex-wrap gap-6 pt-4">
              {service.duration && (
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{service.duration}</p>
                </div>
              )}
              {service.price && (
                <div>
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="font-medium">${service.price}</p>
                </div>
              )}
            </div>

            <Button href="/contact" variant="outline">
              Book Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
