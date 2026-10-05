import prompting from './prompting'
import foundations from './foundations'
import agents from './agents'
import rag from './rag'
import protocols from './protocols'
import evaluations from './evaluations'
import codingagents from './codingAgents'
import security from './security'
import strategy from './strategy'
export const cheatSheets = [prompting, foundations, agents, rag, protocols, evaluations, codingagents, security, strategy]
export const cheatSheetById = id => cheatSheets.find(sheet => sheet.id === id)
export const cheatSheetHref = id => '#/ai-lab/guide/cheatsheet/' + id
export function filterReferenceCategories(categories, query = '') {
 const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
 return categories.map(category => ({...category, cards: category.cards.filter(card => terms.every(term => [category.title, card.title, card.body].join(' ').toLowerCase().includes(term)))})).filter(category => category.cards.length)
}
