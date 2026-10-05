import ArtLinks from './ArtLinks'
export default function ArtworkCard({ artwork }) {
  return <article className="artwork-card art-gallery-card">
    <a className="art-card-link" href={'#/art/gallery/' + (artwork.slug || artwork.id)}>
      <img src={artwork.webPreview || artwork.image} alt={artwork.alt} width="800" height="600" loading="lazy" />
      <div className="artwork-content"><p className="eyebrow">{artwork.collection}</p><h2>{artwork.title}</h2><p className="art-card-technique">{artwork.technique}</p>{artwork.previewOnly && <span className="art-preview-label">Preview study</span>}</div>
    </a>
    <ArtLinks artwork={artwork} />
  </article>
}
