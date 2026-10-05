import { useId } from 'react'
export default function ProjectVisual({ project }) {
  const id = useId().replace(/:/g, '')
  if (project.image) return <img className="project-preview" src={project.image} alt={project.imageAlt || project.title} loading="lazy" width="800" height="500" />
  const kind = project.visual || 'network'
  return <figure className={'schematic-preview preview-' + kind}>
    <svg viewBox="0 0 600 340" role="img" aria-labelledby={id}>
      <title id={id}>{project.title + ' — illustrative ' + kind + ' study, not research results'}</title>
      <rect width="600" height="340" fill="#edf3ef" />
      <g stroke="#007c76" fill="none" opacity=".10">{Array.from({length: 12}, (_, i) => <path key={i} d={'M0 ' + i * 30 + 'H600 M' + i * 55 + ' 0V340'} />)}</g>
      {kind === 'flow' && <g fill="none">{Array.from({length: 48}, (_, i) => <path key={i} d={'M-30 ' + (80 + i * 4) + ' C180 ' + (450 - i * 5) + ' 220 ' + (-180 + i * 7) + ' 630 ' + (60 + i * 4)} stroke={i % 3 ? '#007c76' : '#b95040'} opacity=".5" />)}</g>}
      {kind === 'network' && <g>{Array.from({length: 24}, (_, i) => {
        const x = 300 + Math.cos(i * 2.4) * (70 + i * 4)
        const y = 170 + Math.sin(i * 2.4) * (50 + i * 3)
        return <g key={i}><path d={'M300 170L' + x + ' ' + y + 'L' + (300 + Math.cos((i + 5) * 2.4) * 120) + ' ' + (170 + Math.sin((i + 5) * 2.4) * 95)} fill="none" stroke="#007c76" opacity=".25"/><circle cx={x} cy={y} r={4 + i % 5} fill={i % 3 ? '#007c76' : '#b95040'} /></g>
      })}</g>}
      {kind === 'matrix' && <g>{Array.from({length: 120}, (_, i) => <rect key={i} x={90 + i % 15 * 28} y={54 + Math.floor(i / 15) * 28} width="23" height="23" rx="3" fill={i % 7 < 3 ? '#007c76' : '#b95040'} opacity={.15 + ((i * 17) % 19) / 23} />)}</g>}
      {kind === 'dashboard' && <g><rect x="55" y="45" width="490" height="250" rx="10" fill="white" stroke="#d8ddd5"/>
        <rect x="75" y="65" width="100" height="210" rx="4" fill="#10231f" />
        {[0,1,2,3].map(i => <path key={i} d={'M90 ' + (95 + i * 32) + 'H155'} stroke="#80b6ac" strokeWidth="5" />)}
        {[0,1,2].map(i => <rect key={i} x={195 + i * 106} y="65" width="92" height="45" rx="4" fill="#edf3ef" />)}
        <path d="M200 240L240 205L280 215L320 150L360 180L400 145L450 160L505 130" fill="none" stroke="#007c76" strokeWidth="4" />
        <path d="M200 260H510" stroke="#d8ddd5" /></g>}
      {kind === 'workflow' && <g>{[0,1,2,3].map(i => <g key={i}><path d={'M' + (92 + i * 125) + ' 170h125'} stroke="#007c76" opacity=".5"/><rect x={55 + i * 125} y={115 + i % 2 * 20} width="105" height="85" rx="8" fill={i % 2 ? '#10231f' : '#007c76'}/><circle cx={107 + i * 125} cy={155 + i % 2 * 20} r="14" fill="#edf3ef" opacity=".8"/></g>)}</g>}
    </svg>
    <figcaption>Schematic study · not a screenshot or research result</figcaption>
  </figure>
}
