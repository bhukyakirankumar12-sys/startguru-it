import type {
  CaseStudy,
  ClientLogo,
  DeliveryStep,
  FooterColumn,
  HeroFloatingCard,
  IndustryCard,
  NavItem,
  ServiceCard,
  SocialLink,
  Testimonial,
  ValueCard,
} from '../models/site.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', fragment: 'top' },
  { label: 'Services', fragment: 'services' },
  { label: 'Industries', fragment: 'industries' },
  { label: 'Case Studies', fragment: 'case-studies' },
  { label: 'About Us', fragment: 'about' },
  { label: 'Insights', href: '#insights', external: false },
  { label: 'Careers', href: '#careers', external: false },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Microsoft' },
  { name: 'AWS' },
  { name: 'Google Cloud' },
  { name: 'Oracle' },
  { name: 'SAP' },
  { name: 'Salesforce' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'ai',
    title: 'AI Development',
    description:
      'Responsible GenAI, copilots, and intelligent automation engineered for regulated, high-scale enterprise environments.',
    icon: 'ai',
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    description:
      'Landing zones, modernization, and resilient cloud platforms across hyperscalers with security-by-design governance.',
    icon: 'cloud',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Applications',
    description:
      'ERP, CRM, and core systems integration with clean architecture, APIs, and measurable business outcomes.',
    icon: 'enterprise',
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description:
      'Platform engineering, CI/CD, observability, and SRE practices that accelerate delivery without compromising stability.',
    icon: 'devops',
  },
  {
    id: 'data',
    title: 'Data Engineering & BI',
    description:
      'Modern data platforms, lakehouses, and executive-grade analytics that turn fragmented data into decisions.',
    icon: 'data',
  },
  {
    id: 'transform',
    title: 'Digital Transformation',
    description:
      'Operating model change, product strategy, and technology roadmaps aligned to board-level priorities.',
    icon: 'transform',
  },
];

export const INDUSTRIES: IndustryCard[] = [
  { id: 'health', name: 'Healthcare', icon: 'health' },
  { id: 'finance', name: 'Finance', icon: 'finance' },
  { id: 'mfg', name: 'Manufacturing', icon: 'factory' },
  { id: 'retail', name: 'Retail & eCommerce', icon: 'retail' },
  { id: 'logistics', name: 'Logistics & Supply Chain', icon: 'logistics' },
  { id: 'edu', name: 'Education', icon: 'education' },
  { id: 'telecom', name: 'Telecom', icon: 'telecom' },
  { id: 'media', name: 'Media & Entertainment', icon: 'media' },
];

export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    id: '1',
    title: 'Discover & Analyze',
    subtitle: 'Stakeholder alignment, domain discovery, and value framing.',
    icon: 'discover',
  },
  {
    id: '2',
    title: 'AI Research Agent',
    subtitle: 'Accelerated research, patterns, and reference architectures.',
    icon: 'research',
  },
  {
    id: '3',
    title: 'Architecture & Design',
    subtitle: 'Secure, scalable blueprints with enterprise NFRs embedded.',
    icon: 'architect',
  },
  {
    id: '4',
    title: 'Code & Build (AI Assisted)',
    subtitle: 'Engineering excellence with AI pair-programming guardrails.',
    icon: 'build',
  },
  {
    id: '5',
    title: 'Test & Validate',
    subtitle: 'Quality engineering, performance, and compliance validation.',
    icon: 'test',
  },
  {
    id: '6',
    title: 'Deploy & Optimize',
    subtitle: 'Progressive rollout, SLOs, and continuous improvement loops.',
    icon: 'deploy',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    category: 'Healthcare',
    title: 'AI Powered Healthcare Platform',
    description:
      'Clinical workflow intelligence, interoperability, and predictive operations for a multi-region health system.',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Healthcare professional reviewing digital patient information',
  },
  {
    id: 'cs2',
    category: 'Logistics',
    title: 'Intelligent Fleet Management System',
    description:
      'Real-time routing, telematics integration, and AI-assisted dispatch reducing cost per mile at enterprise scale.',
    imageUrl:
      'https://images.unsplash.com/photo-1519003722824-cd45d312af88?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Commercial trucks on a highway at dusk',
  },
  {
    id: 'cs3',
    category: 'Knowledge',
    title: 'Enterprise Knowledge Assistant',
    description:
      'Grounded GenAI over enterprise content with governance, audit trails, and role-aware responses for global teams.',
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Team collaborating in a modern office environment',
  },
];

export const VALUE_PROPS: ValueCard[] = [
  {
    id: 'v1',
    title: '12+ Years Industry Experience',
    description: 'Deep delivery experience across complex programs and global operating models.',
  },
  {
    id: 'v2',
    title: 'AI First Engineering Mindset',
    description: 'Practical AI adoption with safety, observability, and enterprise controls baked in.',
  },
  {
    id: 'v3',
    title: 'Enterprise Grade Architecture',
    description: 'Patterns that scale: security, resilience, performance, and maintainability by default.',
  },
  {
    id: 'v4',
    title: 'Agile & Transparent Delivery',
    description: 'Executive-ready reporting with measurable milestones and clear risk management.',
  },
  {
    id: 'v5',
    title: 'Scalable & Secure Solutions',
    description: 'Zero-trust aligned designs with operational excellence from day one.',
  },
  {
    id: 'v6',
    title: 'Dedicated Support & Partnership',
    description: 'Long-term enablement: run, optimize, and continuously modernize with your teams.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'StarGuru IT operated like an extension of our enterprise architecture team. The rigor, documentation, and delivery cadence were best-in-class.',
    name: 'Priya Raman',
    role: 'Chief Digital Officer',
    company: 'NorthPeak Financial Group',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'From cloud foundation to GenAI guardrails, they brought clarity to complexity. Our platform modernization landed on time with measurable KPIs.',
    name: 'Daniel Okonkwo',
    role: 'VP, Engineering',
    company: 'Helix Logistics',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Exceptional stakeholder management and technical depth. The team raised the bar for what we expect from strategic partners.',
    name: 'Elena Marquez',
    role: 'SVP, Operations',
    company: 'Aurora Health Partners',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Leadership', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Newsroom', href: '#insights' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Development', href: '#services' },
      { label: 'Cloud Engineering', href: '#services' },
      { label: 'Enterprise Applications', href: '#services' },
      { label: 'Data & Analytics', href: '#services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '#industries' },
      { label: 'Finance', href: '#industries' },
      { label: 'Manufacturing', href: '#industries' },
      { label: 'Retail', href: '#industries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', href: '#insights' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Privacy', href: '#privacy' },
      { label: 'Security', href: '#security' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Schedule Consultation', href: '#contact' },
      { label: 'Partnerships', href: '#contact' },
      { label: 'Support', href: '#contact' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin', external: true },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram', external: true },
];

export const HERO_FLOATING: HeroFloatingCard[] = [
  { id: 'c1', label: 'Cloud Engineering', angle: -12, radius: 118, delay: '0s' },
  { id: 'c2', label: 'Enterprise Applications', angle: 38, radius: 124, delay: '0.2s' },
  { id: 'c3', label: 'AI Solutions', angle: 112, radius: 108, delay: '0.35s' },
  { id: 'c4', label: 'DevOps Automation', angle: 168, radius: 130, delay: '0.1s' },
  { id: 'c5', label: 'Data Engineering', angle: -110, radius: 120, delay: '0.25s' },
  { id: 'c6', label: 'Digital Transformation', angle: -52, radius: 128, delay: '0.4s' },
];
