import { generativeArt } from './generativeArt'
import { dataInspiredArt } from './dataInspiredArt'
import { experiments } from './experiments'
export const creativeSections = [
{slug:'geometry',title:'Geometry Art',description:'Mathematical forms, tessellations and geometric studies.',intro:'Geometric forms, mathematical patterns and visual studies created through code.',visual:'fibonacci'},
{slug:'generative',title:'Generative Art',description:'Algorithmic systems creating patterns and evolving visual forms.',intro:'Algorithmic systems that create evolving patterns, structures and visual forms.',visual:'flow',items:generativeArt,filters:['All','Flow Fields','Recursive','Particles','Parametric','Patterns','Motion']},
{slug:'data-art',title:'Data-Inspired Art',description:'Numbers and data transformed into visual compositions.',intro:'Turning numbers, distributions and data structures into visual compositions.',visual:'distribution',items:dataInspiredArt,filters:['All','Numbers','Statistics','Time Series','Networks','Simulation','Patterns']},
{slug:'games',title:'Games',description:'Small browser games built around words, logic and numbers.',intro:'Small browser games exploring words, logic, numbers and visual interaction.',visual:'tiles'},
{slug:'experiments',title:'Experiments',description:'Creative coding prototypes and visual ideas in progress.',intro:'Small ideas, visual prototypes and creative coding explorations.',visual:'curve',items:experiments,filters:['All','Parametric','Patterns','Simulation','Particles']}
]
export const creativeStudy = (section,slug) => creativeSections.find(s=>s.slug===section)?.items?.find(i=>i.slug===slug)
