import { useState } from 'react'
import { cheatSheets, cheatSheetById, cheatSheetHref, filterReferenceCategories } from '../../../data/aiGuide/cheatsheets'
import { cheatsheet } from '../../../data/aiGuide/cheatsheet'
import PromptCheatsheet from '../PromptCheatsheet'
import CheatsheetTabs from './CheatsheetTabs'
import CheatsheetAccordion, { AccordionControls, useCheatsheetAccordions } from './CheatsheetAccordion'
import CheatsheetSearch from './CheatsheetSearch'
import CheatCard from './CheatCard'
import './cheatsheets.css'
export default function CheatsheetLanding({sheetId}) {
 const sheet=cheatSheetById(sheetId)
 const legacyPrompt=cheatsheet.some(item=>item.id===sheetId)?sheetId:undefined
 const selected=sheet?.id || (legacyPrompt?'prompting':undefined)
 return <div className="cheatsheet-collection"><CheatsheetTabs selected={selected}/>{!selected?<div className="guide-grid cheatsheet-overview">{cheatSheets.map(item=><article className="guide-card" key={item.id}><h2>{item.title==='Agents'?'Agentic AI':item.title}</h2><p>{item.summary}</p><a className="text-link" href={cheatSheetHref(item.id)}>Open cheatsheet →</a></article>)}</div>:selected==='prompting'?<PromptCheatsheet key={sheetId} initialPrompt={legacyPrompt}/>:<ReferenceCheatsheet key={sheet.id} sheet={sheet}/>}</div>
}
function ReferenceCheatsheet({sheet}) {
 const [query,setQuery]=useState('')
 const categories=filterReferenceCategories(sheet.categories,query)
 const accordions=useCheatsheetAccordions(sheet.categories.map(category=>category.id),query)
 return <section className="reference-cheatsheet"><h2>{sheet.title}</h2><p>{sheet.summary}</p>{sheet.lastReviewed&&<p className="guide-small">Last reviewed: <time dateTime={sheet.lastReviewed}>{sheet.lastReviewed}</time></p>}<CheatsheetSearch value={query} onChange={setQuery}/><AccordionControls onExpand={accordions.expandAll} onCollapse={accordions.collapseAll}/><p role="status">{categories.reduce((total,category)=>total+category.cards.length,0)} references</p>{categories.map(category=><CheatsheetAccordion key={category.id} title={category.title} count={category.cards.length} open={accordions.isOpen(category.id)} onToggle={()=>accordions.toggle(category.id)}><div className="prompt-grid">{category.cards.map(card=><CheatCard key={card.id} card={card}/>)}</div></CheatsheetAccordion>)}{!categories.length&&<p>No matching references. Try a broader term.</p>}{sheet.relatedUrl&&<a className="text-link" href={sheet.relatedUrl}>Explore AI Strategy / CAIO material →</a>}{sheet.sources&&<footer className="prompt-sources"><h3>Official references</h3>{sheet.sources.map(([label,url])=><a key={url} href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</footer>}</section>
}
