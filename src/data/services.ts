export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features?: string[];
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
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    features: [
      "Customized to your skin type",
      "Deep pore cleansing",
      "Gentle extraction",
      "Hydrating mask treatment",
      "Face and neck massage",
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
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    features: [
      "Immediate visible results",
      "Deep hydration infusion",
      "Reduction in fine lines",
      "Improved skin texture",
      "No downtime required",
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
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    features: [
      "In-depth skin analysis",
      "Lifestyle assessment",
      "Personalized routine creation",
      "Product recommendations",
      "Follow-up support",
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
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    features: [
      "Multiple strength options",
      "Targets specific concerns",
      "Promotes cell renewal",
      "Improves skin texture",
      "Reduces hyperpigmentation",
    ],
    duration: "30 minutes",
    price: 150,
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
