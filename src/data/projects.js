import { agentProjects, ideaProjects } from './aiLab/projects'
import { artworks } from '../apps/geometry-art/data/geometryArt'

/**
 * Shared project contract: id, slug, title, shortDescription, category (primary),
 * collections (cross-listing), subcategory, status, tags, technologies, featured,
 * image/visual, imageAlt, year, demoUrl, githubUrl, paperUrl, sections.
 * Optional sections: question, significance, overview, approach, data, results,
 * architecture, limitations, next, users. Omit unsupported claims and links.
 */
export const artProjects = artworks.map((art) => ({
  ...art, slug: art.slug || art.id, image: art.webPreview || art.image, shortDescription: art.description, category: 'Geometry',
  collections: ['art', 'visualisation'], subcategory: art.collection === 'Waves' ? 'generative' : 'studies',
  artGroups: ['generative', 'studies'], visualGroups: ['generative'],
  imageAlt: art.alt, status: 'Experimental', technologies: ['SVG'], tags: ['Geometry', 'Generative'],
  sections: { overview: art.description, approach: art.technique },
}))
export const flowFieldProject = {
  id: 'flow-field', slug: 'flow-field', title: 'Ribbon Flow Field',
  shortDescription: 'A live generative study of flowing ribbons, orbiting particles and faceted spheres.',
  category: 'Geometry', subcategory: 'experiments', status: 'Demo',
  collections: ['art', 'visualisation', 'apps'], artGroups: ['generative', 'experiments'],
  visualGroups: ['generative'], appTypes: ['demos'], tags: ['Geometry', 'Generative', 'Interactive'],
  technologies: ['React', 'Canvas'], demoUrl: '#/work/flow-field', visual: 'flow',
  sections: { question: 'How can layered curves and polygon meshes suggest depth and motion on a flat canvas?',
    approach: 'Deterministic parametric curves, shaded polygon meshes and orbiting particles are drawn with the Canvas 2D API.',
    limitations: 'This is a visual experiment, not a scientific model. Motion pauses when the page is hidden or the drawing is offscreen; reduced-motion preferences show a static frame.' },
}
export const projects = [...agentProjects, ...ideaProjects, ...artProjects, flowFieldProject]
export const projectBySlug = slug => projects.find(project => project.slug === slug)
export function projectsFor(section, group) {
  return projects.filter(project => {
    if (section === 'work' && project.collections.includes('art')) return false
    if (section !== 'work' && !project.collections.includes(section)) return false
    if (!group) return true
    if (section === 'research') return project.researchGroups?.includes(group)
    if (section === 'apps') return group === 'demos' ? Boolean(project.demoUrl) : project.appTypes?.includes(group)
    if (section === 'ai-lab') return project.labGroups?.includes(group)
    if (section === 'visualisation') return project.visualGroups?.includes(group)
    if (section === 'art') return group === 'gallery' || project.artGroups?.includes(group)
    return true
  })
}
export function filterProjects(items, { category = 'All', tag = 'All', query = '' } = {}) {
  const needle = query.trim().toLowerCase()
  return items.filter(project => (category === 'All' || project.category === category || (category === 'Applications' && project.collections.includes('apps')) || (category === 'Visualisation' && project.collections.includes('visualisation')))
    && (tag === 'All' || [...(project.tags || []), ...(project.technologies || [])].includes(tag))
    && (!needle || [project.title, project.shortDescription, ...(project.tags || [])].join(' ').toLowerCase().includes(needle)))
}
