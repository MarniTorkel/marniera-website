// Personal natural-language patterns; none are official provider commands.
export const categories = ["Quick Output","Role & Audience","Context & Clarification","Think & Challenge","Analyse & Decide","Output Control","Evidence & Verification","Coding","Agents & Workflows","Learning","Prompt Recipes"]
export const cheatsheet = [
  {
    "id": "eli10",
    "shortcut": "ELI10",
    "title": "Eli10",
    "category": "Quick Output",
    "description": "Simplify a difficult idea without specialist knowledge.",
    "prompt": "Explain this so that a smart 10-year-old could understand it.",
    "tags": [
      "Everyday",
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "briefly",
    "shortcut": "BRIEFLY",
    "title": "Briefly",
    "category": "Quick Output",
    "description": "Keep essential information and remove excess explanation.",
    "prompt": "Give me the shortest useful answer.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "exec-summary",
    "shortcut": "EXEC SUMMARY",
    "title": "Exec summary",
    "category": "Quick Output",
    "description": "Bring the decision, evidence and next action together.",
    "prompt": "Give me an executive summary with the decision, key evidence and next action.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "action-list",
    "shortcut": "ACTION LIST",
    "title": "Action list",
    "category": "Quick Output",
    "description": "Convert discussion into concrete next steps.",
    "prompt": "Turn this into a concise list of concrete next actions.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "tl-dr",
    "shortcut": "TL;DR",
    "title": "Tl;dr",
    "category": "Quick Output",
    "description": "Condense material into memorable points.",
    "prompt": "Summarise this into the few points I need to remember.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "decision-brief",
    "shortcut": "DECISION BRIEF",
    "title": "Decision brief",
    "category": "Quick Output",
    "description": "Focus a summary on the decision to be made.",
    "prompt": "Summarise this for someone who needs to make a decision.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "key-takeaways",
    "shortcut": "KEY TAKEAWAYS",
    "title": "Key takeaways",
    "category": "Quick Output",
    "description": "Identify the five takeaways with the greatest relevance.",
    "prompt": "Give me the 5 most important takeaways and why each matters.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "role",
    "shortcut": "ROLE",
    "title": "Role",
    "category": "Role & Audience",
    "description": "Set an appropriate professional perspective.",
    "prompt": "Respond from the perspective of an experienced [ROLE].",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false,
    "example": "Respond from the perspective of an experienced biostatistician."
  },
  {
    "id": "audience",
    "shortcut": "AUDIENCE",
    "title": "Audience",
    "category": "Role & Audience",
    "description": "Match technical detail to the intended reader.",
    "prompt": "Write this for [AUDIENCE] with the appropriate level of technical detail.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false,
    "example": "Write this for clinical researchers who understand statistics but not ML."
  },
  {
    "id": "tone",
    "shortcut": "TONE",
    "title": "Tone",
    "category": "Role & Audience",
    "description": "Choose the tone of the response.",
    "prompt": "Use a [professional / concise / friendly / technical] tone.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "domain-lens",
    "shortcut": "DOMAIN LENS",
    "title": "Domain lens",
    "category": "Role & Audience",
    "description": "Examine a problem through a particular discipline.",
    "prompt": "Analyse this primarily from a [scientific / engineering / UX / business] perspective.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "stakeholder-view",
    "shortcut": "STAKEHOLDER VIEW",
    "title": "Stakeholder view",
    "category": "Role & Audience",
    "description": "Consider the people affected by a decision.",
    "prompt": "Explain how this issue looks from the perspectives of the main stakeholders.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "clarify-first",
    "shortcut": "CLARIFY FIRST",
    "title": "Clarify first",
    "category": "Context & Clarification",
    "description": "Ask useful questions before committing to an answer.",
    "prompt": "Before answering, ask the questions that would materially improve your answer.",
    "tags": [
      "Everyday",
      "Research",
      "Coding"
    ],
    "officialCommand": false,
    "featured": true
  },
  {
    "id": "one-question-at-a-time",
    "shortcut": "ONE QUESTION AT A TIME",
    "title": "One question at a time",
    "category": "Context & Clarification",
    "description": "Resolve missing information one question at a time.",
    "prompt": "Ask me the most important clarifying question first. Continue one question at a time until you have enough information.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "great-looks-like",
    "shortcut": "GREAT LOOKS LIKE",
    "title": "Great looks like",
    "category": "Context & Clarification",
    "description": "Supply a concrete quality reference.",
    "prompt": "Here is an example of what good output looks like: [EXAMPLE]. Use it as a quality reference without copying it unnecessarily.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "context-check",
    "shortcut": "CONTEXT CHECK",
    "title": "Context check",
    "category": "Context & Clarification",
    "description": "Identify missing context that could affect the result.",
    "prompt": "Before answering, identify any critical context that appears to be missing.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "assumption-check",
    "shortcut": "ASSUMPTION CHECK",
    "title": "Assumption check",
    "category": "Context & Clarification",
    "description": "Surface assumptions that could change the answer.",
    "prompt": "List the assumptions you need to make, and ask me about any that could materially change the answer.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "first-principles",
    "shortcut": "FIRST PRINCIPLES",
    "title": "First principles",
    "category": "Think & Challenge",
    "description": "Rebuild an approach from basic facts and constraints.",
    "prompt": "Break the problem into fundamental facts and constraints, then rebuild the solution from those.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": true
  },
  {
    "id": "red-team",
    "shortcut": "RED TEAM",
    "title": "Red team",
    "category": "Think & Challenge",
    "description": "Challenge a proposal with failure modes and objections.",
    "prompt": "Challenge this proposal. Find weaknesses, failure modes and counterarguments.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "blind-spots",
    "shortcut": "BLIND SPOTS",
    "title": "Blind spots",
    "category": "Think & Challenge",
    "description": "Find omissions and weak assumptions.",
    "prompt": "Identify likely blind spots, weak assumptions and information I may be missing.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": true
  },
  {
    "id": "truth-check",
    "shortcut": "TRUTH CHECK",
    "title": "Truth check",
    "category": "Think & Challenge",
    "description": "Test whether the premise is actually supported.",
    "prompt": "Do not simply agree with my premise. Tell me where the evidence or logic does not support it.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "socratic",
    "shortcut": "SOCRATIC",
    "title": "Socratic",
    "category": "Think & Challenge",
    "description": "Explore a topic through focused questions.",
    "prompt": "Help me reason through this by asking one useful question at a time.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "reframe",
    "shortcut": "REFRAME",
    "title": "Reframe",
    "category": "Think & Challenge",
    "description": "Find alternative ways to frame the same problem.",
    "prompt": "Reframe the problem in three substantially different ways.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "counterfactual",
    "shortcut": "COUNTERFACTUAL",
    "title": "Counterfactual",
    "category": "Think & Challenge",
    "description": "Test what would support the opposite conclusion.",
    "prompt": "What would have to be true for the opposite conclusion to be correct?",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "reasoning-summary",
    "shortcut": "REASONING SUMMARY",
    "title": "Reasoning summary",
    "category": "Think & Challenge",
    "description": "Request a concise, assessable reasoning summary.",
    "prompt": "Give me a concise reasoning summary including assumptions, evidence, trade-offs and conclusion.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "reproducible-steps",
    "shortcut": "REPRODUCIBLE STEPS",
    "title": "Reproducible steps",
    "category": "Think & Challenge",
    "description": "Make calculations and solution steps independently checkable.",
    "prompt": "Show the reproducible calculation or solution steps needed to verify the answer.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "compare",
    "shortcut": "COMPARE",
    "title": "Compare",
    "category": "Analyse & Decide",
    "description": "Evaluate options consistently.",
    "prompt": "Compare these options using the same criteria and explain the important trade-offs.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": true
  },
  {
    "id": "80-20",
    "shortcut": "80/20",
    "title": "80/20",
    "category": "Analyse & Decide",
    "description": "Identify the few actions with the greatest likely impact.",
    "prompt": "Identify the small number of actions likely to produce most of the result.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": true
  },
  {
    "id": "swot",
    "shortcut": "SWOT",
    "title": "Swot",
    "category": "Analyse & Decide",
    "description": "Organise internal and external strategic factors.",
    "prompt": "Analyse strengths, weaknesses, opportunities and threats.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "trade-offs",
    "shortcut": "TRADE-OFFS",
    "title": "Trade-offs",
    "category": "Analyse & Decide",
    "description": "Make gains and sacrifices explicit.",
    "prompt": "Identify what I gain and give up with each option.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "failure-points",
    "shortcut": "FAILURE POINTS",
    "title": "Failure points",
    "category": "Analyse & Decide",
    "description": "Anticipate likely breakdowns in a plan.",
    "prompt": "Identify the most likely ways this plan could fail.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "multi-perspective",
    "shortcut": "MULTI-PERSPECTIVE",
    "title": "Multi-perspective",
    "category": "Analyse & Decide",
    "description": "Compare technical, user, operational and strategic concerns.",
    "prompt": "Analyse this from technical, user, operational and strategic perspectives.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "decision-matrix",
    "shortcut": "DECISION MATRIX",
    "title": "Decision matrix",
    "category": "Analyse & Decide",
    "description": "Make decision criteria and weights visible.",
    "prompt": "Create a weighted decision matrix using appropriate criteria.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "opportunity-cost",
    "shortcut": "OPPORTUNITY COST",
    "title": "Opportunity cost",
    "category": "Analyse & Decide",
    "description": "Consider what another choice would make possible.",
    "prompt": "What am I giving up by choosing this option?",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "incentives",
    "shortcut": "INCENTIVES",
    "title": "Incentives",
    "category": "Analyse & Decide",
    "description": "Examine the motivations behind actions.",
    "prompt": "Map the incentives of each relevant person, team or system.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "pre-mortem",
    "shortcut": "PRE-MORTEM",
    "title": "Pre-mortem",
    "category": "Analyse & Decide",
    "description": "Work backwards from a hypothetical project failure.",
    "prompt": "Assume this project failed six months from now. Identify the most plausible reasons why.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "featured": false,
    "example": "Assume this research software project failed six months from now. Examine data access, evaluation, maintenance and adoption risks."
  },
  {
    "id": "format",
    "shortcut": "FORMAT",
    "title": "Format",
    "category": "Output Control",
    "description": "Choose the structure of the answer.",
    "prompt": "Return the answer as [table / checklist / JSON / Markdown / schema].",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "schema",
    "shortcut": "SCHEMA",
    "title": "Schema",
    "category": "Output Control",
    "description": "Specify the required data structure.",
    "prompt": "Follow exactly this output schema: [SCHEMA].",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "length",
    "shortcut": "LENGTH",
    "title": "Length",
    "category": "Output Control",
    "description": "Set a word budget.",
    "prompt": "Keep the response below [N] words.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "boundaries",
    "shortcut": "BOUNDARIES",
    "title": "Boundaries",
    "category": "Output Control",
    "description": "State requirements and exclusions.",
    "prompt": "Do not [X]. Include [Y].",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "begin-end",
    "shortcut": "BEGIN / END",
    "title": "Begin / end",
    "category": "Output Control",
    "description": "Control the opening and closing.",
    "prompt": "Begin with [X] and finish with [Y].",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "style-match",
    "shortcut": "STYLE MATCH",
    "title": "Style match",
    "category": "Output Control",
    "description": "Use an example to guide a rewrite.",
    "prompt": "Rewrite this using the style demonstrated in this example: [EXAMPLE].",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "no-filler",
    "shortcut": "NO FILLER",
    "title": "No filler",
    "category": "Output Control",
    "description": "Remove repetition and generic text.",
    "prompt": "Remove filler, repetition and generic introductory text.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "priority-order",
    "shortcut": "PRIORITY ORDER",
    "title": "Priority order",
    "category": "Output Control",
    "description": "Put the most important results first.",
    "prompt": "Order the results from highest to lowest priority.",
    "tags": [
      "Everyday"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "sources",
    "shortcut": "SOURCES",
    "title": "Sources",
    "category": "Evidence & Verification",
    "description": "Request support for factual claims.",
    "prompt": "Support factual claims with reliable sources where possible.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "assumptions",
    "shortcut": "ASSUMPTIONS",
    "title": "Assumptions",
    "category": "Evidence & Verification",
    "description": "Separate facts from interpretations.",
    "prompt": "Clearly distinguish facts, assumptions and interpretations.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "uncertainty",
    "shortcut": "UNCERTAINTY",
    "title": "Uncertainty",
    "category": "Evidence & Verification",
    "description": "Make gaps in knowledge explicit.",
    "prompt": "Tell me what is known, uncertain and unknown.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "verify",
    "shortcut": "VERIFY",
    "title": "Verify",
    "category": "Evidence & Verification",
    "description": "Check material claims before completion.",
    "prompt": "Verify the important claims before finalising the answer.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": true
  },
  {
    "id": "source-quality",
    "shortcut": "SOURCE QUALITY",
    "title": "Source quality",
    "category": "Evidence & Verification",
    "description": "Prefer primary and authoritative evidence.",
    "prompt": "Prioritise primary research, official documentation and authoritative sources.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "date-check",
    "shortcut": "DATE CHECK",
    "title": "Date check",
    "category": "Evidence & Verification",
    "description": "Check the currency of information.",
    "prompt": "Check whether the information is current and state the relevant date.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "evidence-table",
    "shortcut": "EVIDENCE TABLE",
    "title": "Evidence table",
    "category": "Evidence & Verification",
    "description": "Connect each claim to its evidence and confidence.",
    "prompt": "Create a table with claim, supporting evidence, source and confidence.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "contradictions",
    "shortcut": "CONTRADICTIONS",
    "title": "Contradictions",
    "category": "Evidence & Verification",
    "description": "Look for evidence against the conclusion.",
    "prompt": "Look for evidence that contradicts the current conclusion.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "quality-check",
    "shortcut": "QUALITY CHECK",
    "title": "Quality check",
    "category": "Evidence & Verification",
    "description": "Review the answer against the task.",
    "prompt": "Review your answer against the original requirements and correct material problems before returning it.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "acceptance-test",
    "shortcut": "ACCEPTANCE TEST",
    "title": "Acceptance test",
    "category": "Evidence & Verification",
    "description": "Test results against explicit criteria.",
    "prompt": "Check the result against these acceptance criteria: [CRITERIA].",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "implement",
    "shortcut": "IMPLEMENT",
    "title": "Implement",
    "category": "Coding",
    "description": "Inspect before making a focused code change.",
    "prompt": "Inspect the existing code first. Implement the requested change while preserving unrelated behaviour.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "patch-only",
    "shortcut": "PATCH ONLY",
    "title": "Patch only",
    "category": "Coding",
    "description": "Request a minimal code patch.",
    "prompt": "Return only the minimal code changes required.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "explain-first",
    "shortcut": "EXPLAIN FIRST",
    "title": "Explain first",
    "category": "Coding",
    "description": "Understand the approach before editing.",
    "prompt": "Briefly explain the implementation approach before modifying the code.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "debug",
    "shortcut": "DEBUG",
    "title": "Debug",
    "category": "Coding",
    "description": "Find the underlying cause of a code failure.",
    "prompt": "Identify the root cause before changing code. Do not patch symptoms.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false,
    "example": "Find why this code returns duplicate records. Trace the failing input before proposing a fix."
  },
  {
    "id": "test-first",
    "shortcut": "TEST FIRST",
    "title": "Test first",
    "category": "Coding",
    "description": "Define expected behaviour before implementation.",
    "prompt": "Define the expected behaviour and relevant tests before implementing the change.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "regression-check",
    "shortcut": "REGRESSION CHECK",
    "title": "Regression check",
    "category": "Coding",
    "description": "Look for unintended changes in existing code.",
    "prompt": "After the change, identify existing behaviour that could have been broken.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "security-review",
    "shortcut": "SECURITY REVIEW",
    "title": "Security review",
    "category": "Coding",
    "description": "Review security boundaries and sensitive data handling.",
    "prompt": "Review authentication, permissions, user input, secrets and data exposure.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "performance-pass",
    "shortcut": "PERFORMANCE PASS",
    "title": "Performance pass",
    "category": "Coding",
    "description": "Identify avoidable latency and resource costs.",
    "prompt": "Review latency, unnecessary requests, rendering, caching, memory and computational cost.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "accessibility",
    "shortcut": "ACCESSIBILITY",
    "title": "Accessibility",
    "category": "Coding",
    "description": "Check inclusive interaction and readable interfaces.",
    "prompt": "Review keyboard navigation, semantic HTML, contrast, focus states and screen-reader behaviour.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "type-safety",
    "shortcut": "TYPE SAFETY",
    "title": "Type safety",
    "category": "Coding",
    "description": "Protect useful type guarantees.",
    "prompt": "Preserve or improve type safety. Avoid unnecessary any types.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "api-contract",
    "shortcut": "API CONTRACT",
    "title": "Api contract",
    "category": "Coding",
    "description": "Agree on endpoint inputs, outputs and errors.",
    "prompt": "Define the request, response, validation and error contract before implementing the endpoint.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "database-change",
    "shortcut": "DATABASE CHANGE",
    "title": "Database change",
    "category": "Coding",
    "description": "Plan safe schema evolution and rollback.",
    "prompt": "Consider schema migration, backward compatibility, constraints and rollback.",
    "tags": [
      "Coding",
      "Code"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "do-not-rebuild",
    "shortcut": "DO NOT REBUILD",
    "title": "Do not rebuild",
    "category": "Coding",
    "description": "Preserve the existing architecture.",
    "prompt": "Work with the existing architecture. Do not rewrite unrelated components.",
    "tags": [
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "tools",
    "shortcut": "TOOLS",
    "title": "Tools",
    "category": "Agents & Workflows",
    "description": "Limit the available tools.",
    "prompt": "You may use only these tools: [TOOLS].",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "guardrails",
    "shortcut": "GUARDRAILS",
    "title": "Guardrails",
    "category": "Agents & Workflows",
    "description": "Define actions that require approval.",
    "prompt": "Ask for approval before performing [external send / destructive write / financial action / deployment].",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "plan",
    "shortcut": "PLAN",
    "title": "Plan",
    "category": "Agents & Workflows",
    "description": "Plan briefly and then execute.",
    "prompt": "Create a short execution plan, then carry it out.",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "handoff",
    "shortcut": "HANDOFF",
    "title": "Handoff",
    "category": "Agents & Workflows",
    "description": "Organise work into specialist stages.",
    "prompt": "Use these specialist stages: researcher → planner → implementer → reviewer.",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "memory-context",
    "shortcut": "MEMORY / CONTEXT",
    "title": "Memory / context",
    "category": "Agents & Workflows",
    "description": "Use supplied context; persistent memory depends on the platform and its settings.",
    "prompt": "Use the supplied project conventions and persistent context where relevant.",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "stop-condition",
    "shortcut": "STOP CONDITION",
    "title": "Stop condition",
    "category": "Agents & Workflows",
    "description": "Define when execution should end.",
    "prompt": "Continue until [OUTCOME] is achieved or until [STOP CONDITION].",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "verify-before-done",
    "shortcut": "VERIFY BEFORE DONE",
    "title": "Verify before done",
    "category": "Agents & Workflows",
    "description": "Require evidence of completion.",
    "prompt": "Do not mark the task complete until the acceptance criteria have been checked.",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "retry-with-limit",
    "shortcut": "RETRY WITH LIMIT",
    "title": "Retry with limit",
    "category": "Agents & Workflows",
    "description": "Bound retries and report unresolved failures.",
    "prompt": "If verification fails, diagnose and retry up to [N] times. If still failing, stop and report the unresolved issue.",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "human-checkpoint",
    "shortcut": "HUMAN CHECKPOINT",
    "title": "Human checkpoint",
    "category": "Agents & Workflows",
    "description": "Place a human decision before consequential action.",
    "prompt": "Pause for user approval before [specified consequential action].",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "80-20-learning",
    "shortcut": "80/20 LEARNING",
    "title": "80/20 learning",
    "category": "Learning",
    "description": "Prioritise practical foundations.",
    "prompt": "Teach me the 20% of this subject that provides 80% of the practical understanding.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "quiz-me",
    "shortcut": "QUIZ ME",
    "title": "Quiz me",
    "category": "Learning",
    "description": "Use adaptive questions to practise recall.",
    "prompt": "Quiz me one question at a time and adapt the next question to my answer.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "mental-models",
    "shortcut": "MENTAL MODELS",
    "title": "Mental models",
    "category": "Learning",
    "description": "Build understanding through useful models.",
    "prompt": "Give me three useful mental models for understanding this topic.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "common-mistakes",
    "shortcut": "COMMON MISTAKES",
    "title": "Common mistakes",
    "category": "Learning",
    "description": "Anticipate beginner errors.",
    "prompt": "Show the most common mistakes beginners make and how to avoid them.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "concept-map",
    "shortcut": "CONCEPT MAP",
    "title": "Concept map",
    "category": "Learning",
    "description": "Connect concepts in a structured map.",
    "prompt": "Create a structured concept map showing how the main ideas connect.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "teach-test",
    "shortcut": "TEACH → TEST",
    "title": "Teach → test",
    "category": "Learning",
    "description": "Alternate explanation, practice and correction.",
    "prompt": "Explain one concept, test me on it, correct me, then continue.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "learning-plan",
    "shortcut": "LEARNING PLAN",
    "title": "Learning plan",
    "category": "Learning",
    "description": "Schedule practice and spaced review.",
    "prompt": "Create a seven-day learning plan with practice and spaced review.",
    "tags": [
      "Learning"
    ],
    "officialCommand": false,
    "featured": false
  },
  {
    "id": "tcca",
    "shortcut": "TCCA",
    "title": "Tcca",
    "category": "Context & Clarification",
    "description": "Frame the task, context and constraints, then invite important questions.",
    "prompt": "TASK:\n[What needs to be done]\n\nCONTEXT:\n[Relevant background, data and goals]\n\nCONSTRAINTS:\n[Limits, requirements and things to avoid]\n\nASK:\nAsk me clarifying questions if important information is missing.",
    "tags": [
      "Everyday",
      "Research",
      "Coding"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "goal",
    "shortcut": "GOAL",
    "title": "Goal",
    "category": "Agents & Workflows",
    "description": "Define an observable outcome and what completion means.",
    "prompt": "GOAL:\n[Concrete outcome]\n\nDONE WHEN:\n[Observable completion criteria]",
    "tags": [
      "Agent"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "research-question",
    "shortcut": "RESEARCH QUESTION",
    "title": "Research question",
    "category": "Prompt Recipes",
    "description": "A complete starting template for research question.",
    "prompt": "ROLE:\nYou are assisting with a research problem in [DOMAIN].\n\nGOAL:\nHelp answer [QUESTION].\n\nCONTEXT:\n[BACKGROUND]\n\nEVIDENCE:\nPrioritise peer-reviewed research, official documentation and primary sources.\n\nOUTPUT:\nSummarise the evidence, disagreements, limitations and practical implications.\n\nQUALITY:\nSeparate evidence from inference and identify important uncertainty.",
    "tags": [
      "Research"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "coding-task",
    "shortcut": "CODING TASK",
    "title": "Coding task",
    "category": "Prompt Recipes",
    "description": "A complete starting template for coding task.",
    "prompt": "GOAL:\nImplement [CHANGE].\n\nCONTEXT:\n[APP / STACK / EXISTING ARCHITECTURE]\n\nCONSTRAINTS:\n- inspect existing code first\n- preserve unrelated behaviour\n- avoid unnecessary dependencies\n- maintain existing style\n\nDONE WHEN:\n- requested behaviour works\n- tests/build pass\n- no obvious regressions remain",
    "tags": [
      "Coding"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "data-analysis",
    "shortcut": "DATA ANALYSIS",
    "title": "Data analysis",
    "category": "Prompt Recipes",
    "description": "A complete starting template for data analysis.",
    "prompt": "GOAL:\nAnswer [QUESTION] using [DATA].\n\nCHECK:\n- data types\n- missing values\n- duplicates\n- outliers\n- assumptions\n\nANALYSE:\nUse an appropriate method and explain why.\n\nOUTPUT:\nReturn the result, interpretation, limitations and any recommended\nfollow-up analysis.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "decision",
    "shortcut": "DECISION",
    "title": "Decision",
    "category": "Prompt Recipes",
    "description": "A complete starting template for decision.",
    "prompt": "DECISION:\n[DECISION]\n\nOPTIONS:\n[OPTIONS]\n\nCONSTRAINTS:\n[CONSTRAINTS]\n\nCOMPARE:\nEvaluate benefits, costs, risks, reversibility and opportunity cost.\n\nOUTPUT:\nRecommend one option, explain why, and identify what evidence could\nchange the recommendation.",
    "tags": [
      "Analysis"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "agent-task",
    "shortcut": "AGENT TASK",
    "title": "Agent task",
    "category": "Prompt Recipes",
    "description": "A complete starting template for agent task.",
    "prompt": "GOAL:\n[FINISHED OUTCOME]\n\nCONTEXT:\n[PROJECT INFORMATION]\n\nTOOLS:\n[ALLOWED TOOLS]\n\nGUARDRAILS:\n[ACTIONS REQUIRING APPROVAL]\n\nDONE WHEN:\n[MEASURABLE ACCEPTANCE CRITERIA]\n\nVERIFICATION:\n[HOW TO VERIFY THE RESULT]",
    "tags": [
      "Agent",
      "Coding"
    ],
    "officialCommand": false,
    "template": true
  },
  {
    "id": "depth",
    "shortcut": "DEPTH",
    "title": "Depth",
    "category": "Output Control",
    "description": "Choose whether you need a scan, explanation, implementation or audit.",
    "prompt": "Treat this task as a [scan / explanation / implementation / audit]. Match the detail and checks to that level.",
    "tags": [
      "Everyday",
      "Coding"
    ],
    "officialCommand": false
  },
  {
    "id": "typed-output",
    "shortcut": "TYPED OUTPUT",
    "title": "Typed output",
    "category": "Coding",
    "description": "Validate structured responses against an explicit type contract.",
    "prompt": "Define a Zod, Pydantic or JSON Schema contract for [OUTPUT]. Include validation and useful error handling.",
    "tags": [
      "Coding",
      "Agent"
    ],
    "officialCommand": false
  },
  {
    "id": "bias-check",
    "shortcut": "BIAS CHECK",
    "title": "Bias check",
    "category": "Think & Challenge",
    "description": "Check for selective evidence and one-sided assumptions.",
    "prompt": "Review this answer for biased assumptions, missing perspectives and selective evidence. Explain any material corrections.",
    "tags": [
      "Research",
      "Analysis"
    ],
    "officialCommand": false
  },
  {
    "id": "metrics",
    "shortcut": "METRICS",
    "title": "Metrics",
    "category": "Analyse & Decide",
    "description": "Make success measurable.",
    "prompt": "Propose measurable indicators for [GOAL], including how to collect and interpret each measure.",
    "tags": [
      "Analysis",
      "Research"
    ],
    "officialCommand": false
  },
  {
    "id": "project-prompt",
    "shortcut": "PROJECT PROMPT",
    "title": "Project prompt",
    "category": "Prompt Recipes",
    "description": "A compact template retained from the original reference.",
    "prompt": "ROLE: You are a [specific expert].\nGOAL: [One concrete outcome].\nCONTEXT: [Audience, domain, constraints, source material].\nTOOLS: [Allowed tools and approval rules].\nOUTPUT: [Format, schema, or acceptance criteria].\nQUALITY BAR: Cite sources, state assumptions, verify before final.",
    "tags": [
      "Research",
      "Coding",
      "Agent"
    ],
    "officialCommand": false,
    "template": true
  }
]
export function filterCheats(items,category='All',query='') {const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);return items.filter(item=>(category==='All'||item.category===category||(category==='Learning'&&item.shortcut==='ELI10'))&&terms.every(term=>[item.shortcut,item.title,item.description,item.category,item.prompt,item.example,...item.tags,item.tags.includes('Coding')?'code':''].filter(Boolean).join(' ').toLowerCase().includes(term)))}
export const builderFields=['Role','Goal','Context','Constraints','Evidence','Output','Verification']
export function buildPrompt(values){return builderFields.filter(field=>values[field]?.trim()).map(field=>field.toUpperCase()+'\n'+values[field].trim()).join('\n\n')}

export const categoryDescriptions = {
 'Quick Output':'Get useful answers quickly and control verbosity.',
 'Role & Audience':'Choose a perspective, audience and communication style.',
 'Context & Clarification':'Frame the task and resolve important missing information.',
 'Think & Challenge':'Patterns for testing assumptions, reframing problems and improving reasoning.',
 'Analyse & Decide':'Compare options, weigh trade-offs and make informed decisions.',
 'Output Control':'Specify structure, length and boundaries for the result.',
 'Evidence & Verification':'Check sources, uncertainty and the quality of conclusions.',
 'Coding':'Implement, debug and review software within an existing architecture.',
 'Agents & Workflows':'Define bounded tasks, checkpoints and completion criteria.',
 'Learning':'Build understanding through explanation, practice and review.',
 'Prompt Recipes':'Complete templates for research, coding, data analysis and agent tasks.'
}
export function groupCheats(items,selected='All') {
 return (selected==='All'?categories:[selected]).map(category=>({category,items:items.filter(item=>item.category===category||(selected==='Learning'&&item.shortcut==='ELI10'))})).filter(group=>group.items.length)
}
