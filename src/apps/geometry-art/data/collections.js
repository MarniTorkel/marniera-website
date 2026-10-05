export const collections = [
  { id: 'recursive', title: 'Recursive Forms', filter: 'Recursive Forms', artwork: 'orbital-study', description: 'Recursive geometric systems built from repeated circles, rotation and scale. Simple rules gradually produce complex visual structures.' },
  { id: 'voronoi', title: 'Voronoi Dreams', filter: 'Voronoi', artwork: 'voronoi-preview', description: 'Organic geometric compositions generated from points, distance and spatial partitioning.' },
  { id: 'fibonacci', title: 'Fibonacci Studies', filter: 'Fibonacci', artwork: 'fibonacci-preview', description: 'Visual explorations of sequence, proportion, rotation and spiral structures inspired by Fibonacci relationships.' },
  { id: 'tessellation', title: 'Tessellation Lab', filter: 'Tessellations', artwork: 'tessellation-preview', description: 'Individual tiles repeat and transform into larger visual structures.' },
  { id: 'waves', title: 'Geometric Waves', filter: 'Waves', artwork: 'wave-field', description: 'Parametric curves explore rhythm, interference and movement.' },
  { id: 'data', title: 'Data Constellations', filter: 'Data-inspired', artwork: 'radial-lattice', description: 'Points and connections explore spatial relationships through abstract linework.' },
].map(collection => ({ ...collection, etsyUrl: null, youtubeUrl: null }))
export const processes = [
  { title: 'Recursive Circles', collection: 'recursive', copy: 'Simple circular forms repeatedly scale, rotate and reproduce to create increasingly complex structures.', rule: 'A circle and a scale', process: 'Repeat · rotate · nest' },
  { title: 'Voronoi Systems', collection: 'voronoi', copy: 'Points in space become regions. Small changes to their positions reshape the composition.', rule: 'A set of seed points', process: 'Partition by distance' },
  { title: 'Fibonacci & Spiral Systems', collection: 'fibonacci', copy: 'Sequences, rotations and proportions provide a framework for natural-looking geometric forms.', rule: 'Sequence and proportion', process: 'Turn · space · grow' },
  { title: 'Tessellations', collection: 'tessellation', copy: 'Individual geometric tiles repeat, rotate and transform to form larger structures.', rule: 'A geometric tile', process: 'Repeat across a plane' },
  { title: 'Parametric Waves', collection: 'waves', copy: 'Mathematical functions generate curves, interference patterns and flowing compositions.', rule: 'A curve and parameters', process: 'Layer · shift · combine' },
]
export const studies = [
  ['Symmetry', 'Balance through reflection and rotation.', 'recursive'],
  ['Recursion', 'A rule repeated at different scales.', 'recursive'],
  ['Fibonacci / Golden Ratio', 'Sequence, proportion and spiral arrangements.', 'fibonacci'],
  ['Voronoi Geometry', 'Regions shaped by proximity to points.', 'voronoi'],
  ['Tessellation', 'Tiles and the relationships between them.', 'tessellation'],
  ['Parametric Curves', 'Curves defined by changing parameters.', 'waves'],
  ['Polygon Systems', 'Edges, vertices and repeated geometric forms.', 'tessellation'],
]
export const plannedExperiments = ['Recursive Circle Generator', 'Voronoi Generator', 'Tessellation Generator', 'Parametric Curve Generator', 'Colour Palette Explorer']
