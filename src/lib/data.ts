import type {
  Service,
  PortfolioItem,
  Testimonial,
  FaqItem,
  PricingTier,
  ProcessStep,
} from "@/types";

export const company = {
  name: "Digitech Enterprises Ltd",
  tagline: "UK Digital Marketing Company",
  phone: "+44 20 8638 8301",
  phoneHref: "tel:442086388301",
  email: "info@digitecenterprise.com",
  address:
    "Office 688, 58 Peregrine Road, Hainault, Ilford, Essex, United Kingdom, IG6 3SZ",
  social: {
    facebook: "https://www.facebook.com/digitecenterpriseltd",
    twitter: "https://x.com/Digitech_2022",
    instagram: "https://www.instagram.com/digitech_enterpriselimited/",
  },
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 85, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "/5", label: "Average Client Rating", decimals: 1 },
  { value: 5, suffix: "+", label: "Years of Experience" },
];

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Responsive, high-performing websites built to convert.",
    description:
      "We design and build fast, responsive websites engineered to boost visibility and drive real growth — from marketing sites to full e-commerce platforms.",
    icon: "Code2",
    features: [
      "Custom responsive design",
      "E-commerce & product catalogues",
      "Performance & speed optimisation",
      "CMS & headless integrations",
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    short: "Data-driven SEO that turns rankings into revenue.",
    description:
      "Keyword research, technical SEO, and content strategy tailored to your goals — built to grow organic traffic and long-term visibility.",
    icon: "TrendingUp",
    features: [
      "Technical & on-page SEO",
      "Keyword & competitor research",
      "Content & authority building",
      "Monthly performance reporting",
    ],
  },
  {
    slug: "branding",
    title: "Branding Services",
    short: "Distinct brand identities that leave a lasting impression.",
    description:
      "From logo systems to full brand guidelines, we help businesses define an identity that stands out and builds trust with every touchpoint.",
    icon: "Sparkles",
    features: [
      "Logo & visual identity",
      "Brand guideline systems",
      "Naming & positioning",
      "Print & packaging design",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Content and campaigns that turn followers into customers.",
    description:
      "We build engagement and visibility where your audience already spends time, with strategy-led content that converts interactions into loyal customers.",
    icon: "Share2",
    features: [
      "Content calendars & creative",
      "Community management",
      "Paid social campaigns",
      "Analytics & growth reporting",
    ],
  },
  {
    slug: "ppc",
    title: "Pay-Per-Click Advertising",
    short: "Performance campaigns engineered for ROI.",
    description:
      "Our PPC specialists design and manage campaigns across search and social to maximise return on ad spend and convert clicks into customers.",
    icon: "Target",
    features: [
      "Google & Meta Ads management",
      "Landing page optimisation",
      "A/B testing & bid strategy",
      "Transparent ROI reporting",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Visuals that capture attention and reflect your brand.",
    description:
      "Eye-catching logos, banners, and digital assets designed to strengthen your presence across web, print, and social.",
    icon: "PenTool",
    features: [
      "Marketing collateral",
      "Social media creative",
      "Illustration & iconography",
      "Print-ready design",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Interfaces engineered for clarity and conversion.",
    description:
      "We design intuitive, research-backed user experiences — wireframes to polished interfaces — that make products effortless to use.",
    icon: "LayoutTemplate",
    features: [
      "User research & wireframing",
      "Interactive prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Seamless Android & iOS apps that drive engagement.",
    description:
      "We design and build native and cross-platform apps that boost engagement, improve user experience, and help your business grow.",
    icon: "Smartphone",
    features: [
      "iOS & Android development",
      "Cross-platform (React Native)",
      "App store optimisation",
      "Ongoing maintenance",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Full-funnel strategy that turns visibility into growth.",
    description:
      "A unified strategy across SEO, content, paid, and social — built around measurable growth, not vanity metrics.",
    icon: "BarChart3",
    features: [
      "Integrated campaign strategy",
      "Content marketing",
      "Conversion rate optimisation",
      "Cross-channel reporting",
    ],
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: "Design Maison",
    category: "Web Design",
    description: "Elegant interior design studio website with a boutique feel.",
    url: "https://www.designmaison.uk/",
    image: "/portfolio/design-maison.svg",
  },
  {
    title: "Farooqi Enterprises",
    category: "Web Design",
    description: "Corporate site for a global trading & sourcing enterprise.",
    url: "https://farooqienterprises.com/",
    image: "/portfolio/farooqi.svg",
  },
  {
    title: "Markhor Pet Treats",
    category: "Web Design",
    description: "E-commerce storefront for a premium pet nutrition brand.",
    url: "https://markhorpettreats.com/",
    image: "/portfolio/markhor.svg",
  },
  {
    title: "ARK Mortgages",
    category: "Web Design",
    description: "Trust-building financial services site for mortgage advisors.",
    url: "https://arkmortgages.co.uk/",
    image: "/portfolio/ark.svg",
  },
  {
    title: "Bump to Baby Prams",
    category: "Web Design",
    description: "Retail e-commerce experience for a baby products brand.",
    url: "https://bumptobabypram.co.uk/",
    image: "/portfolio/bump-to-baby.svg",
  },
  {
    title: "The Toys Arena",
    category: "Web Design",
    description: "Playful, high-conversion storefront for a toy retailer.",
    url: "https://thetoysarena.pk/",
    image: "/portfolio/toys-arena.svg",
  },
  {
    title: "AM Street Cars",
    category: "Web Design",
    description: "Booking-focused site for a private hire taxi service.",
    url: "https://amstreetcars.com/",
    image: "/portfolio/am-street-cars.svg",
  },
  {
    title: "ASQ",
    category: "Web Design",
    description: "Professional services site with a clean corporate layout.",
    url: "https://asqsl.co.uk/",
    image: "/portfolio/asq.svg",
  },
  {
    title: "Apex Artistic Generations",
    category: "Branding",
    description: "Creative-industry brand identity and portfolio site.",
    url: "https://apexartisticgenerations.com/",
    image: "/portfolio/apex.svg",
  },
  {
    title: "Snuggles Dog Grooming",
    category: "Web Design",
    description: "Local service business site with online booking.",
    url: "https://www.snugglesdoggrooming.co.uk/",
    image: "/portfolio/snuggles.svg",
  },
  {
    title: "Lee Marley",
    category: "Web Design",
    description: "Construction & groundworks company website.",
    url: "https://www.leemarley.com/",
    image: "/portfolio/lee-marley.svg",
  },
  {
    title: "South Side Creations",
    category: "Branding",
    description: "Creative studio brand and portfolio presence.",
    url: "https://southsidecreations.co.uk/",
    image: "/portfolio/south-side.svg",
  },
];

export const portfolioCategories = [
  "All",
  "Web Design",
  "Branding",
  "Social Media",
  "Logo Design",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Digitech Enterprises completely changed how my online store performs. Their digital marketing strategies helped increase traffic and sales within just a few months.",
    name: "Laura W.",
    role: "E-commerce Business",
    rating: 5,
  },
  {
    quote:
      "We partnered with Digitech Enterprises to improve our website and online presence, and the results have been great. Our search visibility and leads have gone up noticeably.",
    name: "Mark R.",
    role: "Real Estate Agency",
    rating: 5,
  },
  {
    quote:
      "Working with Digitech Enterprises was one of the best choices for my café. Their social media marketing and ad campaigns brought in new customers and a stronger local presence.",
    name: "Sophie D.",
    role: "Café Owner",
    rating: 5,
  },
  {
    quote:
      "Their team created a logo that perfectly represents my brand's identity and values — visually stunning and versatile for all my business needs.",
    name: "Albert Flores",
    role: "Logo Design Client",
    rating: 5,
  },
  {
    quote:
      "A cohesive and visually appealing brand identity that has significantly elevated my market presence. Their attention to detail is unmatched.",
    name: "Theresa Webb",
    role: "Branding Client",
    rating: 5,
  },
  {
    quote:
      "A sleek and user-friendly website — modern design, intuitive navigation, and seamless performance. They delivered beyond my expectations.",
    name: "Darlene Robertson",
    role: "Website Development Client",
    rating: 5,
  },
  {
    quote:
      "Their SEO strategies are data-driven, effective, and tailored to my business goals — I've seen a noticeable increase in organic traffic and conversions.",
    name: "Darrell Steward",
    role: "SEO Client",
    rating: 5,
  },
  {
    quote:
      "Thanks to Digitech Enterprises, my online store is now a powerhouse. The site's performance and functionality have boosted my sales dramatically.",
    name: "Bessie Cooper",
    role: "E-commerce Development Client",
    rating: 5,
  },
];

export const process: ProcessStep[] = [
  {
    title: "Understanding Your Goals",
    description:
      "We begin by learning about your business, audience, and what success looks like to you.",
  },
  {
    title: "Research & Insight",
    description:
      "Our team studies your market, competitors, and audience behaviour to uncover real opportunities.",
  },
  {
    title: "Planning & Strategy",
    description:
      "We outline a focused plan covering content, design, marketing, and performance tracking.",
  },
  {
    title: "Creation & Execution",
    description:
      "Our experts bring ideas to life through design, content, and campaigns that connect and convert.",
  },
  {
    title: "Review & Optimisation",
    description:
      "We monitor performance closely, refining what's working and improving what isn't.",
  },
  {
    title: "Reporting & Support",
    description:
      "You're kept in the loop with clear reports and ongoing support as you plan your next steps.",
  },
];

export const faq: FaqItem[] = [
  {
    question: "What does a digital marketing agency do?",
    answer:
      "A digital marketing agency helps businesses grow online through strategies like SEO, PPC, social media marketing, web design, and content creation. We build customised plans to improve your visibility and generate real results.",
  },
  {
    question: "Why should I hire a digital marketing company in the UK?",
    answer:
      "A UK-based agency understands your local audience, industry trends, and market behaviour — helping your business reach the right people faster.",
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Cost depends on your goals, the services you need, and your industry. We create flexible plans that fit your budget with no hidden fees.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Results vary by strategy. PPC can deliver near-instant results, while SEO and content marketing build long-term growth over a few months.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a wide range of UK businesses — from small startups and e-commerce brands to service-based companies and established enterprises.",
  },
  {
    question: "Do you offer social media marketing services?",
    answer:
      "Yes — we manage campaigns that increase engagement and brand awareness across Facebook, Instagram, LinkedIn, and TikTok.",
  },
  {
    question: "Can you help improve my website's Google ranking?",
    answer:
      "Absolutely. Our SEO experts use keyword optimisation, technical SEO, and quality content to improve rankings and attract organic traffic.",
  },
  {
    question: "How can I get started with your digital marketing services?",
    answer:
      "Simply contact our team for a free consultation — we'll discuss your goals and build a plan that helps your business grow online.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Silver",
    category: "Website Development",
    price: "£399.99",
    originalPrice: "£899.98",
    note: "4–10 pages · 30% advance payment",
    features: [
      "Custom international design",
      "4–10 pages (£50 per extra page)",
      "Complete responsive build",
      "Image optimisation for fast loading",
      "Custom 404 page & Google Maps integration",
    ],
    popular: false,
  },
  {
    name: "Gold",
    category: "Website Development",
    price: "£599.99",
    originalPrice: "£1,199.98",
    note: "4–15 pages · 1 month support & SEO included",
    features: [
      "Everything in Silver, plus:",
      "1 month web support & SEO",
      "1 free logo design",
      "6 months hosting & domain",
      "AI chatbot (optional)",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    category: "Website Development",
    price: "£799.99",
    originalPrice: "£1,599.98",
    note: "4–20 pages · 2 months support & SEO included",
    features: [
      "Everything in Gold, plus:",
      "2 months web support & SEO",
      "1 year hosting & domain",
      "1 year SSL certificate",
      "Website content writing",
    ],
    popular: false,
  },
];

export const industries = [
  "E-commerce & Retail",
  "Real Estate",
  "Hospitality & Food",
  "Education",
  "Healthcare",
  "Automotive",
  "Professional Services",
  "Technology & SaaS",
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "WordPress",
  "Shopify",
  "Figma",
  "Google Ads",
  "Meta Ads",
  "GA4 & Search Console",
];

export const clientLogos = [
  "Educate",
  "ARK Mortgages",
  "HKUST",
  "Bump to Baby",
  "Art of Soccer",
  "Home Solutions",
  "Farooqi Enterprises",
  "Markhor Pet Treats",
  "Toys Arena",
  "Graig Farm Organics",
  "Creovate",
];
