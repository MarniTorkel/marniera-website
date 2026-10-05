// Deterministic generative ribbons and shaded polygon meshes, drawn at 30 fps.
const TAU = Math.PI * 2
const palette = [195, 214, 242, 272, 318, 351, 24, 42]
const random = seed => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return value - Math.floor(value)
}

function sphere(ctx, x, y, radius, phase) {
  const rings = 7
  const segments = 12
  const faces = []
  const point = (row, column) => {
    const latitude = Math.PI * row / rings
    const longitude = TAU * column / segments + phase
    return {
      x: Math.sin(latitude) * Math.cos(longitude),
      y: Math.cos(latitude),
      z: Math.sin(latitude) * Math.sin(longitude),
    }
  }
  for (let row = 0; row < rings; row++) {
    for (let column = 0; column < segments; column++) {
      const points = [point(row, column), point(row + 1, column), point(row + 1, column + 1), point(row, column + 1)]
      const depth = points.reduce((sum, p) => sum + p.z, 0) / 4
      if (depth < 0) continue
      faces.push({ points, depth, row, column })
    }
  }
  faces.sort((a, b) => a.depth - b.depth)
  for (const face of faces) {
    const light = 35 + face.depth * 22 + (1 - face.row / rings) * 22
    const hue = 205 + 100 * Math.sin(face.column * .47 + phase) + face.row * 6
    ctx.fillStyle = 'hsl(' + hue + ' 70% ' + light + '%)'
    ctx.beginPath()
    face.points.forEach((p, i) => {
      const px = x + radius * (p.x * .94 + p.y * .22)
      const py = y + radius * (p.y * .94 - p.x * .22)
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    })
    ctx.closePath()
    ctx.fill()
  }
}

export function drawGeometryScene(ctx, width, height, time) {
  if (!width || !height) return
  ctx.clearRect(0, 0, width, height)
  const scale = Math.max(width / 1440, .55)
  const centerX = width * .78
  const centerY = height * .48
  const radius = Math.min(width * .31, height * .43)
  const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.8)
  glow.addColorStop(0, '#233557')
  glow.addColorStop(.55, '#172336')
  glow.addColorStop(1, '#101b28')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)

  // Hundreds of fine strands form a slowly breathing, twisted vortex.
  const strands = width < 680 ? 100 : 190
  for (let strand = 0; strand < strands; strand++) {
    const fraction = strand / strands
    const hue = palette[Math.floor(fraction * palette.length) % palette.length]
    ctx.strokeStyle = 'hsla(' + hue + ', 85%, ' + (57 + 20 * fraction) + '%, .52)'
    ctx.lineWidth = (.55 + random(strand) * 1.1) * scale
    ctx.beginPath()
    for (let step = 0; step <= 105; step++) {
      const u = step / 105
      const angle = u * TAU * 1.35 + fraction * 2.1 + time * .065
      const r = radius * (.12 + u * 1.65) + Math.sin(u * 11 + time * .25 + fraction * 5) * radius * .09
      const x = centerX + Math.cos(angle) * r + Math.sin(u * 6 + fraction * 4 + time * .13) * radius * .22
      const y = centerY + Math.sin(angle) * r * .85 + (fraction - .5) * radius * .65
      if (step === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  // A second current crosses the spiral to create depth and interwoven flow.
  for (let strand = 0; strand < 65; strand++) {
    ctx.strokeStyle = 'hsla(' + (195 + strand * 2.5) + ', 78%, 74%, .26)'
    ctx.lineWidth = .8 * scale
    ctx.beginPath()
    for (let step = 0; step <= 65; step++) {
      const u = step / 65
      const x = u * width
      const y = height * .76 - Math.sin(u * 5 + time * .09 + strand * .009) * height * .22 + strand * 2 * scale
      if (!step) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  const count = width < 680 ? 110 : 250
  for (let i = 0; i < count; i++) {
    const angle = random(i + 4) * TAU + time * (.012 + random(i + 7) * .024)
    const r = radius * (.3 + random(i + 8) * 1.75)
    const x = centerX + Math.cos(angle) * r
    const y = centerY + Math.sin(angle) * r * .86
    const size = (.5 + random(i + 9) * 1.9) * scale
    ctx.fillStyle = 'hsla(' + palette[i % palette.length] + ', 90%, 78%, ' + (.25 + random(i + 5) * .5) + ')'
    ctx.beginPath()
    ctx.arc(x, y, size, 0, TAU)
    ctx.fill()
  }
  for (let i = 0; i < 13; i++) {
    const angle = i * 2.4 + time * .025
    const r = radius * (.48 + random(i + 70) * .9)
    sphere(ctx, centerX + Math.cos(angle) * r, centerY + Math.sin(angle) * r * .82,
      (9 + random(i + 90) * 27) * scale, time * .12 + i)
  }
}
