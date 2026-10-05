import { researchStartupIdeas } from '../../apps/research-startup-ideas/data/researchStartupIdeas'
const areas=['Literature & evidence','Data quality','Biomedical visualisation','Evidence synthesis','Reproducible workflows','Simulation & decision support']
const technologies=[['Retrieval','Citation tracing'],['Python','FastAPI'],['React','Reproducible plotting'],['Search','Data modelling'],['Version control','Workflow provenance'],['Simulation','Uncertainty analysis']]
export const researchIdeas=researchStartupIdeas.map((idea,index)=>({id:idea.id,slug:idea.id,title:idea.title,area:areas[index],question:idea.problem,whyItMatters:'This affects '+idea.users.toLowerCase()+'.',approach:idea.solution,technologies:technologies[index],status:idea.status==='Exploring'?'Exploring':'Idea',next:'Clarify the research question, identify suitable evidence and test a small, verifiable example.',featured:index===0}))
export const researchIdeaBySlug=slug=>researchIdeas.find(idea=>idea.slug===slug)
