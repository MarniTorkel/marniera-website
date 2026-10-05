export default {
  "id": "evaluations",
  "title": "Evals & Reliability",
  "summary": "Evaluation design, graders, test datasets, regression checks, tracing and reliability metrics.",
  "lastReviewed": "2026-09-13",
  "sources": [
    [
      "Evaluation best practices",
      "https://developers.openai.com/api/docs/guides/evaluation-best-practices"
    ]
  ],
  "categories": [
    {
      "id": "evaluations-0",
      "title": "Evaluation Dataset",
      "cards": [
        {
          "id": "evaluations-0-card",
          "title": "Representative held-out cases",
          "body": "Build examples from expected usage, difficult edge cases and known failures. Separate tuning from held-out evaluation, version the dataset and review coverage across user groups."
        }
      ]
    },
    {
      "id": "evaluations-1",
      "title": "Rubrics",
      "cards": [
        {
          "id": "evaluations-1-card",
          "title": "Observable criteria",
          "body": "Define what success, partial success and failure mean with examples. Score correctness, evidence, instruction adherence and task-specific risks separately where useful."
        }
      ]
    },
    {
      "id": "evaluations-2",
      "title": "Deterministic Checks",
      "cards": [
        {
          "id": "evaluations-2-card",
          "title": "Test exact requirements",
          "body": "Use code for schema validity, required fields, calculations and forbidden outputs. Passing a schema check does not establish semantic correctness."
        }
      ]
    },
    {
      "id": "evaluations-3",
      "title": "LLM-as-Judge",
      "cards": [
        {
          "id": "evaluations-3-card",
          "title": "Calibrate the grader",
          "body": "Compare grader scores with human labels. Use clear rubrics and control order, verbosity and style biases; audit disagreements and model-version changes."
        }
      ]
    },
    {
      "id": "evaluations-4",
      "title": "Human Evaluation",
      "cards": [
        {
          "id": "evaluations-4-card",
          "title": "Expert judgement",
          "body": "Use trained reviewers for ambiguous or consequential cases. Measure disagreement, adjudicate examples and protect private data used in review."
        }
      ]
    },
    {
      "id": "evaluations-5",
      "title": "Agent Evaluation",
      "cards": [
        {
          "id": "evaluations-5-card",
          "title": "Measure completed outcomes",
          "body": "Track task completion, human intervention and cost per successful task. Inspect failures across full trajectories rather than evaluating only the final message."
        }
      ]
    },
    {
      "id": "evaluations-6",
      "title": "Tool-use Evaluation",
      "cards": [
        {
          "id": "evaluations-6-card",
          "title": "Correct tool, correct action",
          "body": "Check tool selection, argument validity, authorization, ordering and recovery from errors. Include tests for duplicate side effects and unsafe actions."
        }
      ]
    },
    {
      "id": "evaluations-7",
      "title": "Retrieval Evaluation",
      "cards": [
        {
          "id": "evaluations-7-card",
          "title": "Relevant evidence",
          "body": "Track precision@k and recall@k against labelled relevant documents. Test access-control filtering and answer grounding separately from retrieval quality."
        }
      ]
    },
    {
      "id": "evaluations-8",
      "title": "Regression Testing",
      "cards": [
        {
          "id": "evaluations-8-card",
          "title": "Compare changes fairly",
          "body": "Run a stable case set after changing models, prompts, retrieval or tools. Report uncertainty and investigate changes in important subgroups, not only the aggregate score."
        }
      ]
    },
    {
      "id": "evaluations-9",
      "title": "Tracing",
      "cards": [
        {
          "id": "evaluations-9-card",
          "title": "Find the failure stage",
          "body": "Capture tool calls, retrieval evidence, errors and timing with redaction. Use traces to locate failures in retrieval, generation, tool execution or orchestration."
        }
      ]
    },
    {
      "id": "evaluations-10",
      "title": "Latency",
      "cards": [
        {
          "id": "evaluations-10-card",
          "title": "Measure user-visible delay",
          "body": "Track end-to-end and stage-level latency, including tail percentiles. Separate time to first useful output from total completion time."
        }
      ]
    },
    {
      "id": "evaluations-11",
      "title": "Cost",
      "cards": [
        {
          "id": "evaluations-11-card",
          "title": "Count successful outcomes",
          "body": "Include model, retrieval, tool and retry costs. Compare cost per successful task as well as cost per request, using current provider pricing."
        }
      ]
    },
    {
      "id": "evaluations-12",
      "title": "Failure Analysis",
      "cards": [
        {
          "id": "evaluations-12-card",
          "title": "Classify and prioritise",
          "body": "For classification, inspect precision, recall, F1 and confusion patterns. For other tasks, group failures by cause, severity and frequency, then add regression cases."
        }
      ]
    }
  ]
}
