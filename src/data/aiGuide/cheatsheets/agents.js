export default {
  "id": "agents",
  "title": "Agents",
  "summary": "Agents, tools, planning, memory, handoffs, subagents and long-running workflows.",
  "lastReviewed": "2026-09-13",
  "sources": [
    [
      "Agent design",
      "https://www.anthropic.com/research/building-effective-agents"
    ]
  ],
  "categories": [
    {
      "id": "agents-0",
      "title": "Agent Anatomy",
      "cards": [
        {
          "id": "agents-0-card",
          "title": "Bounded autonomy",
          "body": "A deterministic workflow follows predefined control logic. An agent has bounded autonomy in choosing actions to achieve an outcome. Combine a goal, model, tools, state, constraints and a stopping rule."
        }
      ]
    },
    {
      "id": "agents-1",
      "title": "Tools",
      "cards": [
        {
          "id": "agents-1-card",
          "title": "Explicit contracts",
          "body": "Describe tool inputs, outputs, permissions and failure modes. Validate arguments and returned data. Give the agent only the capabilities needed for its task."
        }
      ]
    },
    {
      "id": "agents-2",
      "title": "Planning",
      "cards": [
        {
          "id": "agents-2-card",
          "title": "Plan, then respond to evidence",
          "body": "Goal → Plan → Tool use → Observe result → Continue / finish. Plans guide action but should change when observed results invalidate assumptions."
        }
      ]
    },
    {
      "id": "agents-3",
      "title": "Memory",
      "cards": [
        {
          "id": "agents-3-card",
          "title": "Persistence is a design choice",
          "body": "Working state lasts for the current task; persistent memory stores selected information across tasks. Define retention, provenance, access and correction rules rather than saving every conversation."
        }
      ]
    },
    {
      "id": "agents-4",
      "title": "Context",
      "cards": [
        {
          "id": "agents-4-card",
          "title": "Supply relevant evidence",
          "body": "Provide current instructions, task state and selected evidence within the model context. Distinguish retrieved content from trusted instructions and preserve sources when summarising."
        }
      ]
    },
    {
      "id": "agents-5",
      "title": "Skills",
      "cards": [
        {
          "id": "agents-5-card",
          "title": "Reusable procedures",
          "body": "A skill packages task guidance and supporting resources. Loading a skill does not grant new permissions or guarantee tool availability; its instructions still need to fit the current task."
        }
      ]
    },
    {
      "id": "agents-6",
      "title": "Handoffs",
      "cards": [
        {
          "id": "agents-6-card",
          "title": "Transfer responsibility explicitly",
          "body": "Pass the goal, evidence, completed work, constraints and next decision. Identify who owns the result after a handoff and how success will be checked."
        }
      ]
    },
    {
      "id": "agents-7",
      "title": "Subagents",
      "cards": [
        {
          "id": "agents-7-card",
          "title": "Delegate bounded work",
          "body": "Use independent subtasks with explicit inputs and outputs. Coordination and conflicting edits add overhead; the coordinating agent must reconcile findings and verify the combined result."
        }
      ]
    },
    {
      "id": "agents-8",
      "title": "Human Approval",
      "cards": [
        {
          "id": "agents-8-card",
          "title": "Review concrete actions",
          "body": "Define checkpoints for consequential writes, external sends or irreversible changes. Show the destination, data and effect before approval; scope approval to that action."
        }
      ]
    },
    {
      "id": "agents-9",
      "title": "Long-running Tasks",
      "cards": [
        {
          "id": "agents-9-card",
          "title": "Recoverable progress",
          "body": "Record checkpoints and completed side effects. Use time, cost and retry budgets, cancellation and idempotent operations so interrupted work can resume safely."
        }
      ]
    },
    {
      "id": "agents-10",
      "title": "Sandboxing",
      "cards": [
        {
          "id": "agents-10-card",
          "title": "Enforce boundaries outside the model",
          "body": "Restrict filesystem, network and execution privileges with runtime controls. A prompt that asks the model to be careful is not an isolation boundary."
        }
      ]
    },
    {
      "id": "agents-11",
      "title": "Observability",
      "cards": [
        {
          "id": "agents-11-card",
          "title": "Trace decisions and outcomes",
          "body": "Record tool calls, errors, timing, costs and externally observable outcomes with sensitive data minimised. Traces help diagnose failures; they do not prove a model’s internal reasoning."
        }
      ]
    }
  ]
}
