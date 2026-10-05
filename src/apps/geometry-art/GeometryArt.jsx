import SectionHeader from '../../components/SectionHeader'
import GeometryHero from './components/GeometryHero'
import ArtGallery from './components/ArtGallery'
import ArtLinks from './components/ArtLinks'
import { artworkBySlug } from './data/geometryArt'
import { collections, processes, studies, plannedExperiments } from './data/collections'
import { artConfig, validArtUrl } from './data/config'
const nav = [['Overview', 'creative-lab'], ['Geometry Art', 'creative-lab/geometry'], ['Generative Art', 'creative-lab/generative'], ['Data-Inspired Art', 'creative-lab/data-art'], ['Games', 'creative-lab/games'], ['Experiments', 'creative-lab/experiments']]
export default function GeometryArt({ page = 'art' }) {
  const collection = collections.find(item => page === 'art/collections/' + item.id)
  const detail = page.startsWith('art/gallery/') ? artworkBySlug(page.slice('art/gallery/'.length)) : null
  const shop = validArtUrl(artConfig.etsyShopUrl, 'etsy')
  let content
  if (detail) content = <>
    <SectionHeader as="h1" eyebrow={detail.collection} title={detail.title} copy={detail.description} />
    <figure className="art-detail-figure"><img src={detail.webPreview || detail.image} alt={detail.alt} width="800" height="600" /><figcaption>{detail.technique}{detail.year ? ' / ' + detail.year : ''}{detail.previewOnly ? ' / Preview study — replaceable web artwork' : ''}</figcaption></figure>
    <ArtLinks artwork={detail} />{detail.availability && <p>{detail.availability}</p>}
    <a className="text-link back-link" href="#/creative-lab/geometry">← Back to gallery</a>
  </>
  else if (page === 'art') content = <><GeometryHero /><section className="art-section"><SectionHeader eyebrow="Collections" title="Featured Geometry" copy="Six directions for exploring mathematical structure and visual expression." /><div className="artwork-grid">{collections.map(item => {
    const art = artworkBySlug(item.artwork)
    return <article className="artwork-card art-collection-card" key={item.id}><a href={'#/art/collections/' + item.id}><img src={art.webPreview} alt={art.alt} width="800" height="600" loading="lazy" /><div className="artwork-content"><p className="eyebrow">{item.filter}</p><h2>{item.title}</h2><p>{item.description}</p>{art.previewOnly && <span className="art-preview-label">Preview study</span>}</div></a><ArtLinks artwork={item} /></article>
  })}</div></section></>
  else if (page === 'art/gallery' || collection) content = <><SectionHeader as="h1" eyebrow="Geometry Art" title={collection?.title || 'Geometry Art'} copy={collection?.description || 'Geometric forms, mathematical patterns and visual studies created through code.'} /><ArtGallery key={page} initialCollection={collection?.filter || 'All'} /></>
  else if (page === 'art/generative') content = <><SectionHeader as="h1" eyebrow="Geometry • Code • Art" title="Generative Art" copy="I use simple mathematical rules, algorithms and parameters to explore how complex visual structures can emerge from code." /><div className="art-process-list">{processes.map(item => {
    const target = collections.find(c => c.id === item.collection)
    const art = artworkBySlug(target.artwork)
    return <section className="art-process" key={item.title}><a href={'#/art/collections/' + item.collection}><img src={art.webPreview} alt={art.alt} width="800" height="600" loading="lazy" /></a><div><h2>{item.title}</h2><p>{item.copy}</p><ol className="art-process-steps"><li><small>Input / rule</small>{item.rule}</li><li><small>Generation</small>{item.process}</li><li><small>Visual form</small>Explore the study</li></ol><a className="text-link" href={'#/art/collections/' + item.collection}>View collection →</a></div></section>
  })}</div></>
  else if (page === 'art/studies') content = <><SectionHeader as="h1" eyebrow="Art & mathematics" title="Geometry Studies" copy="Geometry Studies explores the mathematical structures behind the artwork — symmetry, repetition, recursion, proportion, tiling and spatial relationships." /><div className="idea-grid">{studies.map(([title, copy, target]) => <article className="idea-card" key={title}><h2>{title}</h2><p>{copy}</p><a className="text-link" href={'#/art/collections/' + target}>Related visual studies →</a><p className="result-count">Deeper visual explanation coming soon</p></article>)}</div></>
  else content = <><SectionHeader as="h1" eyebrow="Unfinished / interactive" title="Experiments" copy="Small experiments exploring what happens when mathematical rules, parameters and visual systems are allowed to evolve." /><article className="about-panel"><p className="eyebrow">Available experiment</p><h2>Ribbon Flow Field</h2><p>The existing live Canvas study explores flowing ribbons and faceted forms.</p><a className="button primary" href="#/work/flow-field">Explore live experiment →</a></article><section className="art-section"><h2>Future generators</h2><div className="idea-grid">{plannedExperiments.map(title => <article className="idea-card" key={title}><p className="eyebrow">Planned · not yet implemented</p><h3>{title}</h3><p>Interactive controls and visual exploration are coming soon.</p></article>)}</div></section></>
  return <div className="page-section art-page"><nav className="collection-links" aria-label="Geometry Art sections">{nav.map(([label, route]) => <a key={route} href={'#/' + route} aria-current={page === route ? 'page' : undefined}>{label}</a>)}</nav>{content}{shop && <aside className="shop-note"><a className="button primary" href={shop} target="_blank" rel="noopener noreferrer">Shop Geometry Art ↗</a></aside>}</div>
}
