# Portfolio content guide

The site retains React, Vite and hash routing. Links use /#/research, /#/apps,
/#/ai-lab, /#/visualisation, /#/art and /#/about; static hosting needs no new rewrites.

## Where to edit

- src/data/navigation.js: desktop dropdown and mobile accordion links.
- src/data/projects.js: shared catalog, cross-listing and filtering; geometry entries reuse existing artwork metadata.
- src/data/research/projects.js: publication-based research entries. Metadata is matched by publication URL, so reordering the publication list is safe.
- src/siteContent.js: original publications, agent descriptions, AI Guide and cheatsheets remain here.
- src/data/aiLab/projects.js: mappings for agents and research ideas, including status and category placement.
- src/apps/research-startup-ideas/data/researchStartupIdeas.js: the six initial ideas and their problem, solution and target users.
- src/apps/geometry-art/data/geometryArt.js: art images, descriptions and optional purchase fields.
- src/data/pages.js: landing-page descriptions, About copy and public contact destination.
- src/pages/Home.jsx: selected project slugs for each homepage section.

## Add or promote work

Each project has one primary category (Research, Applications, AI, Visualisation or Geometry),
a stable slug, a shortDescription and collections for cross-listing (research, apps, ai-lab,
visualisation, art). Optional group arrays control the relevant subpages. See existing entries
for researchGroups, appTypes, labGroups, visualGroups and artGroups.

An AI idea can become an application by updating its category, collections, appTypes and
status. Keep the slug unchanged to retain its case-study URL. Add demoUrl or githubUrl only
when an actual destination exists. Launch Demo appears automatically for records with demoUrl.
The Ribbon Flow Field entry uses the existing Canvas animation as a working demonstration.

Project sections are optional: question, significance, overview, approach, data, users,
results, architecture, limitations and next. Only populated sections render. Do not add
research outcomes or implementation claims without supporting content.

Use image and imageAlt for supplied screenshots or figures. Current research previews are
explicitly labeled schematic studies, not results or application screenshots.

For future art sales, set purchaseUrl and optionally price/availability on the artwork data.
No checkout, payment processing or backend has been added.

## Existing links

- /#/agents and #agents -> Applications / AI Agents
- /#/portfolio -> unified Work collection
- /#/geometry-art -> Art / Gallery
- /#/research-startup-ideas -> AI Lab / Startup Ideas
- /#/guild -> preserved AI Guide, Resources and Cheatsheet

## Validation

npm test checks every page render, internal links, legacy aliases, migrated publications and
agents, filter behavior, demo availability and omitted case-study sections. No ESLint or
TypeScript tooling existed in this JavaScript project.

npm run build is the standard production command. In the current restricted Windows
environment, npm run build -- --configLoader native avoids the config bundler's parent-directory
access error without changing deployment configuration.
