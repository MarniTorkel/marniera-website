export default {
  "id": "coding-agents",
  "title": "Coding Agents",
  "summary": "Effective patterns for Codex, Claude Code and other coding-agent workflows.",
  "lastReviewed": "2026-09-13",
  "sources": [
    [
      "Codex best practices",
      "https://learn.chatgpt.com/guides/best-practices"
    ]
  ],
  "categories": [
    {
      "id": "coding-agents-0",
      "title": "Task Specification",
      "cards": [
        {
          "id": "coding-agents-0-card",
          "title": "Describe the desired behaviour",
          "body": "State the problem, relevant context, constraints and observable done criteria. Give a concrete example when it clarifies the expected change."
        }
      ]
    },
    {
      "id": "coding-agents-1",
      "title": "Repository Context",
      "cards": [
        {
          "id": "coding-agents-1-card",
          "title": "Inspect before editing",
          "body": "Read local instructions, related code and existing checks. Identify current changes and conventions before selecting an implementation."
        }
      ]
    },
    {
      "id": "coding-agents-2",
      "title": "Planning",
      "cards": [
        {
          "id": "coding-agents-2-card",
          "title": "Keep the plan proportional",
          "body": "For multi-step work, identify dependencies, uncertainties and verification. Update the plan when evidence changes; a small fix may need only a direct edit."
        }
      ]
    },
    {
      "id": "coding-agents-3",
      "title": "Implementation",
      "cards": [
        {
          "id": "coding-agents-3-card",
          "title": "Smallest coherent change",
          "body": "Work within the existing architecture, preserve unrelated behaviour and avoid unnecessary dependencies. Complete the requested behaviour rather than leaving a partial scaffold."
        }
      ]
    },
    {
      "id": "coding-agents-4",
      "title": "Testing",
      "cards": [
        {
          "id": "coding-agents-4-card",
          "title": "Verify acceptance criteria",
          "body": "Run relevant tests and the build. Add regression tests for meaningful failure modes; investigate failures and report what could not be checked."
        }
      ]
    },
    {
      "id": "coding-agents-5",
      "title": "Debugging",
      "cards": [
        {
          "id": "coding-agents-5-card",
          "title": "Reproduce and isolate",
          "body": "Capture the trigger and observed behaviour, form a hypothesis and test the smallest discriminating case. Fix the cause and verify the original reproduction."
        }
      ]
    },
    {
      "id": "coding-agents-6",
      "title": "Code Review",
      "cards": [
        {
          "id": "coding-agents-6-card",
          "title": "Review the diff",
          "body": "Check correctness, edge cases, compatibility and regressions. Separate material findings from preferences; verify that changes address the original request."
        }
      ]
    },
    {
      "id": "coding-agents-7",
      "title": "Security",
      "cards": [
        {
          "id": "coding-agents-7-card",
          "title": "Review trust boundaries",
          "body": "Check inputs, authorization and external data handling. Keep secrets out of source, logs and prompts, and inspect dependency changes."
        }
      ]
    },
    {
      "id": "coding-agents-8",
      "title": "Performance",
      "cards": [
        {
          "id": "coding-agents-8-card",
          "title": "Measure before optimising",
          "body": "Use representative workloads to identify slow paths, repeated work and unnecessary requests. Compare before/after latency and resource use."
        }
      ]
    },
    {
      "id": "coding-agents-9",
      "title": "Git Workflow",
      "cards": [
        {
          "id": "coding-agents-9-card",
          "title": "Preserve others’ work",
          "body": "Inspect the working tree, scope commits and avoid overwriting unrelated edits. Review staged changes and explain any required migration or rollout steps."
        }
      ]
    },
    {
      "id": "coding-agents-10",
      "title": "Acceptance Criteria",
      "cards": [
        {
          "id": "coding-agents-10-card",
          "title": "Define done",
          "body": "Confirm requested behaviour, relevant checks and known limitations. A successful build alone does not establish correct interactions or data handling."
        }
      ]
    }
  ]
}
