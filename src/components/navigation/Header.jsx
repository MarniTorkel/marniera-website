import { useEffect, useRef, useState } from 'react'
import { navigation, hrefFor } from '../../data/navigation'

export default function Header({ page }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const triggers = useRef({})
  useEffect(() => { setMobileOpen(false); setExpanded(null) }, [page])
  useEffect(() => {
    const outside = event => { if (!headerRef.current?.contains(event.target)) { setExpanded(null); setMobileOpen(false) } }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [])
  const close = () => { setExpanded(null); setMobileOpen(false) }
  const escape = event => {
    if (event.key !== 'Escape') return
    if (expanded) { triggers.current[expanded]?.focus(); setExpanded(null) }
    else { setMobileOpen(false); menuRef.current?.focus() }
  }
  return (
    <header className="site-header portfolio-header" ref={headerRef} onKeyDown={escape}>
      <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus() }}>Skip to content</a>
      <a className="brand" href="#/" onClick={close} aria-label="Marniera home">
        <span className="brand-mark">M</span><span><strong>Marniera</strong><small>Research · AI · Data · Visualisation</small></span>
      </a>
      <button className="mobile-menu-button" ref={menuRef} type="button" aria-expanded={mobileOpen} aria-controls="site-navigation" onClick={() => setMobileOpen(value => !value)}>{mobileOpen ? 'Close menu' : 'Menu'}</button>
      <nav id="site-navigation" className={'portfolio-nav' + (mobileOpen ? ' is-open' : '')} aria-label="Primary navigation">
        <a href="#/" className="nav-link" aria-current={page === 'home' ? 'page' : undefined} onClick={close}>Home</a>
        {navigation.map(group => {
          const active = page === group.path || page.startsWith(group.path + '/') || (group.path === 'creative-lab' && page.startsWith('art'))
          if (!group.items.length) return <a key={group.path} href={hrefFor(group.path)} className="nav-link" aria-current={active ? 'page' : undefined} onClick={close}>{group.label}</a>
          return <div key={group.path} className="nav-group" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(current => current === group.path ? null : current) }}>
            <button className={'nav-link nav-group-button' + (active ? ' active' : '')} ref={node => { triggers.current[group.path] = node }} type="button" aria-expanded={expanded === group.path} aria-controls={'nav-' + group.path} onClick={() => setExpanded(expanded === group.path ? null : group.path)}>
              {group.label} <svg className="nav-chevron" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="nav-dropdown" id={'nav-' + group.path} hidden={expanded !== group.path}>
              {!group.items.some(item => item[1] === group.path) && <a href={hrefFor(group.path)} onClick={close}>Overview</a>}
              {group.items.map(([label, destination]) => <a key={destination} href={hrefFor(destination)} aria-current={page === destination ? 'page' : undefined} onClick={close}>{label}</a>)}
            </div>
          </div>
        })}
      </nav>
    </header>
  )
}
