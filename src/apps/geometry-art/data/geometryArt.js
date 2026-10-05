import voronoi from '../assets/voronoi/cells-preview.svg'
import fibonacci from '../assets/fibonacci/spiral-preview.svg'
import tessellation from '../assets/tessellation/tiles-preview.svg'
import art0 from '../assets/orbital-study.svg'
import art1 from '../assets/wave-field.svg'
import art2 from '../assets/radial-lattice.svg'

// Add an external purchaseUrl and display price when artwork becomes available.
const originalArtworks = [
  {
    id: "orbital-study",
    title: "Orbital Study",
    description: "Overlapping circles trace a rhythmic study of rotation and symmetry.",
    technique: "Rotational geometry · SVG",
    year: 2026,
    alt: "Teal and coral circles arranged around a central point on a cream background.",
    purchaseUrl: null,
    price: null,
    availability: null,
    image: art0,
  },
  {
    id: "wave-field",
    title: "Wave Field",
    description: "A family of sine curves explores interference, movement and layered data-like forms.",
    technique: "Parametric curves · SVG",
    year: 2026,
    alt: "Layered teal and gold sine waves flowing across a dark green field.",
    purchaseUrl: null,
    price: null,
    availability: null,
    image: art1,
  },
  {
    id: "radial-lattice",
    title: "Radial Lattice",
    description: "Straight lines connect points on concentric rings to reveal an intricate geometric structure.",
    technique: "Generative linework · SVG",
    year: 2026,
    alt: "Fine teal and coral lines connect concentric rings to form a circular lattice.",
    purchaseUrl: null,
    price: null,
    availability: null,
    image: art2,
  },
]

const originalCollections = ['Recursive Forms', 'Waves', 'Data-inspired']
const previews = [
  { id: 'voronoi-preview', title: 'Voronoi Dreams', collection: 'Voronoi', image: voronoi,
    description: 'Organic geometric compositions generated from points, distance and spatial partitioning.', technique: 'Voronoi partition · SVG',
    alt: 'Irregular teal, sage and sand polygons partition a dark plane.', featured: true },
  { id: 'fibonacci-preview', title: 'Fibonacci Studies', collection: 'Fibonacci', image: fibonacci,
    description: 'Visual explorations of sequence, proportion, rotation and spiral structures inspired by Fibonacci relationships.', technique: 'Golden-angle arrangement · SVG',
    alt: 'Teal and gold dots spiral outward in a golden-angle arrangement.', featured: true },
  { id: 'tessellation-preview', title: 'Tessellation Lab', collection: 'Tessellations', image: tessellation,
    description: 'Repeated hexagonal forms explore rhythm, tiling and colour.', technique: 'Hexagonal tiling · SVG',
    alt: 'An ordered grid of teal and warm sand hexagonal tiles.', featured: false },
]
// webPreview is the grid asset. Keep print-resolution files separate and unloaded.
export const artworks = [
  ...originalArtworks.map((art, index) => ({ ...art, slug: art.id, collection: originalCollections[index],
    webPreview: art.image, printSource: null, etsyUrl: null, youtubeUrl: null, featured: index === 0 })),
  ...previews.map(art => ({ ...art, slug: art.id, webPreview: art.image, printSource: null,
    previewOnly: true, etsyUrl: null, youtubeUrl: null, purchaseUrl: null, price: null, availability: null })),
]
export const artworkBySlug = slug => artworks.find(art => art.slug === slug)
export const filterArtworks = collection => collection === 'All' ? artworks : artworks.filter(art => art.collection === collection)
