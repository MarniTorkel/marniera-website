import aiFramework from '../assets/img/ai_framework.png'

export const images = {
  aiFramework,
}

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

export const promptCheatsheet = [
  {
    group: 'Core modifiers',
    copy: 'Use these short codes at the top of a prompt to shape behavior fast.',
    items: [
      { code: '/role: senior AI product architect', use: 'Sets the model perspective and decision criteria.' },
      {
        code: '/goal: design a production agent workflow',
        use: 'States the outcome so responses optimize for the right finish line.',
      },
      {
        code: '/context: audience=founder, domain=healthcare, constraints=privacy',
        use: 'Injects audience, domain, and constraints without burying them in prose.',
      },
      { code: '/depth: scan | explain | implement | audit', use: 'Controls how far the assistant should go.' },
      { code: '/output: table | checklist | JSON | code patch', use: 'Locks the answer shape before generation.' },
      { code: '/evidence: cite sources, mark assumptions', use: 'Pushes current facts and uncertainty into the response.' },
    ],
  },
  {
    group: 'Agent build modifiers',
    copy: 'Good for coding agents, data agents, and workflow assistants.',
    items: [
      { code: '/tools: web, files, shell, database', use: 'Names the allowed tool surface before the agent plans.' },
      {
        code: '/guardrails: ask before writes or external sends',
        use: 'Defines approval points for risky actions.',
      },
      {
        code: '/memory: use project conventions and user preferences',
        use: 'Tells the assistant what durable context matters.',
      },
      {
        code: '/handoff: research -> planner -> builder -> reviewer',
        use: 'Defines specialist roles for multi-agent flows.',
      },
      { code: '/eval: compare against acceptance tests', use: 'Asks for verification criteria and pass/fail checks.' },
    ],
  },
  {
    group: 'Code prompt templates',
    copy: 'Drop these into developer prompts when you need structured code output.',
    items: [
      { code: '/patch-only', use: 'Return only the code changes or diff.' },
      { code: '/explain-first', use: 'Summarize approach before editing or generating code.' },
      {
        code: '/typed-output: zod | pydantic | json_schema',
        use: 'Require a schema for tool calls, API responses, or extraction.',
      },
      { code: '/security-review', use: 'Check auth, permissions, secrets, and data exposure.' },
      { code: '/perf-pass', use: 'Look for latency, caching, batching, and token-cost improvements.' },
    ],
  },
  {
    group: 'Copy-ready prompt block',
    copy: 'A compact starting point for app, agent, or research workflows.',
    template: `ROLE: You are a <specific expert>.
GOAL: <one concrete outcome>.
CONTEXT: <audience, domain, constraints, source material>.
TOOLS: <allowed tools and approval rules>.
OUTPUT: <format, schema, or acceptance criteria>.
QUALITY BAR: cite sources, state assumptions, verify before final.`,
  },
]

export const projects = []

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
