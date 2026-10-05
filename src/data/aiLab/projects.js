import { agentProducts } from '../../siteContent'
import { researchStartupIdeas } from '../../apps/research-startup-ideas/data/researchStartupIdeas'

// A project can move into Applications by changing category/collections here.
const statuses = { Design: 'In Development', Prototype: 'Prototype', 'Build next': 'In Development', Backlog: 'In Development', Exploring: 'Experimental' }
export const agentProjects = agentProducts.filter(agent => !agent.href).map(agent => ({
  id: agent.id, slug: agent.id, title: agent.title, shortDescription: agent.summary,
  category: 'AI', subcategory: 'agents', status: statuses[agent.status] || agent.status,
  technologies: [], tags: [agent.type, 'AI', ...agent.stack], researchAreas: [agent.type],
  collections: ['ai-lab', 'apps'], appTypes: ['agents', ...(agent.type === 'Analytics' ? ['data-tools'] : ['research'])],
  labGroups: ['agents', 'experiments', ...(agent.status === 'Prototype' ? ['prototypes'] : [])],
  visual: agent.type === 'Analytics' ? 'dashboard' : 'workflow',
  featured: agent.status === 'Prototype',
  sections: { overview: agent.summary, next: 'Further development and a documented demonstration.', limitations: 'An early-stage project. A public demo and implementation details are not yet available here.' },
}))
export const ideaProjects = researchStartupIdeas.map(idea => ({
  id: 'idea-' + idea.id, slug: 'idea-' + idea.id, title: idea.title,
  shortDescription: idea.solution, category: 'AI', subcategory: 'projects',
  status: idea.status === 'Exploring' ? 'Exploring' : 'Idea',
  collections: ['ai-lab'], labGroups: ['projects', 'research-ideas', 'startup-ideas', ...(idea.status === 'Exploring' ? ['experiments'] : [])],
  tags: ['AI', 'Research', ...(idea.id.includes('visualisation') ? ['Scientific Graphics'] : [])], technologies: [],
  visual: idea.id.includes('quality') ? 'matrix' : idea.id.includes('dashboard') ? 'dashboard' : 'workflow',
  sections: { question: idea.problem, approach: idea.solution, users: idea.users,
    limitations: 'This is an AI project concept, not a finished application. Feasibility, data access and usefulness still need to be evaluated.',
    next: 'Clarify the research question, identify suitable evidence and test a small, verifiable example.' },
}))
