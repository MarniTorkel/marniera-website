import agentsLandscape from '../assets/img/AI-agents-landscape.jpg'
import aiEcosystem from '../assets/img/ai_ecosystem.png'
import aiFramework from '../assets/img/ai_framework.png'
import bestAi from '../assets/img/bestAI.png'
import litReview from '../assets/img/litrev.png'
import paidFree from '../assets/img/paid_free.jpg'

export const images = {
  agentsLandscape,
  aiEcosystem,
  aiFramework,
  bestAi,
  litReview,
  paidFree,
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'agents', label: 'Agent Apps' },
  { id: 'guild', label: 'AI Guild' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'research', label: 'Research' },
]

export const metrics = [
  { value: '7+', label: 'years in data science and research systems' },
  { value: '10+', label: 'scientific apps and decision platforms shipped' },
  { value: '2026', label: 'multi-agent product studio roadmap' },
]

export const agentProducts = [
  {
    id: 'research-agent',
    type: 'Research',
    status: 'Design',
    title: 'Research Intelligence Agent',
    summary:
      'A literature, evidence, and experiment planning workspace for teams that need grounded research briefs.',
    stack: ['RAG', 'Citation memory', 'Evaluation loops'],
    action: 'Plan product',
  },
  {
    id: 'clinical-agent',
    type: 'Healthcare',
    status: 'Prototype',
    title: 'Clinical Decision Agent',
    summary:
      'A human-in-the-loop assistant for scenario modelling, patient context, and transparent recommendation support.',
    stack: ['Decision support', 'Audit trails', 'Risk review'],
    action: 'View direction',
  },
  {
    id: 'data-story-agent',
    type: 'Analytics',
    status: 'Build next',
    title: 'Data Story Agent',
    summary:
      'An analyst copilot that turns datasets, dashboards, and model outputs into explainable narratives.',
    stack: ['Data apps', 'Narrative UX', 'Charts'],
    action: 'Scope app',
  },
  {
    id: 'workflow-agent',
    type: 'Operations',
    status: 'Backlog',
    title: 'Workflow Orchestration Agent',
    summary:
      'A full stack agent layer for task routing, tool calls, approvals, and long-running business workflows.',
    stack: ['Agent runtime', 'Queues', 'Permissions'],
    action: 'Add link',
  },
  {
    id: 'knowledge-agent',
    type: 'Knowledge',
    status: 'Backlog',
    title: 'Knowledge Base Agent',
    summary:
      'A secure search and synthesis interface across documents, notes, code, and internal project context.',
    stack: ['Semantic search', 'Access control', 'Source tracing'],
    action: 'Add link',
  },
  {
    id: 'creative-agent',
    type: 'Studio',
    status: 'Exploring',
    title: 'Generative Studio Agent',
    summary:
      'A creative coding and media assistant for interactive art, geometry systems, and branded visual assets.',
    stack: ['Canvas', 'Design systems', 'Media generation'],
    action: 'Explore',
  },
]

export const capabilities = [
  {
    title: 'Agentic product strategy',
    copy:
      'Define the right human approval points, tool boundaries, memory model, and product surface before writing the system prompt.',
  },
  {
    title: 'Full stack AI apps',
    copy:
      'Build responsive React interfaces, API layers, databases, dashboards, and deployment flows around AI workflows.',
  },
  {
    title: 'Applied research systems',
    copy:
      'Translate research methods into interactive products for analysis, benchmarking, decision support, and communication.',
  },
  {
    title: 'Evaluation and trust',
    copy:
      'Create benchmarks, feedback loops, source citations, monitoring, and review patterns for safer AI iteration.',
  },
]

export const roadmap = [
  {
    stage: '01',
    title: 'Foundations',
    detail: 'Python, statistics, linear algebra, product thinking, and core machine learning concepts.',
  },
  {
    stage: '02',
    title: 'Core AI engineering',
    detail: 'LLM APIs, retrieval, prompt systems, model evaluation, and structured outputs.',
  },
  {
    stage: '03',
    title: 'Agent systems',
    detail: 'Tool use, routing, memory, planning, human approval, observability, and multi-agent patterns.',
  },
  {
    stage: '04',
    title: 'Production platforms',
    detail: 'Authentication, data pipelines, deployment, monitoring, cost controls, and security reviews.',
  },
  {
    stage: '05',
    title: 'Domain products',
    detail: 'Research, healthcare, analytics, education, and operational systems with clear user outcomes.',
  },
]

export const resources = [
  {
    group: 'AI agent platforms',
    items: ['OpenAI', 'Anthropic', 'Google Gemini', 'Hugging Face', 'LangChain', 'LlamaIndex'],
  },
  {
    group: 'Development stack',
    items: ['React', 'Vite', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    group: 'Data and visualisation',
    items: ['Pandas', 'Polars', 'Plotly', 'D3', 'R Shiny', 'Quarto'],
  },
  {
    group: 'Operations',
    items: ['Docker', 'MLOps', 'Monitoring', 'Evaluation suites', 'Access control', 'Audit logs'],
  },
]

export const projects = [
  {
    title: 'Kidney Allocation Decision Support Platform',
    role: 'Lead Developer',
    summary:
      'Interactive decision support platform for kidney allocation scenario modelling and patient-clinician shared decisions.',
    technologies: ['R', 'Shiny', 'React', 'Data visualisation'],
    href: 'https://sydneybiox.github.io/KTSS_v2/',
  },
  {
    title: 'Single-Cell Benchmarking Dashboard',
    role: 'Designer and Developer',
    summary:
      'Interactive resource for comparing single-cell analysis methods and exploring benchmark results dynamically.',
    technologies: ['R', 'Shiny', 'Quarto', 'Benchmarking'],
    href: 'https://sydneybiox.github.io/sc_bench_benchmark_dashboard/',
  },
  {
    title: 'SpatialSimBench Website',
    role: 'Research Software',
    summary:
      'Research site and companion app ecosystem for spatially resolved gene expression simulation benchmarking.',
    technologies: ['Research UX', 'Spatial omics', 'Web apps'],
    href: 'https://sydneybiox.github.io/SpatialSimbench_website',
  },
]

export const publications = [
  {
    year: '2025',
    items: [
      {
        title: 'Multi-task benchmarking of spatially resolved gene expression simulation models',
        href: 'https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03505-w',
      },
      {
        title: 'A Kidney Transplant Support System for Patient-Clinician Shared Decision-Making',
        href: 'https://link.springer.com/article/10.1007/s10916-025-02175-2',
      },
      {
        title: 'The current landscape and emerging challenges of benchmarking single-cell methods',
        href: 'https://www.biorxiv.org/content/10.1101/2023.12.19.572303v1',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'A Message Passing Framework for Precise Cell State Identification with scClassify2',
        href: 'https://www.biorxiv.org/content/10.1101/2024.06.26.600770v1',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Thinking process templates for constructing data stories with SCDNEY',
        href: 'https://pubmed.ncbi.nlm.nih.gov/38434622/',
      },
      {
        title: 'SubLinearForce: Fully Sublinear-Time Force Computation for Large Complex Graph Drawing',
        href: 'https://ieeexplore.ieee.org/document/10005087',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        title: 'GDot: Drawing Graphs with Dots and Circles',
        href: 'https://ieeexplore.ieee.org/document/9438759',
      },
      {
        title: 'BC tree-based spectral sampling for big complex network visualization',
        href: 'https://appliednetsci.springeropen.com/articles/10.1007/s41109-021-00405-3',
      },
      {
        title: 'Louvain-based Multi-level Graph Drawing',
        href: 'https://ieeexplore.ieee.org/document/9438796',
      },
    ],
  },
]
