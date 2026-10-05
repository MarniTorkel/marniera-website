import { gameById } from '../data/creativeLab/games'
import { dataScienceProjectBySlug } from '../data/dataScience/projects'
import { cheatSheetById } from '../data/aiGuide/cheatsheets'
import { evaluationBySlug } from '../data/aiLab/evaluations'
import { strategyBySlug } from '../data/aiLab/strategyTopics'
import { researchIdeaBySlug } from '../data/aiLab/researchIdeas'
import { topicById, guideSubtitle } from '../data/aiGuide/topics'
import { creativeSections, creativeStudy } from '../data/creativeLab'
import { artworkBySlug } from '../apps/geometry-art/data/geometryArt'
import { collections } from '../apps/geometry-art/data/collections'
import { useEffect } from 'react'
import { pageInfo, aboutContent } from '../data/pages'
import { projectBySlug } from '../data/projects'
export default function usePageMetadata(page) {
  useEffect(() => {
    if(page==='data-science'||page.startsWith('data-science/')) {
      const project=dataScienceProjectBySlug(page.split('/')[1])
      document.title=(project?.title||'Data Science Portfolio')+' | Marniera'
      document.querySelector('meta[name="description"]')?.setAttribute('content',project?.summary||'End-to-end data science projects spanning statistical modelling, machine learning, time series, data quality and interactive visualisation.')
      return
    }

    if(page === 'ai-lab/guide' || page.startsWith('ai-lab/guide/')) {
      const parts=page.split('/')
      const topic=parts[2]==='topics'?topicById(parts[3]):null
      const sheet=parts[2]==='cheatsheet'?cheatSheetById(parts[3]):null
      const label={roadmap:'Roadmap',topics:'Topics',tools:'Tools',cheatsheet:'AI Cheatsheets',news:'AI Updates'}[parts[2]]
      document.title=(sheet?.title || topic?.title || label || 'Applied AI Guide 2026')+' | Marniera'
      document.querySelector('meta[name="description"]')?.setAttribute('content',sheet?.summary || topic?.summary || (parts[2]==='cheatsheet'?'Compact references for prompting, models, agents, context, evaluation, protocols, security and AI strategy.':guideSubtitle))
      return
    }
    if(page==='ai-lab'||['projects','evaluations','strategy'].some(area=>page==='ai-lab/'+area||page.startsWith('ai-lab/'+area+'/'))) {
      const [,area,slug]=page.split('/')
      const detail=area==='evaluations'?evaluationBySlug(slug):area==='strategy'?strategyBySlug(slug):researchIdeaBySlug(slug)
      const title=detail?.title||({evaluations:'Evaluation Lab',strategy:'AI Strategy & Leadership',projects:'AI Projects'})[area]||'AI Lab'
      document.title=title+' | Marniera'
      document.querySelector('meta[name="description"]')?.setAttribute('content',detail?.summary||detail?.question||'A working space for learning, building, testing and thinking strategically about modern AI.')
      return
    }
    if (page === 'creative-lab' || page.startsWith('creative-lab/')) {
      const [,section,slug] = page.split('/')
      const category = creativeSections.find(item => item.slug === section)
      const study = section==='games'?gameById(slug):creativeStudy(section,slug)
      document.title = (study?.title || category?.title || 'Creative Lab') + ' | Marniera'
      document.querySelector('meta[name="description"]')?.setAttribute('content',study?.description || category?.intro || 'A space for geometry, generative systems, data-inspired art, games and creative coding experiments.')
      return
    }
    if (page === 'art' || page.startsWith('art/')) {
      const art = page.startsWith('art/gallery/') ? artworkBySlug(page.slice(12)) : null
      const collection = collections.find(item => page === 'art/collections/' + item.id)
      const titles = { art: 'Geometry Art', 'art/gallery': 'Geometry Art Gallery', 'art/generative': 'Generative Art', 'art/studies': 'Geometry Studies', 'art/experiments': 'Geometry Experiments' }
      document.title = (art?.title || collection?.title || titles[page] || 'Geometry Art') + ' | Marni'
      document.querySelector('meta[name="description"]')?.setAttribute('content', art?.description || collection?.description || 'Generative geometry, mathematical art and data-inspired visual experiments created through code.')
      return
    }
    const project = page.startsWith('work/') ? projectBySlug(page.slice(5)) : null
    const info = pageInfo(page)
    const title = project?.title || aboutContent[page]?.[0] || ({ home: 'Research · AI · Data · Visualisation', contact: 'Contact', 'not-found': 'Page not found' })[page] || info.title
    const description = project?.shortDescription || aboutContent[page]?.[2] || info.copy
    document.title = 'Marniera — ' + title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [page])
}
