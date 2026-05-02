export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  features?: string[];
  idealFor?: string[];
  process?: ServiceProcessStep[];
  aftercare?: string[];
  faqs?: ServiceFAQ[];
  duration?: string;
  price?: number;
}

export const services: Service[] = [
  {
    id: "signature-facial",
    name: "Signature Facial",
    category: "Facials",
    description:
      "Our signature treatment combines deep cleansing, exfoliation, extraction, and hydration tailored to your unique skin needs. Experience the ultimate in personalized skincare with our expertly trained estheticians.",
    longDescription:
      "The Signature Facial is the heart of our menu — a fully customizable, results-driven treatment designed around your skin on the day you arrive. Every step, from the cleanse to the final massage, is selected to balance, refresh, and visibly brighten your complexion.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=80",
    ],
    features: [
      "Customized to your skin type",
      "Deep pore cleansing",
      "Gentle extraction",
      "Hydrating mask treatment",
      "Face and neck massage",
    ],
    idealFor: [
      "First-time clients",
      "Dull or congested skin",
      "Maintenance between advanced treatments",
      "Sensitive skin types",
    ],
    process: [
      {
        title: "Consultation & Skin Analysis",
        description:
          "We start with a brief conversation about your goals, then analyze your skin under proper lighting to choose the right products and pressure for your session.",
      },
      {
        title: "Double Cleanse & Exfoliation",
        description:
          "An oil-based and water-based cleanse remove buildup, followed by a gentle enzyme or acid exfoliation to refine texture.",
      },
      {
        title: "Extraction & Treatment Mask",
        description:
          "Targeted, non-aggressive extractions are performed where needed, followed by a treatment mask matched to your skin's current state.",
      },
      {
        title: "Massage & Finishing",
        description:
          "A relaxing face, neck, and décolleté massage stimulates circulation. We finish with serum, moisturizer, and SPF.",
      },
    ],
    aftercare: [
      "Avoid direct sun exposure for 24 hours",
      "Skip retinol and acids the night of treatment",
      "Hydrate generously and apply SPF in the morning",
    ],
    faqs: [
      {
        question: "How often should I get a Signature Facial?",
        answer:
          "Every 4–6 weeks aligns with your natural skin cell turnover and delivers consistent, visible results.",
      },
      {
        question: "Will I be red afterward?",
        answer:
          "Some clients experience light flushing for 30–60 minutes. There is no real downtime — most return to work or events the same day.",
      },
      {
        question: "Can I wear makeup after?",
        answer:
          "We recommend giving your skin 12 hours of breathing room, but mineral makeup is fine if needed.",
      },
    ],
    duration: "60 minutes",
    price: 120,
  },
  {
    id: "hydrafacial",
    name: "HydraGlow Treatment",
    category: "Advanced Treatments",
    description:
      "An advanced multi-step treatment that combines cleansing, exfoliation, extraction, and intense hydration. Uses patented technology to deliver antioxidants and peptides deep into the skin for immediate results.",
    longDescription:
      "HydraGlow is our most-requested advanced treatment for an event-ready glow. Using vortex-fusion technology, it cleanses, exfoliates, and infuses serums into the skin in a single session — delivering visible plumpness, brightness, and clarity with zero downtime.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1000&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1000&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80",
    ],
    features: [
      "Immediate visible results",
      "Deep hydration infusion",
      "Reduction in fine lines",
      "Improved skin texture",
      "No downtime required",
    ],
    idealFor: [
      "Pre-event glow",
      "Dehydrated skin",
      "Fine lines and early signs of aging",
      "Uneven tone or texture",
    ],
    process: [
      {
        title: "Vortex Cleanse",
        description:
          "A gentle resurfacing tip lifts away dead skin and impurities while a soothing cleanser preps the skin.",
      },
      {
        title: "Glycolic & Salicylic Peel",
        description:
          "A mild peel loosens debris from the pores without irritation or stinging.",
      },
      {
        title: "Painless Extractions",
        description:
          "Vacuum-based extractions clear pores quickly and comfortably.",
      },
      {
        title: "Antioxidant & Peptide Infusion",
        description:
          "A custom booster (hydrating, brightening, or firming) is infused under gentle pressure to leave skin plump and luminous.",
      },
    ],
    aftercare: [
      "Avoid heavy workouts for 24 hours to preserve serums",
      "Hold off on actives (retinol, AHAs) for 48 hours",
      "Reapply SPF throughout the day",
    ],
    faqs: [
      {
        question: "How is this different from a regular facial?",
        answer:
          "HydraGlow uses a patented device to combine extraction and serum infusion in one step, producing more immediate, visible glow.",
      },
      {
        question: "Is it safe for sensitive skin?",
        answer:
          "Yes — pressure, peel strength, and serums are all adjustable. We tailor every step to your tolerance.",
      },
      {
        question: "How long do results last?",
        answer:
          "Hydration boost is immediate and typically visible for 5–7 days. Monthly sessions deliver cumulative, longer-lasting results.",
      },
    ],
    duration: "45 minutes",
    price: 180,
  },
  {
    id: "skin-consultation",
    name: "Personalized Skin Consultation",
    category: "Consultations",
    description:
      "Begin your skincare journey with a comprehensive one-on-one consultation. Our experts will analyze your skin, discuss your concerns, and create a customized routine using our products tailored specifically for you.",
    longDescription:
      "A dedicated session focused entirely on understanding your skin. We combine close visual analysis, lifestyle conversation, and expert product knowledge to build a routine you'll actually follow — and that genuinely fits your skin's needs.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80",
    ],
    features: [
      "In-depth skin analysis",
      "Lifestyle assessment",
      "Personalized routine creation",
      "Product recommendations",
      "Follow-up support",
    ],
    idealFor: [
      "Anyone overwhelmed by skincare options",
      "Clients with persistent concerns (acne, redness, pigmentation)",
      "Routine resets after travel, pregnancy, or seasons changing",
    ],
    process: [
      {
        title: "Intake & Goals",
        description:
          "We discuss your current routine, lifestyle, and what you'd like your skin to feel like in 90 days.",
      },
      {
        title: "Skin Analysis",
        description:
          "A thorough visual and tactile analysis identifies your skin type, sensitivities, and priority concerns.",
      },
      {
        title: "Routine Build",
        description:
          "Together we map an AM and PM routine using only what you need — no upselling, no shelf clutter.",
      },
      {
        title: "Follow-Up Plan",
        description:
          "You leave with a written plan and a built-in check-in to adjust as your skin responds.",
      },
    ],
    aftercare: [
      "Introduce new products one at a time, every 5–7 days",
      "Photograph your skin weekly to track changes",
      "Reach out anytime — questions between visits are always free",
    ],
    faqs: [
      {
        question: "Do I have to buy products at the consultation?",
        answer:
          "Never. The consultation fee covers the expert time. You're welcome to take your plan and shop elsewhere.",
      },
      {
        question: "Can this be done virtually?",
        answer:
          "Yes — we offer video consultations with the same depth of analysis using high-quality photo intake beforehand.",
      },
    ],
    duration: "45 minutes",
    price: 75,
  },
  {
    id: "chemical-peel",
    name: "Renewal Chemical Peel",
    category: "Advanced Treatments",
    description:
      "A customized chemical peel treatment that addresses concerns from acne and hyperpigmentation to fine lines and dullness. Our gentle yet effective formulas reveal fresh, renewed skin with minimal downtime.",
    longDescription:
      "Our peels are professional-grade and individually customized — never one-size-fits-all. We layer acids strategically to target your concerns while protecting your barrier, so you get real renewal without the harshness peels are known for.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=80",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1000&q=80",
    ],
    features: [
      "Multiple strength options",
      "Targets specific concerns",
      "Promotes cell renewal",
      "Improves skin texture",
      "Reduces hyperpigmentation",
    ],
    idealFor: [
      "Hyperpigmentation and melasma",
      "Acne and post-acne marks",
      "Sun damage and dullness",
      "Fine lines and rough texture",
    ],
    process: [
      {
        title: "Pre-Peel Prep",
        description:
          "We cleanse and degrease the skin for even acid penetration, then protect sensitive zones.",
      },
      {
        title: "Custom Acid Layering",
        description:
          "We apply 1–3 layers of a customized acid blend, monitoring your skin closely between each pass.",
      },
      {
        title: "Neutralization & Soothing",
        description:
          "The peel is neutralized and a calming, barrier-supporting mask is applied.",
      },
      {
        title: "Post-Peel Protection",
        description:
          "We finish with peptides, hydrating serum, and a mineral SPF you can wear out the door.",
      },
    ],
    aftercare: [
      "Strict daily SPF for at least 2 weeks",
      "No retinol, scrubs, or acids for 5–7 days",
      "Expect light flaking on days 3–5 — do not pick",
      "Hydrate aggressively with a barrier cream",
    ],
    faqs: [
      {
        question: "Will I peel visibly?",
        answer:
          "Most clients experience light, fine flaking around days 3–5. Heavy peeling is rare with our customized approach.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "A series of 3–6 spaced 3–4 weeks apart is typical for pigmentation or texture goals.",
      },
      {
        question: "Can I do this in summer?",
        answer:
          "Yes, with diligent SPF use. We adjust formulation strength seasonally to keep results safe.",
      },
    ],
    duration: "30 minutes",
    price: 150,
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
