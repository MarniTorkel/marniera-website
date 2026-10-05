import { useState } from 'react'
export default function GeometryHero() {
  const [paused, setPaused] = useState(false)
  return <section className="art-hero">
    <div><p className="eyebrow">Geometry Art / Marniera</p><h1>Geometry • Code • Art</h1><p className="hero-copy">Exploring mathematical patterns, generative systems and data-inspired visual forms through code.</p><p>From simple rules to complex visual structures.</p><div className="hero-actions"><a className="button primary" href="#/art/gallery">Explore the Gallery</a><a className="button secondary" href="#/art/generative">Generative Art</a></div></div>
    <div className="art-hero-visual"><svg className={paused ? 'art-hero-svg paused' : 'art-hero-svg'} viewBox="0 0 500 500" aria-hidden="true" focusable="false"><g>{Array.from({length: 18}, (_, i) => <ellipse key={i} cx="250" cy="250" rx="205" ry="88" transform={'rotate(' + i * 10 + ' 250 250)'} fill="none" stroke={i % 3 ? '#8bcbbf' : '#ddb38c'} strokeWidth="1.2" />)}</g><circle cx="250" cy="250" r="45" fill="none" stroke="#ddb38c"/></svg><button className="art-motion-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Resume motion' : 'Pause motion'}</button></div>
  </section>
}
