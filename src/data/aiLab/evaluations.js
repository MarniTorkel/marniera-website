export const evaluations = [
  {
    "id": "model-task-comparison",
    "slug": "model-task-comparison",
    "title": "Model Task Comparison",
    "category": "Models",
    "question": "How do different models compare on the same structured reasoning and research tasks?",
    "measures": [
      "Accuracy",
      "Instruction following",
      "Consistency",
      "Latency",
      "Cost"
    ],
    "status": "Planned",
    "relatedTopics": [
      "foundations",
      "evaluation"
    ],
    "summary": "Compare models against the same task requirements rather than headline claims.",
    "testData": "A fixed set of authored reasoning tasks and research questions with independently reviewed reference answers.",
    "method": "Pin model versions and settings; run each task repeatedly in random order; score blind to provider.",
    "systems": [
      "Candidate configurations to be selected and recorded before testing"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [],
    "relatedProjects": [],
    "year": 2026,
    "featured": false
  },
  {
    "id": "coding-agent-debugging",
    "slug": "coding-agent-debugging",
    "title": "Coding Agent Debugging Study",
    "category": "Coding Agents",
    "question": "How reliably can coding agents diagnose and repair the same software bug?",
    "measures": [
      "Correct diagnosis",
      "Tests passed",
      "Unnecessary changes",
      "Time to completion",
      "Regression rate"
    ],
    "status": "Planned",
    "relatedTopics": [
      "production",
      "evaluation"
    ],
    "summary": "Distinguish a correct repair from a plausible patch.",
    "testData": "Small reproducible repositories with seeded bugs and held-out regression tests.",
    "method": "Reset the repository before each run; apply the same task and time budget; inspect diffs and run hidden tests.",
    "systems": [
      "Codex (configuration to be selected)",
      "Claude Code (configuration to be selected)"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [],
    "relatedProjects": [],
    "year": 2026,
    "featured": false
  },
  {
    "id": "retrieval-strategy",
    "slug": "retrieval-strategy",
    "title": "Retrieval Strategy Comparison",
    "category": "Retrieval",
    "question": "How do semantic search, hybrid search and reranking compare when locating evidence in research documents?",
    "measures": [
      "Precision",
      "Recall",
      "Citation accuracy",
      "Latency"
    ],
    "status": "Designing",
    "relatedTopics": [
      "context-engineering",
      "evaluation"
    ],
    "summary": "Test whether retrieval methods locate evidence that actually supports an answer.",
    "testData": "A proposed document collection with labelled query-to-passage relevance; permissions and labels must be established before testing.",
    "method": "Keep the document corpus and queries fixed; compare retrieval methods at the same result count; independently review citation support.",
    "systems": [
      "Candidate configurations to be selected and recorded before testing"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [],
    "relatedProjects": [],
    "year": 2026,
    "featured": true
  },
  {
    "id": "agent-tool-reliability",
    "slug": "agent-tool-reliability",
    "title": "Agent Tool-Use Reliability",
    "category": "Agents",
    "question": "How reliably can an agent select and use the correct tool across a multi-step task?",
    "measures": [
      "Task completion",
      "Correct tool selection",
      "Tool-call errors",
      "Retries",
      "Human intervention"
    ],
    "status": "Planned",
    "relatedTopics": [
      "agents",
      "tools-actions"
    ],
    "summary": "Identify failures at action boundaries before deployment.",
    "testData": "Authored tasks in a sandbox, including missing inputs, denied permissions and simulated tool failures.",
    "method": "Use the same tool contracts and task budgets; log every action; inject controlled failures and check recovery.",
    "systems": [
      "Candidate configurations to be selected and recorded before testing"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [
      "workflow-agent"
    ],
    "relatedProjects": [],
    "year": 2026,
    "featured": false
  },
  {
    "id": "structured-output",
    "slug": "structured-output",
    "title": "Structured Output Reliability",
    "category": "Structured Output",
    "question": "How consistently do models produce valid schema-conforming output?",
    "measures": [
      "Schema validity",
      "Missing fields",
      "Incorrect types",
      "Retry rate"
    ],
    "status": "Planned",
    "relatedTopics": [
      "prompting",
      "evaluation"
    ],
    "summary": "Separate syntactic validity from semantic correctness.",
    "testData": "Authored extraction examples with nested schemas, nullable fields and deliberately incomplete inputs.",
    "method": "Validate outputs with a fixed schema and reference labels; report first-attempt success separately from success after retries.",
    "systems": [
      "Candidate configurations to be selected and recorded before testing"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [],
    "relatedProjects": [],
    "year": 2026,
    "featured": false
  },
  {
    "id": "research-evidence-extraction",
    "slug": "research-evidence-extraction",
    "title": "Research Evidence Extraction",
    "category": "Research AI",
    "question": "How accurately can AI systems identify claims, evidence and limitations from research papers?",
    "measures": [
      "Extraction accuracy",
      "Citation accuracy",
      "Unsupported claims",
      "Coverage"
    ],
    "status": "Planned",
    "relatedTopics": [
      "research",
      "evaluation"
    ],
    "summary": "Check whether research summaries preserve caveats and source support.",
    "testData": "A proposed set of accessible papers with human-reviewed claims and limitations; no benchmark has yet been assembled.",
    "method": "Use the same extraction instructions; have independent reviewers compare outputs to source passages; adjudicate disagreements.",
    "systems": [
      "Candidate configurations to be selected and recorded before testing"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [
      "research-agent"
    ],
    "relatedProjects": [
      "spatial-expression-benchmarking"
    ],
    "year": 2026,
    "featured": false
  },
  {
    "id": "quality-cost-latency",
    "slug": "quality-cost-latency",
    "title": "Quality / Cost / Latency Trade-off",
    "category": "Cost & Performance",
    "question": "When is a smaller or faster model sufficient compared with a more capable model?",
    "measures": [
      "Quality score",
      "Latency",
      "Token use",
      "Estimated cost"
    ],
    "status": "Planned",
    "relatedTopics": [
      "optimisation",
      "evaluation"
    ],
    "summary": "Look for an acceptable quality threshold before spending more.",
    "testData": "A representative task mix with explicit acceptance criteria and recorded input sizes.",
    "method": "Run a controlled task set across configurations; record quality, elapsed time and token counts; calculate costs using prices recorded at test time.",
    "systems": [
      "Candidate configurations to be selected and recorded before testing"
    ],
    "limitations": "This study has not produced results. Task selection, reviewer agreement, changing model versions and run-to-run variability will limit generalisation.",
    "reproducibility": "Planned: publish task definitions where permitted, prompts, versioned configurations, scoring code and run logs. No runnable evaluation package is available yet.",
    "relatedAgents": [],
    "relatedProjects": [],
    "year": 2026,
    "featured": false
  }
]
export const evaluationCategories = ["Models","Coding Agents","Agents","Retrieval","Research AI","Structured Output","Multimodal","Cost & Performance"]
export const evaluationBySlug = slug => evaluations.find(item=>item.slug===slug)
export const filterEvaluations = (category='All',query='') => evaluations.filter(item=>(category==='All'||item.category===category)&&[item.title,item.question,...item.measures].join(' ').toLowerCase().includes(query.trim().toLowerCase()))
