export default {
  "id": "security",
  "title": "Security & Governance",
  "summary": "Permissions, prompt injection, human approval, privacy, sandboxing and auditability.",
  "lastReviewed": "2026-09-13",
  "sources": [
    [
      "Agent safety",
      "https://developers.openai.com/api/docs/guides/agent-builder-safety"
    ],
    [
      "NIST AI RMF",
      "https://www.nist.gov/itl/ai-risk-management-framework"
    ]
  ],
  "categories": [
    {
      "id": "security-0",
      "title": "Prompt Injection",
      "cards": [
        {
          "id": "security-0-card",
          "title": "Untrusted content is data",
          "body": "Retrieved pages, files and tool outputs may contain malicious instructions. Separate them from trusted policy and constrain what tools can do even when a model follows a hostile instruction."
        }
      ]
    },
    {
      "id": "security-1",
      "title": "Data Privacy",
      "cards": [
        {
          "id": "security-1-card",
          "title": "Minimise exposure",
          "body": "Collect and send only necessary data to authorised destinations. Define retention, deletion, redaction and access rules for prompts, traces and stored memory."
        }
      ]
    },
    {
      "id": "security-2",
      "title": "Secrets",
      "cards": [
        {
          "id": "security-2-card",
          "title": "Keep credentials outside prompts",
          "body": "Use scoped secret storage and short-lived credentials where possible. Avoid logging secrets; rotate exposed credentials and investigate their use."
        }
      ]
    },
    {
      "id": "security-3",
      "title": "Permissions",
      "cards": [
        {
          "id": "security-3-card",
          "title": "Review the action surface",
          "body": "What can it read? What can it write? What can it send? What can it delete? Who approves consequential actions? How is activity logged?"
        }
      ]
    },
    {
      "id": "security-4",
      "title": "Tool Safety",
      "cards": [
        {
          "id": "security-4-card",
          "title": "Enforce contracts",
          "body": "Validate inputs and destinations, restrict capabilities and handle partial failures. Use idempotency or reconciliation to prevent retries from repeating side effects."
        }
      ]
    },
    {
      "id": "security-5",
      "title": "Human Approval",
      "cards": [
        {
          "id": "security-5-card",
          "title": "Meaningful oversight",
          "body": "Show the action, destination, relevant data and consequences before approval. Ensure the executed action matches what was reviewed and permit cancellation."
        }
      ]
    },
    {
      "id": "security-6",
      "title": "Sandboxing",
      "cards": [
        {
          "id": "security-6-card",
          "title": "Runtime containment",
          "body": "Limit filesystem, network and process access. A sandbox reduces impact but does not establish that an allowed action is appropriate."
        }
      ]
    },
    {
      "id": "security-7",
      "title": "Auditability",
      "cards": [
        {
          "id": "security-7-card",
          "title": "Record enough to investigate",
          "body": "Log authorised actions, versions and outcomes with access controls and data minimisation. Make records useful for reconstructing consequential decisions."
        }
      ]
    },
    {
      "id": "security-8",
      "title": "Model Risk",
      "cards": [
        {
          "id": "security-8-card",
          "title": "Assess the deployed system",
          "body": "Evaluate failure modes, uncertainty and affected groups in the intended context. Reassess after model, data or workflow changes."
        }
      ]
    },
    {
      "id": "security-9",
      "title": "Vendor Risk",
      "cards": [
        {
          "id": "security-9-card",
          "title": "Review service boundaries",
          "body": "Check data handling, access, retention, reliability, exit options and contractual requirements. Product claims do not replace your own evaluation."
        }
      ]
    },
    {
      "id": "security-10",
      "title": "Responsible AI",
      "cards": [
        {
          "id": "security-10-card",
          "title": "Assign accountability",
          "body": "Document intended use, affected people, limitations and escalation paths. Review fairness, accessibility and human oversight with relevant stakeholders."
        }
      ]
    },
    {
      "id": "security-11",
      "title": "Incident Response",
      "cards": [
        {
          "id": "security-11-card",
          "title": "Contain and learn",
          "body": "Pause affected capabilities, protect evidence, assess exposure and notify responsible owners. Remediate the cause, rotate compromised secrets and add regression checks before restoring service."
        }
      ]
    }
  ]
}
