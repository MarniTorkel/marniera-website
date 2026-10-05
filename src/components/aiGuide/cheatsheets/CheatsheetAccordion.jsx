import { useId, useState } from 'react'
export function useCheatsheetAccordions(ids, query = '') {
 const [open,setOpen] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(min-width: 651px)').matches ? [ids[0]] : [])
 const [searchState,setSearchState] = useState({query:'',closed:[]})
 const searching = Boolean(query.trim())
 const closed = searchState.query === query ? searchState.closed : []
 const isOpen = id => searching ? !closed.includes(id) : open.includes(id)
 return {open,isOpen,
  toggle:id=>searching ? setSearchState({query,closed:isOpen(id)?[...closed,id]:closed.filter(value=>value!==id)}) : setOpen(current=>current.includes(id)?current.filter(value=>value!==id):[...current,id]),
  expand:id=>setOpen(current=>[...new Set([...current,id])]),
  expandAll:()=>searching ? setSearchState({query,closed:[]}) : setOpen([...ids]),
  collapseAll:()=>searching ? setSearchState({query,closed:[...ids]}) : setOpen([])
 }

}
export function AccordionControls({onExpand,onCollapse}) {return <div className="cheat-accordion-controls"><button className="button secondary" onClick={onExpand}>Expand all</button><button className="button secondary" onClick={onCollapse}>Collapse all</button></div>}
export default function CheatsheetAccordion({title,description,count,unit='references',open,onToggle,children}) {
 const id=useId()
 return <section className="cheat-accordion"><h3><button id={id+'-heading'} aria-expanded={open} aria-controls={id+'-body'} onClick={onToggle}><span>{title}</span><span className="cheat-count">{count} {unit}</span><span aria-hidden="true">{open?'−':'+'}</span></button></h3><div id={id+'-body'} hidden={!open} aria-labelledby={id+'-heading'}>{description&&<p className="cheat-category-description">{description}</p>}<div className="cheat-accordion-content">{children}</div></div></section>
}
