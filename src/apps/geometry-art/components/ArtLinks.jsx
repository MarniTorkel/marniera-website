import { validArtUrl } from '../data/config'
export default function ArtLinks({ artwork }) {
  const etsy = validArtUrl(artwork.etsyUrl, 'etsy')
  const youtube = validArtUrl(artwork.youtubeUrl, 'youtube')
  const purchase = validArtUrl(artwork.purchaseUrl)
  return <div className="project-actions art-external-links">
    {(etsy || purchase) && <a className="text-link" href={etsy || purchase} target="_blank" rel="noopener noreferrer">View Print ↗<span className="sr-only"> (opens in a new tab)</span></a>}
    {youtube && <a className="text-link" href={youtube} target="_blank" rel="noopener noreferrer">Watch the Process ↗<span className="sr-only"> (opens in a new tab)</span></a>}
  </div>
}
