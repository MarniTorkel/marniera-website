import ProjectVisual from './ProjectVisual'
export default function ProjectCard({ project }) {
  return <article className="work-card">
    <a className="work-visual-link" href={'#/work/' + project.slug} tabIndex={-1} aria-hidden="true"><ProjectVisual project={project} /></a>
    <div className="work-card-body">
      <div className="card-topline"><span>{project.category}{project.year ? ' / ' + project.year : ''}</span><strong>{project.status}</strong></div>
      <h3><a href={'#/work/' + project.slug}>{project.title}</a></h3>
      <p>{project.shortDescription}</p>
      <ul className="tag-list" aria-label="Topics">{(project.tags || []).slice(0, 3).map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="project-actions"><a className="text-link" href={'#/work/' + project.slug}>View {project.category === 'Research' ? 'research' : 'project'} →</a>
        {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Launch Demo ↗</a>}
        {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>
    </div>
  </article>
}
