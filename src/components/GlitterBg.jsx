// Partículas y bokeh generados una sola vez al cargar el módulo
const PARTICLES = Array.from({ length: 90 }, (_, i) => {
  // Pseudo-random determinista basado en índice
  const s = Math.sin(i * 9301 + 49297) * 233280
  const r = () => { const x = s + i; return Math.abs(Math.sin(x * 127.1 + i * 311.7)) }
  return {
    id: i,
    x: (Math.sin(i * 2.4 + 1) * 0.5 + 0.5) * 100,
    y: (Math.sin(i * 3.7 + 2) * 0.5 + 0.5) * 100,
    size: (Math.abs(Math.sin(i * 5.1)) * 2.2) + 0.4,
    duration: (Math.abs(Math.sin(i * 1.3)) * 4) + 2,
    delay: (Math.abs(Math.sin(i * 2.1)) * 5),
  }
})

const BOKEH = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (Math.sin(i * 3.8 + 0.5) * 0.5 + 0.5) * 100,
  y: (Math.sin(i * 5.2 + 1.2) * 0.5 + 0.5) * 100,
  size: (Math.abs(Math.sin(i * 2.3)) * 130) + 50,
  opacity: (Math.abs(Math.sin(i * 4.1)) * 0.06) + 0.01,
  duration: (Math.abs(Math.sin(i * 1.7)) * 10) + 8,
  delay: (Math.abs(Math.sin(i * 3.3)) * 6),
}))

export default function GlitterBg() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>

      {/* Partículas/destellos */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'white',
            opacity: 0.05,
            animation: `twinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Bokeh plateado difuminado */}
      {BOKEH.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(192,192,192,${b.opacity * 3.5}) 0%, rgba(192,192,192,${b.opacity}) 45%, transparent 70%)`,
            filter: 'blur(10px)',
            animation: `float ${b.duration}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* Glow central suave */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '75vw',
          height: '75vw',
          maxWidth: '440px',
          maxHeight: '440px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110,110,110,0.045) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />
    </div>
  )
}
