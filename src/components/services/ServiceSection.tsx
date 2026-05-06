"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";

interface ServiceSectionProps {
  service: Service;
  index: number;
}

type TabId = "overview" | "process" | "aftercare" | "faqs";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "aftercare", label: "Aftercare" },
  { id: "faqs", label: "FAQs" },
];

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const isReversed = index % 2 === 1;
  const gallery =
    service.gallery && service.gallery.length > 0
      ? service.gallery
      : [service.image];

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const availableTabs = TABS.filter((tab) => {
    if (tab.id === "overview") return true;
    if (tab.id === "process") return service.process && service.process.length > 0;
    if (tab.id === "aftercare")
      return service.aftercare && service.aftercare.length > 0;
    if (tab.id === "faqs") return service.faqs && service.faqs.length > 0;
    return false;
  });

  return (
    <section
      id={service.id}
      className="py-20 border-b border-border last:border-b-0 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start`}
        >
          {/* Image gallery */}
          <motion.div
            className={`${isReversed ? "lg:order-2" : ""}`}
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-lg group">
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

              {/* Hover overlay with category */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
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

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 pb-2">
              {service.duration && (
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-skin-dark"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-sm font-medium">{service.duration}</p>
                  </div>
                </div>
              )}
              {!service.price && (
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-skin-dark"
                  >
                    <path d="M12 3v18M7 7h7a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8" strokeLinecap="round" />
                  </svg>
                  <div>
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="text-sm font-medium">${service.price}</p>
                  </div>
                </div>
              )}
              {service.idealFor && service.idealFor.length > 0 && (
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-skin-dark"
                  >
                    <path
                      d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-xs text-muted-foreground">Ideal for</p>
                    <p className="text-sm font-medium">
                      {service.idealFor.length} concerns
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex gap-1 -mb-px overflow-x-auto">
                {availableTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId={`tab-underline-${service.id}`}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-skin-dark"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.longDescription || service.description}
                    </p>

                    {service.features && service.features.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          What's Included
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-sm text-foreground/80"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-skin-dark shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.idealFor && service.idealFor.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          Ideal For
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.idealFor.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 bg-cream rounded-full text-xs text-foreground/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === "process" && service.process && (
                  <motion.ol
                    key="process"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {service.process.map((step, i) => (
                      <motion.li
                        key={step.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-4"
                      >
                        <div className="shrink-0 w-9 h-9 rounded-full bg-skin-dark/10 text-skin-dark flex items-center justify-center font-medium text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ol>
                )}

                {activeTab === "aftercare" && service.aftercare && (
                  <motion.div
                    key="aftercare"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-sm text-muted-foreground mb-4">
                      To get the most from your treatment, keep the following
                      in mind:
                    </p>
                    <ul className="space-y-3">
                      {service.aftercare.map((tip, i) => (
                        <motion.li
                          key={tip}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <svg
                            width="18"
                            height="18"
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
                  </motion.div>
                )}

                {activeTab === "faqs" && service.faqs && (
                  <motion.div
                    key="faqs"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="divide-y divide-border border-y border-border"
                  >
                    {service.faqs.map((faq, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div key={faq.question}>
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 py-4 text-left"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm font-medium text-foreground">
                              {faq.question}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="shrink-0 text-skin-dark"
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path
                                  d="M12 5v14M5 12h14"
                                  strokeLinecap="round"
                                />
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
                                <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-0.5 hover:border-skin-dark hover:text-skin-dark transition-colors duration-300"
              >
                Read More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="translate-y-px"
                >
                  <path d="M1 7h12M8 2l5 5-5 5" />
                </svg>
              </Link>

              <Button href="/contact" variant="outline">
                Book Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
