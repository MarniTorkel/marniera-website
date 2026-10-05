import { useState } from 'react'
import ArtworkCard from './ArtworkCard'
import { collections } from '../data/collections'
import { filterArtworks } from '../data/geometryArt'
export default function ArtGallery({ initialCollection = 'All' }) {
  const [collection, setCollection] = useState(initialCollection)
  const visible = filterArtworks(collection)
  return <>
    <div className="art-filters" role="group" aria-label="Filter artwork by collection">{['All', ...collections.map(item => item.filter)].map(item => <button className="segment" type="button" key={item} aria-pressed={collection === item} onClick={() => setCollection(item)}>{item}</button>)}</div>
    <p className="result-count" role="status">{visible.length} {visible.length === 1 ? 'artwork' : 'artworks'}</p>
    <div className="artwork-grid">{visible.map(art => <ArtworkCard key={art.id} artwork={art} />)}</div>
  </>
}
