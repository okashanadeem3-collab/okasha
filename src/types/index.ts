export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  note: string;
  features: string[];
  popular: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
}
