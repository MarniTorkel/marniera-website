import { useState } from 'react'
import { filterProjects } from '../../data/projects'
import ProjectCard from './ProjectCard'
export default function ProjectCollection({ projects, visual = false, groupResearch = false }) {
  const [category, setCategory] = useState('All')
  const [tag, setTag] = useState('All')
  const [query, setQuery] = useState('')
  const tags = [...new Set(projects.flatMap(project => [...(project.tags || []), ...(project.technologies || [])]))].sort()
  const categories = [...new Set([...projects.map(project => project.category), ...(projects.some(project => project.collections.includes('apps')) ? ['Applications'] : []), ...(projects.some(project => project.collections.includes('visualisation')) ? ['Visualisation'] : [])])]
  const visible = filterProjects(projects, { category, tag, query })
  const groups = groupResearch ? [...new Set(visible.map(project => project.subcategory))] : ['all']
  const names = { 'health-ai': 'Health & Biomedical AI', 'computational-biology': 'Computational Biology', 'data-science': 'Data Science & Benchmarking' }
  return <>
    <div className="collection-controls">
      <label>Search work<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Title, topic or research area" /></label>
      {categories.length > 1 && <label>Area<select value={category} onChange={event => setCategory(event.target.value)}><option>All</option>{categories.map(item => <option key={item}>{item}</option>)}</select></label>}
      <label>Topic / technology<select value={tag} onChange={event => setTag(event.target.value)}><option>All</option>{tags.map(item => <option key={item}>{item}</option>)}</select></label>
      {(query || category !== 'All' || tag !== 'All') && <button className="button secondary" type="button" onClick={() => { setQuery(''); setCategory('All'); setTag('All') }}>Clear filters</button>}
    </div>
    <p className="result-count" role="status">{visible.length} {visible.length === 1 ? 'entry' : 'entries'}</p>
    {!visible.length && <div className="empty-state"><h2>{projects.length ? 'No matching work' : 'Currently exploring'}</h2><p>{projects.length ? 'Try another topic or clear the filters.' : 'A documented project or public demonstration for this area is coming soon.'}</p><a className="text-link" href="#/work">Explore all work →</a></div>}
    {groups.map(group => <section key={group} className="collection-group">
      {group !== 'all' && <h2>{names[group] || group}</h2>}
      <div className={visual ? 'work-grid visual-work-grid' : 'work-grid'}>
        {visible.filter(project => group === 'all' || project.subcategory === group).map(project => <ProjectCard project={project} key={project.id} />)}
      </div>
    </section>)}
  </>
}
