export interface PortfolioProfile {
  name: string;
  title: string;
  photo?: string;
  description: string;
  badges: string[];
  stats: { years: number; projects: number; companies: number; tools?: number };
  availableText?: string;
}

export interface PortfolioRole {
  title: string;
  period: string;
  description: string;
  skills?: string[];
  isCurrent?: boolean;
}

export interface PortfolioImpact {
  icon: string;
  text: string;
}

export interface PortfolioLink {
  icon: string;
  label: string;
  url: string;
}

export interface PortfolioExperience {
  company: string;
  companyKey?: string;
  logo?: string;
  badge?: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  // Rich format
  roles?: PortfolioRole[];
  impacts?: PortfolioImpact[];
  links?: PortfolioLink[];
  // Simple format fallback
  role?: string;
  description?: string;
}

export interface PortfolioProject {
  id?: string;
  title: string;
  category: string;
  image?: string;
  badge?: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
}

export interface PortfolioContact {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  medium?: string;
}

export interface PortfolioData {
  profile: PortfolioProfile;
  projects: PortfolioProject[];
  experience: PortfolioExperience[];
  clients?: { name: string; logo: string }[];
  contact: PortfolioContact;
  template_id?: string;
  slug?: string;
  language?: string;
}
