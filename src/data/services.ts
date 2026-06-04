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
  /** Starting price in USD. Omit when pricing is determined at consultation. */
  price?: number;
}

export const services: Service[] = [
  {
    id: "new-client-consultation",
    name: "New Client Consultation + Treatment",
    category: "Consultations",
    description:
      "Your first visit at BLÜM. A focused consultation paired with a customized treatment that addresses acne, congestion, sensitivity, dehydration, inflammation, and early signs of aging.",
    longDescription:
      "Every skin journey at BLÜM begins here. We start by getting to know your skin and your goals, then move directly into a fully customized treatment built around what your skin needs that day — deep cleansing, extractions, lymphatic drainage, massage, LED, chemical exfoliation, and barrier support. You'll leave with clearer skin and a clear plan for what comes next.",
    image:
      "https://static.glossgenius.com/public/service/d1fb7200aecd6871d38d292872cd856f94550c51/image/e1ff2adb340f256e6b4ca00445b75b55.jpg",
    features: [
      "In-depth skin analysis",
      "Customized treatment, not a fixed menu",
      "Deep cleansing & gentle extractions",
      "Lymphatic drainage & massage",
      "LED and chemical exfoliation as needed",
      "Personalized home-care plan",
    ],
    idealFor: [
      "First-time BLÜM clients",
      "Acne and congestion",
      "Sensitivity and inflammation",
      "Dehydrated or compromised skin",
    ],
    process: [
      {
        title: "Consultation & Skin Analysis",
        description:
          "We discuss your history, lifestyle, and goals, then analyze your skin closely to choose the right approach for the day.",
      },
      {
        title: "Cleanse & Prep",
        description:
          "A thorough double cleanse removes buildup and prepares the skin for treatment.",
      },
      {
        title: "Customized Treatment",
        description:
          "Extractions, lymphatic drainage, massage, LED, and chemical exfoliation are selected and layered based on what your skin needs.",
      },
      {
        title: "Barrier Support & Plan",
        description:
          "We finish with barrier-supporting products and SPF, and map out your next steps and home routine.",
      },
    ],
    aftercare: [
      "Avoid direct sun exposure for 24 hours",
      "Skip retinol and acids the night of treatment",
      "Hydrate well and apply SPF each morning",
    ],
    faqs: [
      {
        question: "Why is the first visit a consultation and treatment?",
        answer:
          "Because no two complexions are alike. Combining the consult with a treatment lets us assess how your skin responds in real time and tailor your plan accordingly.",
      },
      {
        question: "Do I need to stop using products beforehand?",
        answer:
          "Pause active exfoliants (retinol, AHAs/BHAs) for about 3–5 days before your appointment. Otherwise, come as you are.",
      },
    ],
    duration: "30+ minutes",
    price: 50,
  },
  {
    id: "signature-facial",
    name: "BLÜM Signature Facial",
    category: "Facials",
    description:
      "Fully customized treatments designed to support your skin's current condition — cleansing, exfoliation, dermaplaning, extractions, massage, lymphatic drainage, masks, LED, and cryotherapy.",
    longDescription:
      "The BLÜM Signature Facial is the heart of our menu — a results-driven, fully customized treatment built around your skin on the day you arrive. Every step is selected to balance, refresh, and visibly brighten your complexion, combining advanced techniques with deeply relaxing touch. Recommended every 4–6 weeks to align with your skin's natural renewal cycle.",
    image:
      "https://static.glossgenius.com/public/service/33e864ccfa3a446d556d8a8e3b16d57436f00f8d/image/49b462aa207e1e6043fc8921cd993d04.jpg",
    features: [
      "Customized to your skin's current condition",
      "Cleansing & exfoliation",
      "Dermaplaning & extractions",
      "Massage & lymphatic drainage",
      "Treatment mask, LED & cryotherapy",
    ],
    idealFor: [
      "Maintenance & glow",
      "Dull or congested skin",
      "Fine lines and texture",
      "Anyone wanting a customized facial",
    ],
    process: [
      {
        title: "Analysis & Cleanse",
        description:
          "We assess your skin and begin with a tailored double cleanse to prepare the canvas.",
      },
      {
        title: "Exfoliation & Dermaplaning",
        description:
          "Chemical exfoliation and optional dermaplaning refine texture and remove dead surface cells and fine vellus hair.",
      },
      {
        title: "Extractions & Massage",
        description:
          "Targeted extractions clear congestion, followed by sculpting facial and lymphatic massage to de-puff and boost circulation.",
      },
      {
        title: "Mask, LED & Cryo",
        description:
          "A treatment mask, LED light therapy, and cryotherapy calm, firm, and finish the skin with a luminous glow.",
      },
    ],
    aftercare: [
      "Avoid direct sun for 24 hours and wear SPF daily",
      "Skip active exfoliants the night of your facial",
      "Keep skin hydrated to extend your results",
    ],
    faqs: [
      {
        question: "How often should I book a Signature Facial?",
        answer:
          "Every 4–6 weeks aligns with your skin's natural cell turnover and delivers consistent, visible results.",
      },
      {
        question: "Is there downtime?",
        answer:
          "There's no real downtime. Some clients experience light flushing for 30–60 minutes that quickly settles.",
      },
      {
        question: "Can the facial be tailored to sensitive skin?",
        answer:
          "Absolutely — every step, from exfoliation strength to extractions, is adjusted to your skin's tolerance.",
      },
    ],
    duration: "60+ minutes",
    price: 140,
  },
  {
    id: "buccal-lymphatic-sculpting",
    name: "Buccal + Lymphatic Sculpting Massage",
    category: "Facial Massage",
    description:
      "Specialized buccal and lymphatic massage techniques that reduce puffiness and tension while improving circulation. Includes an Environ cleanse and an optional finishing mask.",
    longDescription:
      "A deeply restorative treatment that works the muscles of the face from both inside and out. Intraoral (buccal) massage releases tension held in the jaw and cheeks, while lymphatic techniques drain fluid, reduce puffiness, and leave the face looking lifted, sculpted, and refreshed. Includes an Environ cleanse and an optional finishing mask to seal in the glow.",
    image:
      "https://static.glossgenius.com/public/service/a69175d44020f90c9445192e4269f2871bac1de2/image/ec6df4b6277d85b4b7cee750de11bfda.jpg",
    features: [
      "Intraoral buccal massage",
      "Lymphatic drainage techniques",
      "Reduces puffiness & tension",
      "Improves circulation & tone",
      "Environ cleanse + optional mask",
    ],
    idealFor: [
      "Facial tension & TMJ-related tightness",
      "Puffiness & fluid retention",
      "Natural lift & sculpting",
      "Stress relief",
    ],
    process: [
      {
        title: "Environ Cleanse",
        description:
          "We begin with a gentle Environ cleanse to prepare the skin and the décolleté.",
      },
      {
        title: "Lymphatic Drainage",
        description:
          "Light, rhythmic strokes move stagnant fluid and reduce puffiness across the face and neck.",
      },
      {
        title: "Buccal Sculpting",
        description:
          "Using gloved intraoral techniques, we release tension in the deep facial muscles for a visibly sculpted result.",
      },
      {
        title: "Finishing Mask",
        description:
          "An optional finishing mask soothes and hydrates to seal in the lift and glow.",
      },
    ],
    aftercare: [
      "Drink plenty of water to support lymphatic flow",
      "Avoid heavy, salty meals for the rest of the day",
      "Gentle daily facial massage helps maintain results",
    ],
    faqs: [
      {
        question: "Is buccal massage uncomfortable?",
        answer:
          "It can feel intense where you hold tension, but it shouldn't be painful. Pressure is always adjusted to your comfort.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Many clients see an immediate lift and de-puffed look that lasts several days. A regular cadence builds longer-lasting tone.",
      },
    ],
    duration: "60+ minutes",
    price: 150,
  },
  {
    id: "acne-bootcamp",
    name: "Face Reality Acne Bootcamp",
    category: "Acne Treatments",
    description:
      "Customized corrective treatments for clients enrolled in our acne program. Performed biweekly or monthly to reduce breakouts, calm inflammation, and clear the skin.",
    longDescription:
      "The Face Reality Acne Bootcamp is a corrective treatment for clients actively following our acne program. Built on the Face Reality method, each session combines professional exfoliation, extractions, and high-frequency or LED therapy to accelerate clearing while your customized home-care routine does the heavy lifting between visits. Best results come from consistency — biweekly or monthly — alongside your prescribed products.",
    image:
      "https://static.glossgenius.com/public/service/0db03982827e6df33acd7ab9346db10983770078/image/354ab9677e30de54a95ab1205ff353df.jpg",
    features: [
      "Built on the Face Reality method",
      "Professional exfoliation",
      "Thorough extractions",
      "High-frequency / LED therapy",
      "Paired with a home-care protocol",
    ],
    idealFor: [
      "Active acne & breakouts",
      "Persistent congestion",
      "Post-acne marks",
      "Clients ready to commit to clearing",
    ],
    process: [
      {
        title: "Check-In & Skin Review",
        description:
          "We review how your skin responded to your home routine and adjust your protocol as needed.",
      },
      {
        title: "Exfoliation",
        description:
          "A professional acid exfoliation loosens impactions and speeds cell turnover.",
      },
      {
        title: "Extractions",
        description:
          "Careful, thorough extractions clear active congestion to reduce future breakouts.",
      },
      {
        title: "Calm & Treat",
        description:
          "High-frequency or LED therapy targets acne-causing bacteria and reduces inflammation.",
      },
    ],
    aftercare: [
      "Stay consistent with your prescribed home-care routine",
      "Do not pick or pop — let the skin heal",
      "Wear SPF daily, especially while using actives",
    ],
    faqs: [
      {
        question: "Do I need to be enrolled in the acne program?",
        answer:
          "Yes. The Bootcamp is a corrective treatment for clients in our acne program, where your custom home-care routine drives most of your results. Start with a consultation if you're new.",
      },
      {
        question: "How long until I see clear skin?",
        answer:
          "Most clients see meaningful clearing within 3–4 months of consistent treatments and home care, as it takes time to work through congestion and adjust the skin.",
      },
    ],
    duration: "60+ minutes",
    price: 130,
  },
  {
    id: "procell-microchanneling",
    name: "PROCELL Microchanneling",
    category: "Advanced Treatments",
    description:
      "A collagen-stimulating treatment that creates microchannels in the skin and infuses stem-cell-derived growth factor serum to improve tone, texture, scarring, and signs of aging.",
    longDescription:
      "PROCELL Microchanneling is a next-generation alternative to traditional microneedling. Fine microchannels trigger the skin's natural repair response while a bio-identical, stem-cell-derived growth factor serum is infused to amplify results. Over a series of treatments it visibly improves fine lines, acne scarring, pore size, pigmentation, and overall firmness — with minimal downtime. Pricing and the ideal series are confirmed at your consultation.",
    image:
      "https://static.glossgenius.com/public/service/d7ae95ff2ff872441537eff9da5b00b443503008/image/d1c8f3eee5c708a97c4a711adbd5d25e.jpg",
    features: [
      "Stimulates natural collagen production",
      "Stem-cell-derived growth factor infusion",
      "Improves scarring & texture",
      "Softens fine lines & pores",
      "Minimal downtime",
    ],
    idealFor: [
      "Acne scarring & texture",
      "Fine lines & early aging",
      "Enlarged pores",
      "Uneven tone & pigmentation",
    ],
    process: [
      {
        title: "Consultation & Prep",
        description:
          "We confirm you're a candidate, then cleanse and prepare the skin for treatment.",
      },
      {
        title: "Microchanneling",
        description:
          "Controlled microchannels are created across the treatment area to activate the repair response.",
      },
      {
        title: "Growth Factor Infusion",
        description:
          "A stem-cell-derived growth factor serum is infused to maximize collagen stimulation and healing.",
      },
      {
        title: "Soothe & Protect",
        description:
          "We finish with calming, barrier-supporting products and mineral SPF.",
      },
    ],
    aftercare: [
      "Avoid sun exposure and wear SPF diligently",
      "No actives (retinol, acids) for 3–5 days",
      "Expect mild redness for 24–48 hours",
      "Keep skin clean and hydrated while it heals",
    ],
    faqs: [
      {
        question: "How is this different from microneedling?",
        answer:
          "PROCELL pairs microchanneling with a proprietary stem-cell-derived growth factor serum, which enhances the regenerative response beyond traditional microneedling.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Most concerns respond best to a series of 3–6 sessions spaced about 4 weeks apart. Your plan is confirmed at consultation.",
      },
    ],
    duration: "60+ minutes",
  },
  {
    id: "dmk-enzyme-therapy-level-1",
    name: "DMK Enzyme Therapy — Level 1",
    category: "Advanced Treatments",
    description:
      "A signature DMK enzyme masque treatment that works with the skin to flush, oxygenate, and strengthen — improving circulation, clearing congestion, and restoring healthy function.",
    longDescription:
      "DMK Enzyme Therapy is built on the philosophy of restoring skin to its peak function. The Level 1 enzyme masque creates a reverse osmosis effect — flushing toxins, oxygenating the skin, and stimulating circulation through the signature 'plasmatic' action. It's deeply detoxifying and strengthening, making it ideal for a wide range of concerns from aging to acne. Pricing is confirmed at your consultation.",
    image:
      "https://static.glossgenius.com/public/service/f4918d82333b81baa51121b5eda9d8703743f522/image/254d5c5e2bf8d018eef4a69a564a3752.jpg",
    features: [
      "Signature DMK enzyme masque",
      "Oxygenates & detoxifies",
      "Boosts circulation",
      "Strengthens skin function",
      "Suits most skin types & concerns",
    ],
    idealFor: [
      "Dull, congested skin",
      "Signs of aging",
      "Acne & breakouts",
      "Skin needing a reset",
    ],
    process: [
      {
        title: "Cleanse & Prep",
        description:
          "The skin is cleansed and prepped with DMK's preparatory products.",
      },
      {
        title: "Enzyme Masque Application",
        description:
          "The signature enzyme masque is applied to begin the flushing and oxygenating process.",
      },
      {
        title: "Plasmatic Action",
        description:
          "As the masque sets, you'll feel the characteristic 'pulsing' as circulation increases and toxins are flushed.",
      },
      {
        title: "Remove & Finish",
        description:
          "The masque is removed and the skin is finished with DMK home-prescriptive products and SPF.",
      },
    ],
    aftercare: [
      "Wear SPF daily and avoid direct sun",
      "Follow your DMK home-prescriptive routine",
      "Stay hydrated to support the flushing process",
    ],
    faqs: [
      {
        question: "What does the enzyme masque feel like?",
        answer:
          "Most clients feel a tightening and a gentle pulsing sensation as circulation increases — it's a unique part of the treatment and completely normal.",
      },
      {
        question: "Is Level 1 right for me?",
        answer:
          "Level 1 is a wonderful introduction to DMK Enzyme Therapy and suits most skin types. We'll confirm the right protocol at your consultation.",
      },
    ],
    duration: "60+ minutes",
  },
  {
    id: "dmk-enzyme-therapy-level-2",
    name: "DMK Enzyme Therapy — Level 2",
    category: "Advanced Treatments",
    description:
      "An advanced DMK enzyme treatment recommended after Level 1, intensifying the enzymatic action to address more pronounced concerns and accelerate results.",
    longDescription:
      "Level 2 builds on the foundation of DMK Enzyme Therapy Level 1, intensifying the enzymatic and corrective action for clients whose skin is ready for more. It targets deeper concerns — pigmentation, advanced aging, and stubborn congestion — and is most effective once your skin has acclimated through Level 1. Recommended after Level 1; pricing confirmed at consultation.",
    // GlossGenius has no dedicated photo for Level 2; reuse the DMK Level 1 image.
    image:
      "https://static.glossgenius.com/public/service/f4918d82333b81baa51121b5eda9d8703743f522/image/254d5c5e2bf8d018eef4a69a564a3752.jpg",
    features: [
      "Advanced enzymatic action",
      "Targets pigmentation & deeper concerns",
      "Builds on Level 1 results",
      "Corrective & strengthening",
      "Customized DMK protocol",
    ],
    idealFor: [
      "Clients who've completed Level 1",
      "Pigmentation & sun damage",
      "Advanced signs of aging",
      "Stubborn congestion",
    ],
    process: [
      {
        title: "Skin Assessment",
        description:
          "We evaluate how your skin responded to Level 1 and tailor the Level 2 protocol accordingly.",
      },
      {
        title: "Targeted Prep",
        description:
          "Corrective DMK products are layered to prime the skin for intensified enzyme action.",
      },
      {
        title: "Enzyme Therapy",
        description:
          "The advanced enzyme treatment is applied to drive deeper detoxification and correction.",
      },
      {
        title: "Finish & Prescribe",
        description:
          "We finish with home-prescriptive products and adjust your routine to support your results.",
      },
    ],
    aftercare: [
      "Strict daily SPF — your skin is more photosensitive",
      "Follow your updated DMK home routine closely",
      "Avoid additional exfoliation between treatments",
    ],
    faqs: [
      {
        question: "Why do I need Level 1 first?",
        answer:
          "Level 1 conditions and strengthens the skin so it can tolerate and benefit from the more intensive Level 2 action. We recommend it as a foundation.",
      },
      {
        question: "How often should I come in?",
        answer:
          "Frequency depends on your goals and skin response — typically every 1–2 weeks during a corrective phase. We'll map your series at consultation.",
      },
    ],
    duration: "60+ minutes",
  },
  {
    id: "brow-tint",
    name: "Brow Tint",
    category: "Add-Ons",
    description:
      "A semi-permanent tint that defines and deepens the brows, adding shape and fullness for a polished, low-maintenance finish.",
    longDescription:
      "A quick, high-impact enhancement. Brow tinting deposits a semi-permanent color that defines your natural shape, fills sparse areas, and frames the face — so you wake up with groomed, fuller-looking brows for weeks. A perfect add-on to any facial.",
    image:
      "https://static.glossgenius.com/public/service/2086cc90a65ce00cbc278c60edc956096a5f30f2/image/c4fa446abd3823aedd6a33ebefa19fe7.jpg",
    features: [
      "Defines & deepens brow color",
      "Adds shape and fullness",
      "Semi-permanent, low-maintenance",
      "Great facial add-on",
    ],
    idealFor: [
      "Sparse or light brows",
      "Low-maintenance definition",
      "Framing the face",
    ],
    aftercare: [
      "Avoid water and steam on the brows for 12–24 hours",
      "Skip exfoliants around the brow area for a couple of days",
      "Color softens gradually over 3–4 weeks",
    ],
    faqs: [
      {
        question: "How long does a brow tint last?",
        answer:
          "Typically 3–4 weeks, depending on your skin and routine. It fades gradually and naturally.",
      },
      {
        question: "Can I add this to a facial?",
        answer:
          "Yes — brow tinting is a popular add-on to any facial or treatment. Just let us know when you book.",
      },
    ],
    duration: "15 minutes",
  },
  {
    id: "lash-tint",
    name: "Lash Tint",
    category: "Add-Ons",
    description:
      "A semi-permanent lash tint that darkens and defines your natural lashes for a bright, mascara-free, wide-awake look.",
    longDescription:
      "Lash tinting darkens your natural lashes from root to tip, making them look longer, fuller, and more defined — without mascara. Ideal for vacations, busy mornings, or anyone who wants an effortless, wide-awake eye. A quick, comfortable add-on to any service.",
    image:
      "https://static.glossgenius.com/public/service/a1016afe274d25bb9c80d7e0d2080a3c5c7c6ac4/image/84f7b03c61d18f1d33efb07a21247479.jpg",
    features: [
      "Darkens & defines natural lashes",
      "Mascara-free, wide-awake look",
      "Semi-permanent",
      "Quick, comfortable add-on",
    ],
    idealFor: [
      "Light or fair lashes",
      "Mascara-free routines",
      "Vacations & low-maintenance looks",
    ],
    aftercare: [
      "Avoid water, steam, and rubbing for 12–24 hours",
      "Skip oil-based eye products for a day",
      "Color fades gradually over 3–4 weeks",
    ],
    faqs: [
      {
        question: "Is lash tinting safe around the eyes?",
        answer:
          "Yes — we use professional tints and keep your eyes closed and protected throughout. Let us know if you have sensitivities.",
      },
      {
        question: "How long does it last?",
        answer:
          "Usually 3–4 weeks as your natural lashes cycle. It fades softly over time.",
      },
    ],
    duration: "15 minutes",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
