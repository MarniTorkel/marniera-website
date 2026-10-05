import { Fragment, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { publications, publicationGroups, scholarProfileUrl, researchAreas, filterPublications } from '../data/research/publications'
import './research.css'
export default function Research() {
 const [query,setQuery]=useState('')
 const visible=filterPublications(query)

 return <section className="page-section research-page"><SectionHeader as="h1" eyebrow="Research" title="Research" copy="Research across computational biology, spatial omics, biomedical decision support, graph drawing and network visualisation."/>
 <a className="button secondary" href={scholarProfileUrl} target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
 <section className="research-areas" aria-labelledby="research-areas-heading"><h2 id="research-areas-heading">Research Areas</h2><dl>{researchAreas.map(area=><div key={area.title}><dt>{area.title}</dt><dd>{area.description}</dd></div>)}</dl></section>
 <section aria-labelledby="research-publications-heading"><h2 id="research-publications-heading">Publications</h2><p>Peer-reviewed research and scholarly outputs.</p><p className="research-count">{publications.length} research works and contributions</p>
 <div className="research-search"><label htmlFor="publication-search">Search publications</label><input id="publication-search" type="search" value={query} placeholder="Title, author, year or research area" onChange={event=>setQuery(event.target.value)}/>{query&&<button className="button secondary" onClick={()=>setQuery('')}>Clear search</button>}</div>
 <p role="status">{query?visible.length+' matching works':null}</p>
     <div className="publications">
      {publicationGroups.map((group, groupIndex) => {
 const papers=visible.filter(paper=>paper.group===group)
 const years=[...new Set(papers.map(paper=>paper.year))].sort((a,b)=>b-a)
 return papers.length>0 && <section className="publication-group" key={group} aria-labelledby={"publication-group-"+groupIndex}><h3 id={"publication-group-"+groupIndex}>{group}</h3>
 {years.map(year => <section className="publication-year" key={year} aria-labelledby={'publications-' + groupIndex + '-' + year}>
        <h4 id={'publications-' + groupIndex + '-' + year}>{year}</h4>
        <ol className="publication-list">
          {papers.filter(paper => paper.year === year).map(paper => <li key={paper.id}>
            <article aria-labelledby={paper.id}>
              <h5 id={paper.id}>{paper.title}</h5>
              <p className="publication-authors">{paper.authors.map((author, index) => <Fragment key={author}>{index > 0 && ' · '}{['Marni Torkel','Marnijati Torkel'].includes(author) ? <strong>{author}</strong> : author}</Fragment>)}</p>
              <p className="publication-journal">{paper.journal} · {paper.year}</p>
              <p className="publication-description">{paper.description}</p>
              <ul className="publication-areas" aria-label="Research areas">{paper.researchAreas.map(area=><li key={area}>{area}</li>)}</ul>
              <div className="publication-links">
                {paper.doi && <a href={'https://doi.org/' + paper.doi} target="_blank" rel="noopener noreferrer" aria-label={'DOI for ' + paper.title}>DOI ↗</a>}
                {paper.articleUrl && <a href={paper.articleUrl} target="_blank" rel="noopener noreferrer" aria-label={'Article: ' + paper.title}>Article ↗</a>}
                {paper.pubmedUrl && <a href={paper.pubmedUrl} target="_blank" rel="noopener noreferrer" aria-label={'PubMed: ' + paper.title}>PubMed ↗</a>}
              </div>
              {paper.note && <p className="publication-note">{paper.note}</p>}
            </article>
          </li>)}
        </ol>
      </section>)}
 </section>})}
    </div>
 {!visible.length&&<p>No matching publications. Try a different title, author or research area.</p>}
 </section></section>
}
