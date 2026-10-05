import Research from './pages/Research'
import DataScience from './pages/DataScience'
import AILab from './pages/AILab'
import CreativeLab from './pages/CreativeLab'
import BeyondAI from './pages/BeyondAI'
import GeometryArt from './apps/geometry-art'
import { useEffect, useRef } from 'react'
import Header from './components/navigation/Header'
import Footer from './components/layout/Footer'
import SectionHeader from './components/SectionHeader'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Guide from './pages/Guide'
import usePageNavigation from './hooks/usePageNavigation'
import usePageMetadata from './hooks/usePageMetadata'

export default function App() {
  const [page] = usePageNavigation()
  const mainRef = useRef(null)
  const previousPage = useRef(page)
  usePageMetadata(page)
  useEffect(() => {
    if (previousPage.current !== page) mainRef.current?.focus({ preventScroll: true })
    previousPage.current = page
  }, [page])
  let content
  if (page === 'home') content = <Home />
  else if (page === 'creative-lab/video' || page === 'creative-lab/books') content = <BeyondAI page={page} />
  else if (page === 'creative-lab' || page.startsWith('creative-lab/')) content = <CreativeLab page={page} />
  else if (page === 'art' || page.startsWith('art/')) content = <GeometryArt page={page} />
  else if (page === 'ai-lab/guide' || page.startsWith('ai-lab/guide/')) content = <Guide page={page} />
  else if (page === 'ai-lab' || ['projects','evaluations','strategy'].some(section=>page==='ai-lab/'+section || page.startsWith('ai-lab/'+section+'/'))) content = <AILab key={page} page={page} />
  else if (page === 'data-science' || page.startsWith('data-science/')) content = <DataScience key={page} page={page} />
  else if (page === 'research') content = <Research />
  else if (page.startsWith('work/')) content = <ProjectPage slug={page.slice(5)} />
  else if (page === 'contact' || page.startsWith('about')) content = <About page={page} />
  else if (page === 'not-found') content = <section className="page-section"><SectionHeader as="h1" eyebrow="404" title="Page not found" copy="This page may have moved. Explore the portfolio to find research, applications and creative work." /><a className="button primary" href="#/work">Explore all work</a></section>
  else content = <CollectionPage page={page} />
  return <div className="app-shell"><Header page={page} /><main id="main-content" tabIndex={-1} ref={mainRef}>{content}</main><Footer /></div>
}
