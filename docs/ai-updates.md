# AI Updates maintenance

AI Guide → AI Updates remains at #/ai-lab/guide/news. The overview reads the newest three records from the same local JSON. Themes count categories with at least two announcements in the last 45 days; they are not claims about industry-wide trends.

## Run and validate

Requires Python 3.10+ and the existing Node/npm project dependencies. No Python packages or AI keys are required.

    python scripts/fetch-ai-updates.py
    python -m unittest discover -s scripts -p 'test_ai_updates.py'
    node scripts/verify-ai-updates.mjs
    npm run build

The registry is src/config/aiNewsSources.json. Enable only reviewed official RSS/Atom endpoints, their explicit HTTPS host allowlists, categories and priority. Lower priority numbers are fetched first and win duplicate incoming stories. OpenAI, Google, Microsoft Research, NVIDIA, Hugging Face and MCP are enabled. Anthropic, DeepMind, Meta and Vercel remain registered but disabled pending feed/API and access-policy review. There is deliberately no HTML crawler; an HTML adapter requires explicit permission/robots review before implementation. Never bypass restrictions. A 403 or 429 stops that source without retries; transient server/network failures get one retry. Each source has a 10-second request timeout, 3 MB response limit and a short delay. Redirects must stay on its allowlist. No article pages are fetched.

Feed excerpts are capped at 18 words and are not AI-generated summaries. Why-it-matters text describes category relevance rather than claiming an outcome. The heuristic filter can miss relevant articles or admit marginal ones; periodically review the output. Titles, source publication dates and original links come from feeds. Undated/future/older-than-one-year entries are excluded. Normalized URLs and normalized titles remove duplicates; curated changelog entries may share a URL when they describe different releases. Existing records keep their discovery dates. Retention is the newest 150 items within one year. Total failure preserves all previous items.

lastAttempt records each attempt. lastUpdated advances only when every enabled source succeeds. A partial run can add valid items but retains the previous complete-refresh timestamp and displays a delayed notice. Latest is shown only for a complete refresh under 48 hours old. sourceStatus records failures. Refresh metadata is intentionally committed even when there are no new stories, so freshness represents a real successful check.

## GitHub Actions and deployment

.github/workflows/ai-updates.yml runs daily at 21:23 UTC and supports Run workflow (workflow_dispatch). Commit this workflow to the repository default branch, enable Actions, and allow the workflow token to write repository contents. Branch protection may require adapting the final commit to your repository's PR policy. The workflow tests, fetches, validates JSON, builds, commits only the changed feed, and uploads website-with-ai-updates containing dist. A total source failure is reported as a failed run after the retained data and failure status are saved. Partial failures are visible in JSON and the page.

GitHub does not trigger other push workflows for commits made with GITHUB_TOKEN. Connect your existing deployment as a subsequent step/reusable workflow in this job, or consume the build artifact through workflow_run. An external hosting Git integration may also deploy bot commits; verify that with your host. No hosting credentials or deployment target were available here, so this change does not invent a deployment integration. Do not put any future summarisation API keys in Vite variables or frontend code; use Actions secrets only.

A live local run successfully fetched all six enabled feeds. Parsing, source failure isolation, retention and duplicate tests run without network fixtures. Browser visual testing and a real GitHub workflow_dispatch run must be checked in the connected deployment environment.
