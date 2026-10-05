import FlowFieldDemo from '../components/gallery/FlowFieldDemo'
import SectionHeader from '../components/SectionHeader'
import ProjectVisual from '../components/projects/ProjectVisual'
import { projectBySlug } from '../data/projects'
const headings = { question: 'The question', significance: 'Why it matters', overview: 'Overview', approach: 'Approach', data: 'Data', users: 'Who it is for', results: 'Results / findings', architecture: 'System', limitations: 'Limitations', next: 'What’s next' }
export default function ProjectPage({ slug }) {
  const project = projectBySlug(slug)
  if (!project) return null
  return <article className="page-section case-study">
    <a className="text-link back-link" href="#/work">← All work</a>
    <SectionHeader as="h1" eyebrow={project.category + ' / ' + project.status + (project.year ? ' / ' + project.year : '')} title={project.title} copy={project.shortDescription} />
    <div className="case-visual"><ProjectVisual project={project} /></div>
    <div className="case-layout"><div>
      {project.id === 'flow-field' && <FlowFieldDemo />}
      {Object.entries(headings).map(([key, title]) => project.sections?.[key] && <section className="case-section" key={key}><h2>{title}</h2><p>{project.sections[key]}</p></section>)}
    </div><aside className="case-meta">
      {!!project.technologies?.length && <><h2>Technologies</h2><ul className="tag-list">{project.technologies.map(tag => <li key={tag}>{tag}</li>)}</ul></>}
      {!!project.tags?.length && <><h2>Topics</h2><ul className="tag-list">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></>}
      <div className="case-links">{[['demoUrl', 'Launch Demo'], ['githubUrl', 'GitHub'], ['paperUrl', 'Related publication'], ['documentationUrl', 'Documentation'], ['purchaseUrl', 'View print / download']].map(([key,label]) => project[key] && (key === 'demoUrl' && project.id === 'flow-field' ? <button className="button primary" type="button" key={key} onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ block: 'center' })}>Explore live demo ↓</button> : <a className="button secondary" key={key} href={project[key]} target="_blank" rel="noopener noreferrer">{label} ↗</a>))}</div>
    </aside></div>
  </article>
}
