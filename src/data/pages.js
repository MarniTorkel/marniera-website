import { navigation } from './navigation'
export const sectionCopy = {
  research: ['Research', 'Research across computational biology, biomedical decision support, benchmarking and scientific data visualisation.'],
  apps: ['Applications', 'Research software and experimental tools. Each entry shows its current status; public demos appear when available.'],
  'ai-lab': ['AI Lab', 'A space for unfinished ideas, experimental agents and potential research applications. These are explorations, not established services.'],
  visualisation: ['Data Visualisation', 'Exploring scientific data through networks, data stories, dashboards and generative graphics.'],
  art: ['Geometry & Generative Studies', 'Exploring geometry, mathematics and code through generative visual art.'],
  'creative-lab': ['Creative Lab', 'A space for geometry, generative systems, data-inspired art, games and creative coding experiments.'],
  work: ['Work', 'Applications and creative software projects.'],
}
export function pageInfo(page) {
  const [section, group] = page.split('/')
  const parent = navigation.find(item => item.path === section)
  const child = parent?.items.find(item => item[1] === page)
  const [title, copy] = sectionCopy[section] || [child?.[0] || 'Marniera', 'Research, AI, software and visualisation.']
  return { section, group, title: group ? child?.[0] || title : title, copy }
}
export const aboutContent = {
  about: ['About Me', 'Connecting research, software and visual thinking', 'My interests sit at the intersection of data science, software engineering, AI and design. I explore how research methods can become interactive tools, and how visualisation can make complex ideas easier to investigate and communicate.'],
  'about/education': ['Education', 'A foundation across data, computing and design', 'Qualifications in data science, digital media and computer science.'],
  'about/skills': ['Skills & Technologies', 'Tools in service of research questions', 'Python and FastAPI for research applications; React for interactive interfaces; data analysis and scientific visualisation for exploration and communication; geometry and creative coding for visual experiments.'],
}
// Add a public contact destination when ready; no non-functional form is shown.
export const contact = { email: null, profileUrl: null }
