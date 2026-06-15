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
  { name: 'Azure' },
  { name: 'ServiceNow' },
  { name: '.NET' },
  { name: 'Oracle' },
  { name: 'AWS' },
  { name: 'Google Cloud' },
  { name: 'SAP' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'servicenow',
    title: 'ServiceNow CSM & Platform',
    description:
      'Enterprise ServiceNow implementations for CSM, Case Management, Major Incident, SLAs, and UI Policies. End-to-end platform engineering and workflow automation.',
    icon: 'servicenow',
  },
  {
    id: 'azure',
    title: 'Azure Cloud Engineering',
    description:
      'App Services, Azure SQL, Service Bus, Key Vault, and DevOps pipelines. Migrate legacy .NET monoliths to event-driven cloud architectures with security-by-design.',
    icon: 'cloud',
  },
  {
    id: 'dotnet',
    title: '.NET Application Modernization',
    description:
      'Modernize legacy C#, VB.NET, ASP.NET, and WCF applications to Angular + ASP.NET Core. Clean architecture, REST APIs, and measurable performance gains.',
    icon: 'enterprise',
  },
  {
    id: 'data',
    title: 'Data Engineering & BI',
    description:
      'SQL Server, SSIS, and Crystal Reports to modern data platforms. Build executive-grade analytics and lakehouses that turn fragmented data into decisions.',
    icon: 'data',
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Automation',
    description:
      'Responsible GenAI, copilots, and intelligent automation engineered for regulated, high-scale enterprise environments using Azure AI and Copilot.',
    icon: 'ai',
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description:
      'Azure DevOps, CI/CD pipelines, observability with Application Insights, and SRE practices that accelerate delivery without compromising stability.',
    icon: 'devops',
  },
];

export const INDUSTRIES: IndustryCard[] = [
  { id: 'health', name: 'Healthcare', icon: 'health' },
  { id: 'finance', name: 'Finance & Banking', icon: 'finance' },
  { id: 'aviation', name: 'Aviation & Airlines', icon: 'aviation' },
  { id: 'mfg', name: 'Manufacturing', icon: 'factory' },
  { id: 'retail', name: 'Retail & eCommerce', icon: 'retail' },
  { id: 'logistics', name: 'Logistics & Supply Chain', icon: 'logistics' },
  { id: 'telecom', name: 'Telecom & Media', icon: 'telecom' },
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
    category: 'Aviation',
    title: 'Flight Operations Modernization on Azure',
    description:
      'Migrated mission-critical Sev 1 & Sev 2 Flight Operations workloads from legacy .NET monoliths to Azure App Services, SQL, and Service Bus. Delivered event-driven architecture serving 150–250 internal users across dispatch, SOC, and NOC teams in real time.',
    imageUrl:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Airplane wing view from window during flight',
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
    category: 'ServiceNow',
    title: 'Enterprise ServiceNow CSM Implementation',
    description:
      'Designed and deployed ServiceNow CSM with Case Management, Major Incident workflows, SLAs, and UI Policies. Reduced resolution time and improved service efficiency across multi-region operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Team collaborating in a modern office environment',
  },
];

export const VALUE_PROPS: ValueCard[] = [
  {
    id: 'v1',
    title: '16+ Years Industry Experience',
    description: 'Deep delivery experience across enterprise .NET, Azure, ServiceNow, and complex program modernization.',
  },
  {
    id: 'v2',
    title: 'ServiceNow CSM Specialists',
    description: 'Certified ServiceNow practitioners with hands-on CSM, case management, and platform automation expertise.',
  },
  {
    id: 'v3',
    title: 'Azure Cloud-Native Architecture',
    description: 'Patterns that scale: Azure App Services, Service Bus, SQL, Key Vault, and DevOps with security-by-design.',
  },
  {
    id: 'v4',
    title: 'Agile & Transparent Delivery',
    description: 'Executive-ready reporting with measurable milestones, JIRA/ Azure DevOps traceability, and clear risk management.',
  },
  {
    id: 'v5',
    title: 'Legacy to Cloud Modernization',
    description: 'Proven track record modernizing .NET monoliths into event-driven cloud architectures with zero-downtime cutovers.',
  },
  {
    id: 'v6',
    title: 'Dedicated Support & Partnership',
    description: 'Long-term enablement: run, optimize, and continuously modernize with your teams across onshore/offshore models.',
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
      'From legacy .NET migration to Azure and ServiceNow implementation, they brought clarity to complexity. Our platform modernization landed on time with measurable KPIs.',
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
      { label: 'ServiceNow CSM', href: '#services' },
      { label: 'Azure Cloud Engineering', href: '#services' },
      { label: '.NET Modernization', href: '#services' },
      { label: 'Data & Analytics', href: '#services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Aviation & Airlines', href: '#industries' },
      { label: 'Healthcare', href: '#industries' },
      { label: 'Finance', href: '#industries' },
      { label: 'Logistics', href: '#industries' },
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
  { id: 'c1', label: 'ServiceNow CSM', angle: -12, radius: 118, delay: '0s' },
  { id: 'c2', label: 'Azure Cloud', angle: 38, radius: 124, delay: '0.2s' },
  { id: 'c3', label: '.NET Modernization', angle: 112, radius: 108, delay: '0.35s' },
  { id: 'c4', label: 'DevOps & CI/CD', angle: 168, radius: 130, delay: '0.1s' },
  { id: 'c5', label: 'Data Engineering', angle: -110, radius: 120, delay: '0.25s' },
  { id: 'c6', label: 'Flight Ops Systems', angle: -52, radius: 128, delay: '0.4s' },
];