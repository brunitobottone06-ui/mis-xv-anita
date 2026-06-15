import { useState, useEffect } from 'react'

// 8 de agosto de 2026 a las 22:00 (hora local Argentina)
const EVENT_DATE = new Date(2026, 7, 8, 22, 0, 0)

function getTimeLeft() {
  const diff = EVENT_DATE - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Días',   value: time.days },
    { label: 'Horas',  value: time.hours },
    { label: 'Min',    value: time.minutes },
    { label: 'Seg',    value: time.seconds },
  ]

  return (
    <section style={{ margin: '32px 0' }}>

      <div className="ornament-divider" style={{ marginBottom: '20px' }}>
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.56rem',
          letterSpacing: '0.3em',
          color: 'rgba(150,150,150,0.6)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          Cuenta Regresiva
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-box">
            <span
              className="silver-text"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.6rem, 7vw, 2.1rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                display: 'block',
              }}
            >
              {String(value).padStart(2, '0')}
            </span>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.48rem',
              letterSpacing: '0.14em',
              color: 'rgba(140,140,140,0.65)',
              textTransform: 'uppercase',
              marginTop: '6px',
              display: 'block',
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}
