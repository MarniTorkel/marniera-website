import { legacyResearchRoutes } from '../data/research/projects'
import { games } from '../data/creativeLab/games'
import { dataScienceProjectBySlug } from '../data/dataScience/projects'
import { cheatSheetById } from '../data/aiGuide/cheatsheets'
import { evaluationBySlug } from '../data/aiLab/evaluations'
import { strategyBySlug } from '../data/aiLab/strategyTopics'
import { researchIdeaBySlug } from '../data/aiLab/researchIdeas'
import { topicById } from '../data/aiGuide/topics'
import { cheatsheet } from '../data/aiGuide/cheatsheet'
import { creativeStudy } from '../data/creativeLab'
import { artworkBySlug } from '../apps/geometry-art/data/geometryArt'
import { collections } from '../apps/geometry-art/data/collections'
import { useEffect, useState } from 'react'
import { navigation, hrefFor } from '../data/navigation'
import { projectBySlug } from '../data/projects'
const aliases = { 'about/publications': 'research', 'about/experience': 'about/education', 'about/research': 'research', 'ai-lab/startup-ideas': 'ai-lab/projects', 'startup-ideas': 'ai-lab/projects', 'about/research-interests': 'research', 'ai-lab/ai-guide': 'ai-lab/guide', 'beyond-ai': 'creative-lab', 'beyond-ai/games': 'creative-lab/games', 'beyond-ai/video': 'creative-lab/video', 'beyond-ai/books': 'creative-lab/books', guild: 'ai-lab/guide', 'ai-guide': 'ai-lab/guide', 'about/ai-guide': 'ai-lab/guide', home: 'home', agents: 'apps/agents', portfolio: 'work', 'geometry-art': 'art/gallery', 'research-startup-ideas': 'ai-lab/projects' }
export const knownPages = new Set([...games.map(game=>'creative-lab/games/'+game.id), 'home', 'work', 'contact', 'ai-lab/guide', 'ai-lab/experiments', 'ai-lab/prototypes', ...['roadmap','topics','tools','cheatsheet','news'].map(tab=>'ai-lab/guide/'+tab), 'creative-lab/video', 'creative-lab/books', 'ai-lab/agents', ...["research","apps","apps/research","apps/data-tools","apps/agents","apps/demos","visualisation","visualisation/scientific","visualisation/dashboards","visualisation/data-stories","visualisation/research-graphics","visualisation/generative","art","art/gallery","art/generative","art/studies","art/experiments"], ...navigation.flatMap(group => [group.path, ...group.items.map(item => item[1])])])
export function pageFromHash(hash) {
  const raw = hash.replace(/^#\/?/, '').replace(/\/+$/, '') || 'home'
  const legacyProject = raw.replace(/^ai-lab\/research-ideas(?=\/|$)/, 'ai-lab/projects')
  const legacyGuide = legacyProject.replace(/^(?:about\/ai-guide|ai-lab\/ai-guide|ai-guide|guild)(?=\/|$)/, 'ai-lab/guide')
  const page = aliases[legacyGuide] || (legacyGuide === 'ai-lab/guide/resources' ? 'ai-lab/guide/topics' : legacyGuide === 'ai-lab/guide/case-study' ? 'ai-lab/guide' : legacyGuide)
  if (page.startsWith('research/')) return 'research'
  if (page.startsWith('work/') && Object.hasOwn(legacyResearchRoutes,page.slice(5))) return 'research'
  const parts = page.split('/')
  if(parts.length===3 && parts[0]==='ai-lab') {
    if(parts[1]==='evaluations' && evaluationBySlug(parts[2])) return page
    if(parts[1]==='strategy' && strategyBySlug(parts[2])) return page
    if(parts[1]==='projects' && researchIdeaBySlug(parts[2])) return page
  }
  if (parts.length === 4 && parts[0] === 'ai-lab' && parts[1] === 'guide') {
    if(parts[2] === 'topics' && topicById(parts[3])) return page
    if(parts[2] === 'cheatsheet' && (cheatSheetById(parts[3]) || cheatsheet.some(item=>item.id===parts[3]))) return page
  }
  if (parts.length === 3 && parts[0] === 'creative-lab' && creativeStudy(parts[1], parts[2])) return page
  if (page.startsWith('art/gallery/') && artworkBySlug(page.slice(12))) return page
  if (collections.some(collection => page === 'art/collections/' + collection.id)) return page
  if (parts.length === 2 && parts[0] === 'data-science' && dataScienceProjectBySlug(parts[1])) return page
  if (knownPages.has(page)) return page
  if (page.startsWith('work/') && projectBySlug(page.slice(5))) return page
  return 'not-found'
}
export default function usePageNavigation() {
  const [page, setPage] = useState(() => pageFromHash(window.location.hash))
  useEffect(() => {
    const sync = (scroll = true) => { const next=pageFromHash(window.location.hash); const raw=window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, ''); if(next!=='not-found' && raw && raw!==next) window.history.replaceState(null,'', '#/'+next); setPage(next); if(scroll) window.scrollTo({ top: 0, behavior: 'instant' }) }
    sync(false)
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])
  return [page, next => { window.location.hash = hrefFor(next).slice(1) }]
}
