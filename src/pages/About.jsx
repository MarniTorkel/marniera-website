import { metrics } from '../siteContent'
import SectionHeader from '../components/SectionHeader'
import { aboutContent, contact } from '../data/pages'
export default function About({ page }) {
  if (page === 'contact') return <section className="page-section about-page">
    <SectionHeader as="h1" eyebrow="Contact / collaboration" title="Let’s connect research and useful software" copy="Research applications, data visualisation and AI-assisted tools are areas of interest for future collaboration." />
    {contact.email || contact.profileUrl ? <div className="project-actions">{contact.email && <a className="button primary" href={'mailto:' + contact.email}>Email me</a>}{contact.profileUrl && <a className="button secondary" href={contact.profileUrl} target="_blank" rel="noopener noreferrer">Public profile ↗</a>}</div> : <div className="empty-state"><h2>Contact details coming soon</h2><p>A public contact address will be added here.</p></div>}
    <a className="text-link back-link" href="#/work">Explore the work →</a>
  </section>
  const [eyebrow, title, copy] = aboutContent[page] || aboutContent.about
  return <section className="page-section about-page"><SectionHeader as="h1" eyebrow={eyebrow} title={title} copy={copy} />
    <nav className="collection-links" aria-label="About sections">{Object.entries(aboutContent).map(([path, entry]) => <a key={path} href={'#/' + path} aria-current={path === page ? 'page' : undefined}>{entry[0]}</a>)}<a href="#/contact">Contact</a></nav>
    {page === 'about' && <>
      <dl className="about-stats">{metrics.map(metric => <div key={metric.value}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl>
      <section className="about-panel"><h2>Applied AI Guide</h2><p>My evolving reference for learning and building with modern AI.</p><a className="text-link" href="#/ai-lab/guide">Explore AI Guide →</a></section>
    </>}
    {(page === 'about' || page === 'about/education') && <section className="about-panel"><h2>Education</h2><ul className="qualification-list"><li><h3>Master of Data Science</h3><p>The University of Sydney</p></li><li><h3>Graduate Diploma in Digital Media</h3><p>The University of Sydney</p></li><li><h3>Bachelor of Computer Science</h3><p>The University of New South Wales</p></li></ul></section>}
    {page === 'about/skills' && <section className="about-panel"><h2>Working across disciplines</h2><dl><dt>Research applications</dt><dd>Python, FastAPI and React</dd><dt>Analysis & communication</dt><dd>Data science, scientific visualisation and interactive interfaces</dd><dt>Creative exploration</dt><dd>Geometry, SVG, Canvas and generative design</dd></dl></section>}

  </section>
}
