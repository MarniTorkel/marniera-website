// A bounded circle network: no meshes, filters, or per-frame gradients.
const TAU = Math.PI * 2
const random = seed => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return value - Math.floor(value)
}
const colors = ['115, 193, 207', '146, 164, 223', '194, 163, 206']
const particles = Array.from({ length: 44 }, (_, i) => ({
  x: .04 + random(i + 1) * .92,
  y: .06 + random(i + 70) * .88,
  phase: random(i + 140) * TAU,
  speed: .16 + random(i + 210) * .15,
  radius: i % 7 === 0 ? 16 + random(i + 280) * 20 : 2 + random(i + 280) * 6,
  color: colors[i % colors.length],
  ring: i % 3 === 0,
}))

export function drawParticleScene(ctx, width, height, time) {
  if (!width || !height) return
  ctx.clearRect(0, 0, width, height)
  const scale = Math.min(1.2, Math.max(.65, width / 1200))
  const count = width < 680 ? 24 : particles.length
  const reach = Math.min(220, Math.max(125, width * .16))
  const points = particles.slice(0, count).map(p => ({
    ...p,
    x: p.x * width + Math.sin(time * p.speed + p.phase) * 28 * scale,
    y: p.y * height + Math.cos(time * p.speed * .8 + p.phase) * 24 * scale,
  }))

  ctx.lineWidth = .8
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const a = points[i]
      const b = points[j]
      const distanceSquared = (a.x - b.x) ** 2 + (a.y - b.y) ** 2
      if (distanceSquared >= reach * reach) continue
      ctx.strokeStyle = 'rgba(144, 186, 206, ' + (.24 * (1 - distanceSquared / (reach * reach))) + ')'
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }
  }

  for (const p of points) {
    const radius = p.radius * scale
    ctx.beginPath()
    ctx.arc(p.x, p.y, radius, 0, TAU)
    ctx.fillStyle = 'rgba(' + p.color + ', ' + (p.ring ? .045 : .48) + ')'
    ctx.fill()
    if (p.ring) {
      ctx.strokeStyle = 'rgba(' + p.color + ', .55)'
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }
}
