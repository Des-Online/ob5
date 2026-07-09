export type PageType =
  | "home"
  | "service"
  | "services"
  | "province"
  | "regions"
  | "city"
  | "service-city"
  | "informational"
  | "legal"
  | "contact";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type SEOFields = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  pest: string;
  image: string;
  intro: string;
  cardText: string;
  detailIntro: string[];
  whenToCall: string[];
  method: string[];
  safety: string[];
  costFactors: string[];
  audienceBlocks: { title: string; text: string }[];
  signs: string[];
  causes: string[];
  approach: string[];
  preparation: string[];
  prevention: string[];
  faq: FAQItem[];
  seo: SEOFields;
  published: boolean;
};

export type Province = {
  id: string;
  name: string;
  slug: string;
  intro: string;
  cities: string[];
  faq: FAQItem[];
  seo: SEOFields;
  published: boolean;
};

export type City = {
  id: string;
  name: string;
  slug: string;
  provinceSlug: string;
  provinceName: string;
  nearby: string[];
  intro: string;
  buildingContext: string;
  faq: FAQItem[];
  seo: SEOFields;
  published: boolean;
};

export type ServiceCityPage = {
  id: string;
  citySlug: string;
  serviceSlug: string;
  intro: string;
  situation: string;
  buildingTypes: string[];
  approach: string;
  preparation: string;
  prevention: string;
  faq: FAQItem[];
  seo: SEOFields;
  published: boolean;
};
