

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'agents', label: 'Agent Apps' },
  { id: 'guild', label: 'AI Guide' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'research', label: 'Research' },
]

export const metrics = [
  { value: '7+', label: 'years in data science and research systems' },
  { value: '10+', label: 'scientific apps and decision platforms shipped' },
  { value: '2026', label: 'research ideas and creative exploration' },
]

export const agentProducts = [
  {
    id: 'research-startup-ideas', type: 'Research', status: 'Exploring',
    title: 'AI Research Startup Ideas', subtitle: 'Research ideas → prototypes → applications',
    summary: 'Exploring AI-enabled tools for health research, data science, scientific visualisation and research workflows.',
    stack: ['Research software', 'AI-assisted analysis'], action: 'Explore Ideas', href: '#/research-startup-ideas',
  },
  {
    id: 'geometry-art', type: 'Studio', status: 'Exploring', title: 'Geometry Art',
    summary: 'Exploring geometry, mathematics and code through generative visual art.',
    stack: ['Creative coding', 'Generative design'], action: 'Explore gallery', href: '#/geometry-art',
  },
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
    title: 'AI research & applications',
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
    title: 'AI foundations',
    detail:
      'Build Python and TypeScript fluency, data literacy, product thinking, and model basics before adding agents.',
  },
  {
    stage: '02',
    title: 'Model interface',
    detail:
      'Use current APIs for multimodal input, structured outputs, prompt templates, model settings, cost control, and evaluation traces.',
  },
  {
    stage: '03',
    title: 'Context engineering',
    detail:
      'Design retrieval, vector stores, source citations, memory, skills, and MCP connectors so models receive the right context at the right time.',
  },
  {
    stage: '04',
    title: 'Agent orchestration',
    detail:
      'Compose tools, handoffs, subagents, guardrails, approvals, and sandboxed execution for workflows that can plan and act safely.',
  },
  {
    stage: '05',
    title: 'Production reliability',
    detail:
      'Add observability, regression evals, permissions, retries, workflow queues, human review, and deployment monitoring.',
  },
  {
    stage: '06',
    title: 'Domain products',
    detail:
      'Package research, healthcare, analytics, education, and operations workflows into focused apps with measurable outcomes.',
  },
]

export const resources = [
  {
    group: 'Agent platforms',
    items: [
      'OpenAI Responses API and Agents SDK',
      'Anthropic Claude Agent SDK',
      'Google Gemini managed agents',
      'Vercel AI SDK 7',
      'LangGraph and Deep Agents',
      'LlamaIndex Workflows',
      'CrewAI Flows',
    ],
  },
  {
    group: 'Prompt and context layer',
    items: [
      'Prompt templates',
      'Structured outputs',
      'Context engineering',
      'Skills and memory',
      'Subagents and handoffs',
      'Source citation UX',
    ],
  },
  {
    group: 'Data and retrieval',
    items: [
      'Vector stores',
      'Hybrid search',
      'RAG pipelines',
      'LlamaIndex connectors',
      'PostgreSQL and pgvector',
      'Document parsing',
    ],
  },
  {
    group: 'Production app stack',
    items: [
      'React, Vite, and Next.js',
      'Node.js and FastAPI',
      'Workflow queues',
      'Sandboxed execution',
      'OpenTelemetry tracing',
      'Cost monitoring',
    ],
  },
  {
    group: 'Evaluation and safety',
    items: [
      'Golden datasets',
      'Regression evals',
      'Guardrails',
      'Human approvals',
      'Permission scopes',
      'Audit logs',
    ],
  },
  {
    group: 'Automation connectors',
    items: ['MCP servers', 'Hosted tools', 'File search', 'Web search', 'Code interpreter', 'API tools'],
  },
]

export const toolCatalog = [
  {
    group: 'General AI assistants',
    items: ['ChatGPT', 'Claude', 'Google Gemini', 'Microsoft Copilot', 'Perplexity', 'Grok'],
  },
  {
    group: 'Agent platforms',
    items: [
      'OpenAI Responses API',
      'OpenAI Agents SDK',
      'Claude Agent SDK',
      'Gemini managed agents',
      'Google ADK',
      'Vercel AI SDK 7',
    ],
  },
  {
    group: 'Agent frameworks',
    items: ['LangGraph', 'Deep Agents', 'LangChain', 'LlamaIndex', 'CrewAI', 'Hugging Face'],
  },
  {
    group: 'Coding and app builders',
    items: ['Codex', 'Claude Code', 'Cursor', 'Windsurf', 'Replit', 'v0', 'Bolt.new', 'Lovable', 'Base44'],
  },
  {
    group: 'Browser and autonomous agents',
    items: [
      'OpenAI Operator',
      'Browser Use',
      'Manus',
      'Genspark',
      'ChatDev',
      'Beam',
      'IBM watsonx Orchestrate',
      'Agentforce',
    ],
  },
  {
    group: 'Research and knowledge',
    items: ['NotebookLM', 'Elicit', 'Consensus', 'SciSpace', 'Semantic Scholar', 'Zotero', 'LlamaParse'],
  },
  {
    group: 'Customer support agents',
    items: ["Tidio's Lyro", "Intercom's Fin", 'Kore.AI Agent', 'Sierra', 'Ema', 'Cognosys'],
  },
  {
    group: 'Productivity and media',
    items: ['Otter.ai', 'HeyGen', 'ElevenLabs', 'FigJam AI', 'Canva AI', 'Runway'],
  },
  {
    group: 'Retrieval and data tools',
    items: ['Vector stores', 'Hybrid search', 'pgvector', 'Pinecone', 'Weaviate', 'Qdrant', 'PostgreSQL'],
  },
  {
    group: 'Agent tool interfaces',
    items: ['MCP servers', 'Web search', 'File search', 'Code interpreter', 'Function calling', 'Computer use'],
  },
  {
    group: 'Evaluation and operations',
    items: ['OpenTelemetry', 'LangSmith', 'Promptfoo', 'Ragas', 'Guardrails', 'Human approvals', 'Audit logs'],
  },
]

export const projects = []

// Academic works are maintained in the central Research catalogue.
export { publications } from './data/research/publications'
