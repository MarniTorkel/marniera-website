export const guideUpdated = "2026-09-10"
export const guideSubtitle = "A practical learning map for modern AI — models, prompting, context, agents, research workflows, evaluation, safety and deployment."
export const topics = [
  {
    "id": "foundations",
    "stage": 1,
    "title": "AI & Model Foundations",
    "summary": "Understand model behaviour and choose an appropriate balance of quality, speed and cost.",
    "concepts": [
      "modern language/reasoning models",
      "tokens and context windows",
      "embeddings",
      "multimodality",
      "model capabilities",
      "model selection",
      "cost / speed / quality trade-offs"
    ],
    "practice": "Compare two models on a small set of representative tasks. Record errors, time and cost rather than relying on a single benchmark.",
    "cheats": [
      "compare",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/models"
      }
    ]
  },
  {
    "id": "prompting",
    "stage": 2,
    "title": "Prompting & Model Interfaces",
    "summary": "Turn a task into a clear model request with explicit input, output and conversation requirements.",
    "concepts": [
      "prompting",
      "prompt templates",
      "structured outputs",
      "APIs",
      "model settings",
      "reasoning controls",
      "streaming",
      "conversation state"
    ],
    "practice": "Write a prompt with success criteria and a schema. Test incomplete inputs, streaming responses and invalid outputs.",
    "cheats": [
      "tcca",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/guides/prompt-engineering"
      }
    ]
  },
  {
    "id": "context-engineering",
    "stage": 3,
    "title": "Context Engineering & Retrieval",
    "summary": "Select and organise the evidence a model needs, with retrieval and source traceability.",
    "concepts": [
      "context design",
      "RAG",
      "embeddings",
      "vector search",
      "hybrid search",
      "files",
      "memory",
      "citations",
      "context compression / compaction"
    ],
    "practice": "Build a small retrieval example with known answers. Check which passages were retrieved, whether citations support the output and what was omitted.",
    "cheats": [
      "sources",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/guides/retrieval"
      }
    ]
  },
  {
    "id": "tools-actions",
    "stage": 4,
    "title": "Tools & AI Actions",
    "summary": "Connect model decisions to useful actions through constrained, validated tool interfaces.",
    "concepts": [
      "function/tool calling",
      "web search",
      "file search",
      "code execution",
      "database tools",
      "browser/computer use"
    ],
    "practice": "Specify a tool contract with input validation and failure handling. Test refusal, permission denial and malformed arguments.",
    "cheats": [
      "api-contract",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/guides/function-calling"
      }
    ]
  },
  {
    "id": "agents",
    "stage": 5,
    "title": "Agents & Orchestration",
    "summary": "Coordinate bounded workflows with state, handoffs, approvals and clear stopping conditions.",
    "concepts": [
      "agent loops",
      "planning",
      "handoffs",
      "subagents",
      "skills",
      "approvals",
      "long-running tasks",
      "background execution",
      "workflow state"
    ],
    "practice": "Sketch the workflow state and checkpoints before adding agents. Limit retries and test recovery after an interrupted task.",
    "cheats": [
      "goal",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/guides/agents/quickstart"
      },
      {
        "label": "Claude Agent SDK",
        "url": "https://code.claude.com/docs/en/agent-sdk/overview"
      },
      {
        "label": "Google ADK",
        "url": "https://adk.dev/"
      },
      {
        "label": "Vercel AI SDK",
        "url": "https://ai-sdk.dev/docs/introduction"
      }
    ]
  },
  {
    "id": "protocols",
    "stage": 6,
    "title": "Protocols & Interoperability",
    "summary": "Understand MCP for tool and context integration and A2A for communication between agents.",
    "concepts": [
      "MCP",
      "A2A",
      "agent/tool protocols",
      "agent-to-agent communication",
      "emerging agent UI/protocol standards"
    ],
    "practice": "Compare an MCP tool integration with an A2A task handoff. Identify authentication, trust boundaries and what each protocol does not solve.",
    "cheats": [
      "tools",
      "verify"
    ],
    "resources": [
      {
        "label": "MCP documentation",
        "url": "https://modelcontextprotocol.io/docs/getting-started/intro"
      },
      {
        "label": "A2A specification and documentation",
        "url": "https://a2a-protocol.org/latest/"
      }
    ]
  },
  {
    "id": "multimodal",
    "stage": 7,
    "title": "Multimodal & Realtime AI",
    "summary": "Design interfaces that combine text, images, speech and time-sensitive interaction.",
    "concepts": [
      "vision",
      "audio",
      "speech",
      "realtime interaction",
      "image generation",
      "video generation",
      "multimodal interfaces"
    ],
    "practice": "Prototype one modality at a time. Test noisy input, interruption, latency and consent before combining channels.",
    "cheats": [
      "audience",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/guides/realtime"
      }
    ]
  },
  {
    "id": "evaluation",
    "stage": 8,
    "title": "Evaluation & Observability",
    "summary": "Measure whether a model or workflow succeeds, and inspect how it behaves in practice.",
    "concepts": [
      "evals",
      "graders",
      "benchmarks",
      "traces",
      "telemetry",
      "acceptance tests",
      "regression testing",
      "model comparison",
      "agent workflow evaluation"
    ],
    "practice": "Create an evaluation set with expected outcomes and important failure cases. Record traces and compare every change against a baseline.",
    "cheats": [
      "acceptance-test",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenTelemetry documentation",
        "url": "https://opentelemetry.io/docs/"
      }
    ]
  },
  {
    "id": "safety",
    "stage": 9,
    "title": "Safety, Security & Governance",
    "summary": "Control access, isolate risky execution and keep humans responsible for consequential decisions.",
    "concepts": [
      "permissions",
      "guardrails",
      "human approval",
      "prompt injection",
      "sensitive data",
      "sandboxing",
      "authentication",
      "AI security",
      "responsible AI",
      "governance"
    ],
    "practice": "Map sensitive data and consequential actions. Test prompt injection, least-privilege permissions and human approval paths.",
    "cheats": [
      "security-review",
      "verify"
    ],
    "resources": [
      {
        "label": "OWASP AI security guidance",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      }
    ]
  },
  {
    "id": "production",
    "stage": 10,
    "title": "Production AI Systems",
    "summary": "Build reliable applications around model calls, background work and operational constraints.",
    "concepts": [
      "FastAPI / Node application architecture",
      "React interfaces",
      "background jobs",
      "queues",
      "caching",
      "latency",
      "reliability",
      "deployment",
      "monitoring",
      "model cost"
    ],
    "practice": "Separate the interface, model orchestration and durable jobs. Exercise timeouts, retries, cancellation and deployment rollback.",
    "cheats": [
      "regression-check",
      "verify"
    ],
    "resources": [
      {
        "label": "FastAPI documentation",
        "url": "https://fastapi.tiangolo.com/"
      }
    ]
  },
  {
    "id": "optimisation",
    "stage": 11,
    "title": "Customisation & Optimisation",
    "summary": "Improve task quality and efficiency using measured changes rather than untested complexity.",
    "concepts": [
      "fine-tuning",
      "reinforcement fine-tuning where relevant",
      "prompt optimisation",
      "model routing",
      "caching",
      "smaller vs frontier models",
      "latency / cost optimisation"
    ],
    "practice": "Measure a baseline, change one factor, and rerun the evaluation set. Consider prompt changes and routing before investing in fine-tuning.",
    "cheats": [
      "performance-pass",
      "verify"
    ],
    "resources": [
      {
        "label": "OpenAI documentation",
        "url": "https://developers.openai.com/api/docs/guides/latency-optimization"
      }
    ]
  },
  {
    "id": "research",
    "stage": 12,
    "title": "AI for Research & Knowledge Work",
    "summary": "Use AI to support research while preserving evidence, reproducibility and human verification.",
    "concepts": [
      "literature research",
      "evidence synthesis",
      "scientific data analysis",
      "AI-assisted coding",
      "reproducible research",
      "research agents",
      "document/data extraction",
      "scientific visualisation",
      "human verification"
    ],
    "practice": "Maintain an evidence log and executable analysis. Verify citations, calculations and limitations before using an AI-assisted conclusion.",
    "cheats": [
      "research-question",
      "verify"
    ],
    "resources": [
      {
        "label": "Zotero documentation",
        "url": "https://www.zotero.org/support/"
      }
    ]
  }
]
export const topicGroups = [["Foundations",["foundations","prompting"]],["Knowledge & Context",["context-engineering"]],["Agentic AI",["tools-actions","agents","protocols"]],["Modalities",["multimodal"]],["Quality",["evaluation","safety"]],["Production",["production","optimisation"]],["Research",["research"]]]
export const learningTracks = [["Core",["foundations","prompting","context-engineering","tools-actions","agents"]],["AI Builder",["protocols","evaluation","production","optimisation"]],["AI Researcher",["research","context-engineering","evaluation","agents"]],["Multimodal",["multimodal"]]]
export const topicById = id => topics.find(topic=>topic.id===id)
export const topicHref = id => '#/ai-lab/guide/topics/'+id
