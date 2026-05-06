"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/data/services";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const gallery =
    service.gallery && service.gallery.length > 0
      ? service.gallery
      : [service.image];
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={gallery[activeImage]}
              src={gallery[activeImage]}
              alt={service.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs uppercase tracking-wider text-foreground">
            {service.category}
          </div>
        </div>

        {gallery.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-2">
            {gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-square overflow-hidden rounded-md border transition-all duration-300 ${
                  activeImage === i
                    ? "border-skin-dark ring-2 ring-skin-dark/30"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Info */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            {service.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.longDescription || service.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 py-6 border-y border-border">
          {service.duration && (
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Duration
              </p>
              <p className="text-lg font-medium">{service.duration}</p>
            </div>
          )}
          {!service.price && (
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Starting at
              </p>
              <p className="text-lg font-medium">${service.price}</p>
            </div>
          )}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Category
            </p>
            <p className="text-lg font-medium">{service.category}</p>
          </div>
        </div>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium mb-4">
              What&apos;s Included
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-skin-dark shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ideal For */}
        {service.idealFor && service.idealFor.length > 0 && (
          <div>
            <h3 className="text-sm uppercase tracking-wider font-medium mb-4">
              Ideal For
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.idealFor.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-cream rounded-full text-sm text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button href="/contact" size="lg" className="flex-1">
            Book This Treatment
          </Button>
          <Button href="tel:+15551234567" variant="outline" size="lg">
            Call to Book
          </Button>
        </div>
      </motion.div>

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <div className="lg:col-span-2 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
              The Experience
            </p>
            <h2 className="mb-12">What to Expect</h2>
          </motion.div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 p-6 bg-cream/50 rounded-lg"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-skin-dark/10 text-skin-dark flex items-center justify-center font-medium text-lg">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      )}

      {/* Aftercare */}
      {service.aftercare && service.aftercare.length > 0 && (
        <div className="lg:col-span-2 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Care After Your Visit
            </p>
            <h2 className="mb-8">Aftercare</h2>
          </motion.div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {service.aftercare.map((tip, i) => (
              <motion.li
                key={tip}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 text-foreground/80"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-skin-dark shrink-0 mt-0.5"
                >
                  <path
                    d="M5 12l5 5L20 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {tip}
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="lg:col-span-2 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Common Questions
            </p>
            <h2 className="mb-8">FAQs</h2>
          </motion.div>

          <div className="max-w-3xl divide-y divide-border border-y border-border">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-foreground">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-skin-dark"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
