import { FileText, Table, LineChart, MessageSquare, Database, CheckCircle2 } from 'lucide-react';

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  variant?: 'ghost' | 'solid';
  isExternal?: boolean;
  isPrimary?: boolean;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  icon: React.ElementType;
  accent?: string;
  screenshotLabel?: string;
  metric?: string;
  metricLabel?: string;
};

export type WorkflowStepData = {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  visualLabel: string;
  supportingMetric?: string;
};

export type UseCase = {
  id: string;
  persona: string;
  title: string;
  description: string;
  benefits: string[];
  primaryAction: string;
  secondaryAction?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
  avatarUrl?: string;
  rating: number;
  category: string;
};

export type TrustItem = {
  id: string;
  label: string;
  value: string;
  description?: string;
  type: 'stat' | 'logo' | 'badge';
};

export type SecurityItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  complianceTag?: string;
};

export type FAQItemData = {
  id: string;
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  id: string;
  title: string;
  links: { label: string; href: string }[];
};

export type ComparisonRow = {
  id: string;
  capability: string;
  investiq: string;
  genericFinanceTool: string;
  manualWorkflow: string;
};

export type CTAConfig = {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref?: string;
  helperText?: string;
};

export const navigationLinks: NavigationItem[] = [
  { id: '1', label: 'Product', href: '#product' },
  { id: '2', label: 'Use Cases', href: '#use-cases' },
  { id: '3', label: 'Workflow', href: '#workflow' },
  { id: '4', label: 'Security', href: '#security' },
  { id: '5', label: 'Pricing', href: '#pricing' },
];

export const features: Feature[] = [
  {
    id: '1',
    title: 'AI Company Analysis',
    description: 'Synthesize filings, call transcripts, and historical financials into actionable company memos instantly.',
    outcome: 'Reduce initial research time from hours to minutes.',
    icon: FileText,
    metric: '10x',
    metricLabel: 'Faster thesis generation',
  },
  {
    id: '2',
    title: 'Screener with Context',
    description: 'Screen BSE/NSE stocks using natural language filters mapped to exact financial reporting lines.',
    outcome: 'Find hidden opportunities without complex SQL or Excel macros.',
    icon: Database,
  },
  {
    id: '3',
    title: 'Concall Question Generation',
    description: 'Generate targeted, contextual questions for upcoming earnings calls based on prior management guidance and peer performance.',
    outcome: 'Never ask a generic question again.',
    icon: MessageSquare,
  },
  {
    id: '4',
    title: 'Valuation Workbench',
    description: 'Build and save valuation models with AI-assisted parameter extraction from latest filings. Save your context.',
    outcome: 'Maintain continuous models without re-keying data.',
    icon: Table,
  },
  {
    id: '5',
    title: 'Company-Scoped Hub',
    description: 'A centralized workspace for each ticker, containing your specific notes, AI signals, and comparison models.',
    outcome: 'Stop context-switching across fragmented tools.',
    icon: CheckCircle2,
  },
  {
    id: '6',
    title: 'Peer Comparison Matrix',
    description: 'Side-by-side analysis of key metrics, management commentary tone, and growth signals across your selected peer group.',
    outcome: 'Instantly benchmark against the sector.',
    icon: LineChart,
  }
];

export const workflowSteps: WorkflowStepData[] = [
  {
    id: '1',
    stepNumber: 1,
    title: 'Select or Screen',
    description: 'Start with a specific NSE/BSE ticker or use our natural language screener to define a universe based on strict financial criteria.',
    visualLabel: 'Command Palette Selection',
  },
  {
    id: '2',
    stepNumber: 2,
    title: 'Review AI Signals',
    description: 'Instantly parse the latest filings and concalls. InvestIQ highlights guidance changes, management tone shifts, and red flags.',
    visualLabel: 'Signal Dashboard',
    supportingMetric: 'Extracts signals in < 5s'
  },
  {
    id: '3',
    stepNumber: 3,
    title: 'Compare & Benchmark',
    description: 'Align the company against direct peers. We automatically normalize line items for accurate comparison across the Indian market.',
    visualLabel: 'Peer Comparison View',
  },
  {
    id: '4',
    stepNumber: 4,
    title: 'Deep Dive & Validate',
    description: 'Generate targeted questions, review historical financials, and build your valuation thesis within a persistent workspace.',
    visualLabel: 'Valuation Workbench',
  }
];

export const useCases: UseCase[] = [
  {
    id: '1',
    persona: 'Equity Analysts',
    title: 'Earnings Season Prep',
    description: 'Prepare for earnings calls faster. We extract previous quarter commitments, highlight guidance misses, and suggest specific questions.',
    benefits: ['Automated historical context', 'Discrepancy highlighting', 'Targeted question generation'],
    primaryAction: 'See Analyst Workflow'
  },
  {
    id: '2',
    persona: 'Portfolio Managers',
    title: 'Continuous Monitoring',
    description: 'Monitor your existing holdings for subtle shifts in management tone or early warning signs in unstructured filings.',
    benefits: ['Real-time signal alerts', 'Automated peer benchmarking', 'Risk identification'],
    primaryAction: 'Explore Monitoring Tools'
  },
  {
    id: '3',
    persona: 'Research Teams',
    title: 'Collaborative Screening',
    description: 'Build and share complex screens using plain English. Maintain a shared knowledge base for every company covered.',
    benefits: ['Shared company hubs', 'Natural language screening', 'Unified knowledge graph'],
    primaryAction: 'View Team Features'
  }
];

export const comparisonData: ComparisonRow[] = [
  {
    id: '1',
    capability: 'Indian Market Focus',
    investiq: 'Native NSE/BSE mappings & terminology',
    genericFinanceTool: 'US-centric, poor Indian coverage',
    manualWorkflow: 'Manual mapping required'
  },
  {
    id: '2',
    capability: 'AI Workflow Integration',
    investiq: 'AI built into the research process',
    genericFinanceTool: 'Bolted-on generic chatbot',
    manualWorkflow: 'Copy-pasting to ChatGPT'
  },
  {
    id: '3',
    capability: 'Context Preservation',
    investiq: 'Persistent, company-scoped workspaces',
    genericFinanceTool: 'Fragmented tabs and windows',
    manualWorkflow: 'Local folders and spreadsheets'
  },
  {
    id: '4',
    capability: 'Data Source Verification',
    investiq: 'Direct links to original filings/concalls',
    genericFinanceTool: 'Opaque black-box answers',
    manualWorkflow: 'High risk of human error'
  }
];

export const securityItems: SecurityItem[] = [
  {
    id: '1',
    title: 'Enterprise-Grade Encryption',
    description: 'Your research data and proprietary models are encrypted at rest (AES-256) and in transit.',
    icon: CheckCircle2,
    complianceTag: 'SOC2 Ready'
  },
  {
    id: '2',
    title: 'Strict Data Isolation',
    description: 'We do not train our foundational models on your private research or screening queries.',
    icon: CheckCircle2,
  },
  {
    id: '3',
    title: 'Granular Permissions',
    description: 'Control access at the team or user level. Ensure compliance walls are maintained.',
    icon: CheckCircle2,
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "InvestIQ has fundamentally changed how we handle earnings season. The ability to instantly pull previous guidance and compare it to current commentary across the BSE 500 is invaluable.",
    authorName: "Rahul D.",
    authorTitle: "Head of Research",
    company: "Mid-Cap Fund",
    rating: 5,
    category: "Efficiency"
  },
  {
    id: '2',
    quote: "Finally, a tool that understands Indian market nuances. The natural language screener saves my analysts hours every week.",
    authorName: "Priya S.",
    authorTitle: "Portfolio Manager",
    company: "Asset Management Co.",
    rating: 5,
    category: "Screening"
  }
];

export const faqs: FAQItemData[] = [
  {
    id: '1',
    question: 'How is InvestIQ different from a Bloomberg terminal or Capitaline?',
    answer: 'InvestIQ does not replace raw data terminals. Instead, it acts as an intelligent layer on top, designed specifically to accelerate unstructured research—analyzing concalls, extracting context from filings, and summarizing signals that traditional screeners miss.'
  },
  {
    id: '2',
    question: 'Does it cover all BSE and NSE listed companies?',
    answer: 'Yes, we provide coverage for all actively traded NSE and BSE equities, with deep historical data on filings and concalls for the top 1000 companies.'
  },
  {
    id: '3',
    question: 'Can I trust the AI summaries?',
    answer: 'Our models are specifically tuned for financial literacy and strict groundedness. Every claim or summary generated by InvestIQ includes a direct citation back to the original source document (e.g., page 14 of the Q2 concall transcript).'
  }
];

export const footerLinks: FooterLinkGroup[] = [
  {
    id: 'product',
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Screener', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Pricing', href: '#' },
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
    ]
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Sales', href: '#' },
      { label: 'Security', href: '#' },
    ]
  }
];
