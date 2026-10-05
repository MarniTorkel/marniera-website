export const strategyTopics = [
  {
    "id": "chief-ai-officer",
    "slug": "chief-ai-officer",
    "title": "Chief AI Officer",
    "summary": "Connecting AI capability with strategy, governance, people and measurable organisational value.",
    "status": "Guide",
    "sections": [
      [
        "Strategy",
        [
          "Define an organisational AI vision and priorities.",
          "Map the competitive and research landscape to capability needs."
        ]
      ],
      [
        "Portfolio",
        [
          "Choose a balanced mix of near-term and longer-term initiatives.",
          "Review impact, feasibility, readiness, risk and cost."
        ]
      ],
      [
        "Governance",
        [
          "Assign owners and decision rights.",
          "Maintain oversight, evaluation and incident response."
        ]
      ],
      [
        "Technology",
        [
          "Choose architectures and vendors based on the actual use case.",
          "Plan integration, security and maintainability."
        ]
      ],
      [
        "Adoption",
        [
          "Redesign workflows with the people who use them.",
          "Support training, trust and feedback."
        ]
      ],
      [
        "Value",
        [
          "Measure outcomes against a baseline.",
          "Review benefits alongside errors, incidents and operating cost."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "foundations",
      "safety"
    ],
    "relatedEvaluations": [],
    "featured": false
  },
  {
    "id": "ai-strategy",
    "slug": "ai-strategy",
    "title": "AI Strategy",
    "summary": "Connect organisational priorities with useful and responsible AI capabilities.",
    "status": "Framework",
    "sections": [
      [
        "Planning",
        [
          "Organisational AI vision",
          "Strategic priorities",
          "Opportunity identification",
          "Competitive / research landscape",
          "AI capability planning",
          "Short-term versus long-term initiatives"
        ]
      ],
      [
        "Where can AI help?",
        [
          "Automate repetitive bounded tasks.",
          "Assist people with drafts and retrieval.",
          "Augment analysis and exploration.",
          "Discover patterns and questions for verification.",
          "Support decisions with evidence; retain accountable human judgement for high-risk decisions."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "foundations",
      "research"
    ],
    "relatedEvaluations": [
      "model-task-comparison"
    ],
    "featured": false
  },
  {
    "id": "prioritisation",
    "slug": "prioritisation",
    "title": "Use-Case Prioritisation",
    "summary": "Compare candidate projects before committing resources.",
    "status": "Framework",
    "sections": [
      [
        "Assessment criteria",
        [
          "Impact",
          "Feasibility",
          "Data readiness",
          "Risk",
          "Cost",
          "Time to value",
          "Strategic alignment"
        ]
      ],
      [
        "Conceptual prioritisation framework",
        [
          "Impact × Feasibility × Readiness / (Risk × Cost)",
          "A discussion aid, not a mathematically validated formula. Assess severe risks separately from potential benefits."
        ]
      ],
      [
        "Portfolio review",
        [
          "Assign an owner, baseline and evidence threshold.",
          "Balance near-term improvements with strategic investments.",
          "Reassess, stop or redirect projects when assumptions fail."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "evaluation",
      "optimisation"
    ],
    "relatedEvaluations": [
      "quality-cost-latency"
    ],
    "featured": true
  },
  {
    "id": "operating-model",
    "slug": "operating-model",
    "title": "AI Operating Model",
    "summary": "Choose how teams share capability, accountability and delivery work.",
    "status": "Framework",
    "sections": [
      [
        "Central AI team",
        [
          "Strength: shared expertise and consistent standards. Trade-off: bottlenecks and distance from domain needs."
        ]
      ],
      [
        "Embedded AI teams",
        [
          "Strength: domain context and delivery ownership. Trade-off: duplicated infrastructure and uneven practices."
        ]
      ],
      [
        "Hub-and-spoke",
        [
          "Strength: central standards with local delivery. Trade-off: coordination overhead and unclear boundaries unless ownership is explicit."
        ]
      ],
      [
        "AI Centre of Excellence",
        [
          "Strength: enablement, patterns and shared learning. Trade-off: advice may not translate into delivery without accountable teams."
        ]
      ],
      [
        "Federated model",
        [
          "Strength: autonomy across units. Trade-off: interoperability and governance require deliberate coordination."
        ]
      ],
      [
        "Roles",
        [
          "Chief AI Officer",
          "AI Product Lead",
          "AI / ML Engineer",
          "Research Scientist",
          "Data Scientist",
          "Software Engineer",
          "Domain Expert",
          "Security / Privacy",
          "Legal / Governance",
          "UX / Human Factors"
        ]
      ]
    ],
    "relatedGuideTopics": [
      "production",
      "agents"
    ],
    "relatedEvaluations": [],
    "featured": false
  },
  {
    "id": "governance",
    "slug": "governance",
    "title": "AI Governance",
    "summary": "Make responsibilities, permissions and review processes explicit.",
    "status": "Framework",
    "sections": [
      [
        "Governance scope",
        [
          "Data: privacy, provenance and access control.",
          "Models: vendor review, evaluation and monitoring.",
          "Agents: permissions, human oversight and auditable actions.",
          "People: ownership, training and escalation.",
          "Decisions: accountability, responsible use and incident response."
        ]
      ],
      [
        "Before deployment",
        [
          "Is the use case clearly defined?",
          "Is sensitive data involved?",
          "Are permissions appropriate?",
          "Has the model/workflow been evaluated?",
          "Is human review required?",
          "Can important actions be audited?",
          "Are failure modes understood?",
          "Is there a fallback?",
          "Is performance monitored?",
          "Is there a clear owner?"
        ]
      ]
    ],
    "relatedGuideTopics": [
      "safety",
      "evaluation"
    ],
    "relatedEvaluations": [
      "agent-tool-reliability"
    ],
    "featured": false
  },
  {
    "id": "risk",
    "slug": "risk",
    "title": "AI Risk",
    "summary": "Identify consequences and controls in the actual deployment context.",
    "status": "Guide",
    "sections": [
      [
        "Lower risk — contextual examples",
        [
          "Drafting",
          "Summarisation",
          "Idea generation"
        ]
      ],
      [
        "Moderate risk — contextual examples",
        [
          "Internal analysis",
          "Research assistance",
          "Code generation",
          "Workflow automation"
        ]
      ],
      [
        "Higher risk — contextual examples",
        [
          "Clinical decisions",
          "Financial decisions",
          "Employment decisions",
          "Autonomous external actions",
          "Sensitive-data processing"
        ]
      ],
      [
        "Interpretation",
        [
          "Risk depends on context, jurisdiction and actual implementation. These are conceptual examples, not legal classifications.",
          "A seemingly simple task can become high-risk when sensitive data or consequential actions are involved.",
          "Set approval boundaries and fallback paths before deployment."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "safety"
    ],
    "relatedEvaluations": [
      "agent-tool-reliability"
    ],
    "featured": false
  },
  {
    "id": "adoption",
    "slug": "adoption",
    "title": "AI Adoption",
    "summary": "Help people use AI effectively within real workflows.",
    "status": "Guide",
    "sections": [
      [
        "Change practices",
        [
          "Training",
          "Workflow redesign",
          "User trust",
          "Human-in-the-loop design",
          "Champions",
          "Communication",
          "Documentation",
          "Feedback",
          "Adoption metrics"
        ]
      ],
      [
        "Progression",
        [
          "Experiment → Pilot → Production → Scale → Optimise",
          "Most ideas should not jump directly from experiment to organisation-wide deployment. Define evidence and review gates between stages."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "production",
      "evaluation"
    ],
    "relatedEvaluations": [],
    "featured": false
  },
  {
    "id": "value",
    "slug": "value",
    "title": "Measuring AI Value",
    "summary": "Measure benefits, quality and risk against a credible baseline.",
    "status": "Framework",
    "sections": [
      [
        "Efficiency",
        [
          "Time saved",
          "Cost reduction",
          "Throughput"
        ]
      ],
      [
        "Quality",
        [
          "Accuracy",
          "Consistency",
          "Error reduction"
        ]
      ],
      [
        "User value",
        [
          "Adoption",
          "Satisfaction",
          "Task completion"
        ]
      ],
      [
        "Research value",
        [
          "Time to insight",
          "Experiment throughput",
          "Reproducibility",
          "Evidence quality"
        ]
      ],
      [
        "Business / organisational value",
        [
          "Revenue where applicable",
          "Avoided cost",
          "Capability development",
          "Strategic value"
        ]
      ],
      [
        "Risk",
        [
          "Incidents",
          "Human overrides",
          "Failure rate",
          "Compliance issues"
        ]
      ],
      [
        "Measurement",
        [
          "Include integration, operation, review and change-management costs.",
          "Record a baseline and evaluation period; distinguish measured outcomes from estimates."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "evaluation",
      "optimisation"
    ],
    "relatedEvaluations": [
      "quality-cost-latency",
      "research-evidence-extraction"
    ],
    "featured": false
  },
  {
    "id": "maturity",
    "slug": "maturity",
    "title": "AI Maturity",
    "summary": "Assess capabilities and gaps before expanding adoption.",
    "status": "Framework",
    "sections": [
      [
        "Practical maturity model",
        [
          "1. Exploring — individual experimentation.",
          "2. Piloting — small validated use cases.",
          "3. Operationalising — governance and production systems.",
          "4. Scaling — reusable infrastructure and broader adoption.",
          "5. Optimising — portfolio management, measurement and continuous improvement."
        ]
      ],
      [
        "How to use",
        [
          "This is a practical discussion model, not an official industry standard.",
          "Different teams may be at different levels. Identify the next concrete capability rather than chasing a single maturity score."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "production",
      "evaluation"
    ],
    "relatedEvaluations": [],
    "featured": false
  },
  {
    "id": "vendor-selection",
    "slug": "vendor-selection",
    "title": "Vendor & Model Selection",
    "summary": "Compare build, buy, partner and open-source options using task evidence.",
    "status": "Framework",
    "sections": [
      [
        "Build",
        [
          "Is the capability strategically differentiating?",
          "Do we have engineering capability?",
          "Is proprietary data central?"
        ]
      ],
      [
        "Buy",
        [
          "Is this a commodity capability?",
          "Can a trusted platform solve it faster?",
          "Is vendor risk acceptable?"
        ]
      ],
      [
        "Partner",
        [
          "Do we need specialist knowledge?",
          "Is co-development appropriate?",
          "Can capability be transferred internally?"
        ]
      ],
      [
        "Open source",
        [
          "Can we operate, secure and maintain the stack?",
          "Are licensing and model/data provenance suitable?",
          "Does control justify the operating burden?"
        ]
      ],
      [
        "Selection checks",
        [
          "Evaluate performance on the actual use case, not only vendor claims.",
          "Review data handling, export options, integration cost, support, version changes and exit plans."
        ]
      ]
    ],
    "relatedGuideTopics": [
      "foundations",
      "context-engineering",
      "evaluation"
    ],
    "relatedEvaluations": [
      "model-task-comparison",
      "retrieval-strategy"
    ],
    "featured": false
  }
]
export const strategyBySlug=slug=>strategyTopics.find(topic=>topic.slug===slug)
