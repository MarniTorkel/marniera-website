import { aiLabSections } from './aiLab/sections'
export const navigation = [
  { label: 'AI Lab', path: 'ai-lab', items: [
    ['AI Lab Overview', 'ai-lab'], ...aiLabSections.map(section=>[section.title,section.path]),
  ] },
  { label: 'Data Science', path: 'data-science', items: [] },
  { label: 'Research', path: 'research', items: [] },
  { label: 'Creative Lab', path: 'creative-lab', items: [
    ['Creative Lab Overview', 'creative-lab'], ['Geometry Art', 'creative-lab/geometry'], ['Generative Art', 'creative-lab/generative'], ['Data-Inspired Art', 'creative-lab/data-art'], ['Games', 'creative-lab/games'], ['Experiments', 'creative-lab/experiments'],
  ] },
  { label: 'About', path: 'about', items: [
    ['About Me', 'about'], ['Education', 'about/education'], ['Skills & Technologies', 'about/skills'],
    ['Contact', 'contact'],
  ] },
]
export const hrefFor = path => '#/' + (path === 'home' ? '' : path)
