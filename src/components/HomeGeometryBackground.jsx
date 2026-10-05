import { useEffect, useRef, useState } from 'react'
import { drawParticleScene } from './particleScene'

export default function HomeGeometryBackground() {
  const canvasRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (!context) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let last = 0
    let visible = true
    let width = 0
    let height = 0

    const draw = () => drawParticleScene(context, width, height, timeRef.current)
    const tick = now => {
      if (last && now - last < 32) {
        frame = requestAnimationFrame(tick)
        return
      }
      if (last) timeRef.current += Math.min(now - last, 64) / 1000
      last = now
      draw()
      frame = requestAnimationFrame(tick)
    }
    const sync = () => {
      cancelAnimationFrame(frame)
      last = 0
      draw()
      if (!paused && !motion.matches && !document.hidden && visible) {
        frame = requestAnimationFrame(tick)
      }
    }
    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      sync()
    }
    const sizeObserver = new ResizeObserver(resize)
    const visibilityObserver = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting
      sync()
    })
    sizeObserver.observe(canvas)
    visibilityObserver.observe(canvas)
    motion.addEventListener('change', sync)
    document.addEventListener('visibilitychange', sync)
    resize()
    return () => {
      cancelAnimationFrame(frame)
      sizeObserver.disconnect()
      visibilityObserver.disconnect()
      motion.removeEventListener('change', sync)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [paused])

  return (
    <>
      <div className="home-geometry" aria-hidden="true">
        <canvas ref={canvasRef} className="geometry-canvas" />
      </div>
      <button className="geometry-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
        {paused ? 'Resume background animation' : 'Pause background animation'}
      </button>
    </>
  )
}
