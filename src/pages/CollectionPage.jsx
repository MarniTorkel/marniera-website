import SectionHeader from '../components/SectionHeader'
import ProjectCollection from '../components/projects/ProjectCollection'
import { projectsFor } from '../data/projects'
import { pageInfo } from '../data/pages'
import { navigation, hrefFor } from '../data/navigation'
export default function CollectionPage({ page }) {
  const { section, group, title, copy } = pageInfo(page)
  const items = projectsFor(section, group)
  const nav = navigation.find(item => item.path === section)
  return <section className={'page-section collection-page section-' + section}>
    <SectionHeader as="h1" eyebrow={section === 'ai-lab' ? 'Currently exploring' : 'Marniera / ' + (nav?.label || 'Work')} title={title} copy={copy} />
    {nav && <nav className="collection-links" aria-label={nav.label + ' collections'}><a href={hrefFor(section)} aria-current={!group ? 'page' : undefined}>{section === 'ai-lab' ? 'AI Lab Overview' : 'Overview'}</a>{nav.items.filter(item => item[1] !== section && item[1] !== 'guild').map(([label, destination]) => <a href={hrefFor(destination)} key={destination} aria-current={page === destination ? 'page' : undefined}>{label}</a>)}</nav>}
    {section === 'apps' && <p className="feature-note">The collection includes research-linked applications, early prototypes and interactive studies. Launch links are shown only for available demos.</p>}
    {section === 'ai-lab' && <aside className="lab-note">Ideas can develop into prototypes and, when ready, independent applications. Status labels distinguish exploration from working software.</aside>}
    <ProjectCollection key={page} projects={items} visual={section === 'visualisation' || section === 'art'} groupResearch={section === 'research' && !group} />
    {section === 'art' && <aside className="shop-note"><h2>Prints & digital downloads — coming soon</h2><p>Future collections may support prints, downloads, licensing and commissions.</p></aside>}
  </section>
}
