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
  { name: 'AWS' },
  { name: 'Azure' },
  { name: 'Google Cloud' },
  { name: 'Salesforce' },
  { name: 'ServiceNow' },
  { name: 'Python' },
  { name: 'Java' },
  { name: '.NET' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'cloud',
    title: 'Cloud Engineering & Migration',
    description:
      'AWS, Azure and Google Cloud. Architect, migrate, and optimize scalable cloud foundations with security-by-design and transparent cost governance.',
    icon: 'cloud',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Platforms',
    description:
      'Salesforce, ServiceNow and other CRM/ITSM solutions. Design and deploy case management, major incident workflows, SLAs, and deep platform automation.',
    icon: 'servicenow',
  },
  {
    id: 'appdev',
    title: 'Application Development & Modernization',
    description:
      'Python, Java, .NET and modern web frameworks. Modernize legacy monoliths into cloud-native architectures with clean APIs and measurable performance.',
    icon: 'enterprise',
  },
  {
    id: 'data',
    title: 'Data Engineering & Analytics',
    description:
      'Modern data platforms, BI and reporting. Transform fragmented operational data into executive-grade analytics, lakehouses, and strategic decisions.',
    icon: 'data',
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Automation',
    description:
      'GenAI, copilots, and intelligent process automation engineered for regulated, high-scale enterprise environments with governance guardrails.',
    icon: 'ai',
  },
  {
    id: 'devops',
    title: 'DevOps & Quality Engineering',
    description:
      'CI/CD, automated testing, observability, and SRE practices that accelerate velocity, repeatability, and mission-critical stability.',
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
    title: '16+ Years Delivery Experience',
    description:
      'Proven track record architecting, modernizing, and operating platforms across AWS, Azure, GCP, Salesforce, ServiceNow, and modern cloud stacks.',
  },
  {
    id: 'v2',
    title: 'Senior Practitioner Model',
    description:
      'As a focused team of senior consultants (2-10 employees), you work directly with experienced engineers, not layers of account managers.',
  },
  {
    id: 'v3',
    title: 'Minority & Women-Owned Small Business',
    description:
      'Proudly a Minority Women-Owned Small Business headquartered in Cumming, Georgia, bringing diversity, precision, and agility to enterprise delivery.',
  },
  {
    id: 'v4',
    title: 'Strategy That Becomes Shipped Software',
    description:
      'We combine executive-level consulting discipline with hands-on engineering—so strategy becomes shipped software, not slideware.',
  },
  {
    id: 'v5',
    title: 'AI-Powered Delivery Lifecycle',
    description:
      'Human judgment blended with AI acceleration from discovery and architecture to AI-assisted build, validation, and progressive rollout.',
  },
  {
    id: 'v6',
    title: 'Regulated & Mission-Critical Focus',
    description:
      'Deep domain expertise serving Healthcare, Finance & Banking, Aviation & Airlines, Manufacturing, Logistics, and Telecom with strict governance.',
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
  { id: 'c1', label: 'Cloud: AWS · Azure · GCP', angle: 0, radius: 130, delay: '0s' },
  { id: 'c2', label: 'Salesforce & ServiceNow', angle: 60, radius: 134, delay: '0.2s' },
  { id: 'c3', label: 'Python · Java · .NET', angle: 120, radius: 134, delay: '0.35s' },
  { id: 'c4', label: 'DevOps & Quality Eng', angle: 180, radius: 130, delay: '0.1s' },
  { id: 'c5', label: 'Data Engineering & BI', angle: 240, radius: 134, delay: '0.25s' },
  { id: 'c6', label: 'GenAI & Automation', angle: 300, radius: 134, delay: '0.4s' },
];

export const COMPANY_INFO = {
  name: 'StarGuru',
  tagline: 'Build. Transform. Grow.',
  headline: 'Enterprise AI, Cloud, Data & Digital Engineering: strategy that becomes shipped software.',
  overview:
    'StarGuru architects, modernizes, and operates mission-critical enterprise platforms. We combine executive-level consulting discipline with hands-on engineering, so strategy becomes shipped software, not slideware. With 16+ years of delivery experience, we help enterprises in regulated, high-scale industries modernize with confidence. As a focused team of senior consultants, you work directly with experienced engineers, not layers of account managers.',
  phone: '+1 678 995 4883',
  email: 'starguru.corp@gmail.com',
  address: '7040 Majors Rd, Cumming, Georgia 30040',
  headquarters: 'Cumming, Georgia, US',
  mapUrl: 'https://www.bing.com/maps?where=Cumming%2C%20Georgia%2C%20US',
  companySize: '2-10 employees',
  industry: 'IT Services and IT Consulting',
  businessClassification: 'Minority & Women-Owned Small Business',
  specialties: [
    'Cloud Migration',
    'Data Engineering',
    'Business Intelligence',
    'Generative AI',
    'Intelligent Automation',
    'DevOps',
    'CI/CD',
    'Enterprise Architecture',
    'Digital Transformation',
    'IT Consulting',
    'Cloud Engineering',
    'AWS',
    'Azure',
    'Salesforce',
    'ServiceNow',
    'Python',
    'Application Development',
    'Application Modernization',
    'Quality Engineering',
    'IT Staffing & Consulting',
  ],
};