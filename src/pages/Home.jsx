import { dataScienceProjects } from '../data/dataScience/projects'
import { publications } from '../data/research/publications'
import { DataScienceVisual } from './DataScience'
import ArtworkCard from '../apps/geometry-art/components/ArtworkCard'
import { artworks } from '../apps/geometry-art/data/geometryArt'
import SectionHeader from '../components/SectionHeader'
import HomeGeometryBackground from '../components/HomeGeometryBackground'
import ProjectCard from '../components/projects/ProjectCard'
import { projectBySlug } from '../data/projects'

function FeaturedSection({ eyebrow, title, copy, href, children, className = '' }) {
  return <section className={'section featured-section ' + className}>
    <div className="section-heading-row"><SectionHeader eyebrow={eyebrow} title={title} copy={copy} /><a className="text-link" href={href}>View all →</a></div>
    {children}
  </section>
}
export default function Home() {
  const experiments = ['research-agent', 'idea-data-quality', 'idea-biomedical-visualisation'].map(projectBySlug)
  const art = artworks.filter(artwork => artwork.featured).slice(0, 3)
  return <div className="portfolio-home">
    <div className="home-page home-hero-art">
      <HomeGeometryBackground />
      <section className="hero-section portfolio-hero">
        <div className="hero-content"><p className="eyebrow">AI · Data Science · Research · Creativity</p><h1>Marniera</h1>
          <p className="hero-copy">Exploring AI, data science and research through useful software and creative experimentation.</p>
          <div className="hero-actions"><a className="button primary" href="#/ai-lab">Explore AI Lab</a><a className="button secondary" href="#/data-science">Explore Data Science</a><a className="button secondary" href="#/research">Explore Research</a></div>
        </div>
      </section>
    </div>
    <div className="home-lab-band"><FeaturedSection eyebrow="01 / AI Lab" title="Currently exploring" copy="AI agents, applications and prototypes in progress. Each is a starting point for investigation." href="#/ai-lab">
      <div className="work-grid">{experiments.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    </FeaturedSection></div>
    <div className="home-data-band"><FeaturedSection eyebrow="02 / Data Science" title="Data Science Portfolio" copy="Planned projects spanning statistical modelling, machine learning, time series and interactive visualisation." href="#/data-science">
      <div className="ds-grid">{dataScienceProjects.slice(0,3).map(project=><article key={project.id} className="ds-card"><DataScienceVisual kind={project.visual}/><div className="ds-card-body"><p className="eyebrow">{project.domain} · {project.status}</p><h3>{project.title}</h3><p>{project.summary}</p><a className="text-link" href={'#/data-science/'+project.slug}>View project →</a></div></article>)}</div>
    </FeaturedSection></div>
    <div className="home-research-band"><FeaturedSection eyebrow="03 / Research" title="Research" copy="Bioinformatics, spatial omics, graph drawing and network visualisation." href="#/research"><p>{publications.length} research works and contributions, grouped by research area and ordered newest first.</p></FeaturedSection></div>
    <div className="home-art-band"><FeaturedSection eyebrow="04 / Creative Lab" title="Creative interests & side projects" copy="Geometry, generative systems, data-inspired art, games and creative coding experiments." href="#/creative-lab">
      <div className="work-grid">{art.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork} />)}</div>
      <a className="text-link art-teaser-link" href="#/creative-lab">Explore Creative Lab →</a>
    </FeaturedSection></div>
  </div>
}
