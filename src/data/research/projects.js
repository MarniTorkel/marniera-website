import { publications } from './publications'
// Old paper-as-project URLs resolve to the unified academic section.
export const legacyResearchRoutes = {
  "spatial-expression-benchmarking": "spatial-simulation-benchmarking",
  "kidney-transplant-support": "kidney-transplant-support",
  "single-cell-benchmarking": "single-cell-benchmarking",
  "scclassify2": "scclassify2",
  "scdney-data-stories": "scdney-data-stories",
  "sublinearforce": "sublinearforce",
  "gdot": "gdot",
  "spectral-sampling": "spectral-sampling",
  "louvain-graph-drawing": "louvain-graph-drawing"
}
export const publicationByLegacySlug = slug => publications.find(paper=>paper.id===legacyResearchRoutes[slug])
