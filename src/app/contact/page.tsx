"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";

const contactInfo = [
  {
    label: "Address",
    value: "755 York Rd #204, \nWarminster, PA 18974",
  },
  {
    label: "Phone",
    value: "(215) 485-3671",
    href: "tel:+12154853671",
  },
  {
    label: "Email",
    value: "hello@blumskincare.com",
    href: "mailto:hello@blumskincare.com",
  },
];

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
  { day: "Sunday", time: "11:00 AM - 5:00 PM" },
];

export default function ContactPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.p>
            <motion.h1
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have questions about our products or services? Want to book a
              consultation? We&apos;d love to hear from you.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-cream p-8 md:p-12 rounded-lg">
                <h2 className="text-2xl font-medium mb-8">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-12">
                {/* Contact Details */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-medium mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label}>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg hover:text-skin-dark transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-medium mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {hours.map((hour) => (
                      <div
                        key={hour.day}
                        className="flex justify-between items-center"
                      >
                        <span className="text-muted-foreground">{hour.day}</span>
                        <span>{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-medium mb-6">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-skin transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-skin transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-skin transition-colors"
                      aria-label="Pinterest"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>


              </div>

            </AnimatedSection>

          </div>
          {/* Map Placeholder */}
          <div className="w-full aspect-video rounded-lg flex items-center justify-center mx-auto">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.2199212558249!2d-75.09897967176391!3d40.21171739706425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6af294c9584b7%3A0xae59f44488c1126f!2sBl%C3%BCm%20skin%20therapy%20Studio%20%26%20Spa!5e0!3m2!1sen!2sus!4v1767733395306!5m2!1sen!2sus"
                width="1000" height="450" style={{border: 0, borderRadius: "4px", width: "100%"}} allowFullScreen={false} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className={""}></iframe>
          </div>
        </Container>

      </section>
    </main>
  );
}
