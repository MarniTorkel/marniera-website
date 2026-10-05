import Games from '../apps/games/Games'
import SectionHeader from '../components/SectionHeader'
import ArtworkCard from '../apps/geometry-art/components/ArtworkCard'
import { artworks } from '../apps/geometry-art/data/geometryArt'
const interests = [['Geometry Art', 'art/gallery'], ['Games', 'creative-lab/games'], ['Video', 'creative-lab/video'], ['Books', 'creative-lab/books']]
export default function BeyondAI({ page }) {
  const selected = interests.find(([, path]) => path === page)
  return <section className="page-section">
    <SectionHeader as="h1" eyebrow="Creative Lab" title={selected?.[0] || 'Creative Lab'} copy="A personal space for art, games, video, books and other creative interests." />
    <nav className="collection-links" aria-label="Creative interests"><a href="#/creative-lab" aria-current={page === 'creative-lab' ? 'page' : undefined}>Overview</a>{interests.map(([label, path]) => <a key={path} href={'#/' + path} aria-current={page === path ? 'page' : undefined}>{label}</a>)}</nav>
    {page === 'creative-lab/games' ? <Games /> : selected ? <div className="empty-state"><h2>A space for {selected[0].toLowerCase()}</h2><p>I’ll add projects, notes and discoveries here as I explore this interest.</p></div> : <><h2>Geometry Art</h2><p>Generative studies and experiments in visual form.</p><div className="work-grid">{artworks.filter(art => art.featured).map(art => <ArtworkCard key={art.id} artwork={art} />)}</div><a className="text-link" href="#/art/gallery">Browse the art gallery →</a><section className="about-panel"><h2>More interests to come</h2><p>Play three browser games, explore the art gallery, or visit the spaces for future video and book projects.</p></section></>}
  </section>
}
