export interface NavItem {
  label: string;
  fragment?: string;
  href?: string;
  external?: boolean;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: 'ai' | 'cloud' | 'enterprise' | 'devops' | 'data' | 'transform' | 'servicenow';
}

export interface IndustryCard {
  id: string;
  name: string;
  icon: 'health' | 'finance' | 'factory' | 'retail' | 'logistics' | 'education' | 'telecom' | 'media' | 'aviation';
}

export interface DeliveryStep {
  id: string;
  title: string;
  subtitle: string;
  icon: 'discover' | 'research' | 'architect' | 'build' | 'test' | 'deploy';
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'facebook' | 'instagram';
  external?: boolean;
}

export interface ClientLogo {
  name: string;
}

export interface HeroFloatingCard {
  id: string;
  label: string;
  angle: number;
  radius: number;
  delay: string;
}
