const ClockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(192,192,192,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const PinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(192,192,192,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const labelStyle = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.52rem',
  letterSpacing: '0.28em',
  color: 'rgba(120,120,120,0.65)',
  textTransform: 'uppercase',
  marginBottom: '3px',
  display: 'block',
}

const valueStyle = {
  fontFamily: "'Cinzel', serif",
  fontSize: '1.3rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
}

const subStyle = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.65rem',
  color: 'rgba(145,145,145,0.65)',
  marginTop: '4px',
  letterSpacing: '0.04em',
  lineHeight: 1.5,
}

export default function EventDetails() {
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
          Detalles del Evento
        </span>
      </div>

      {/* Horario */}
      <div className="detail-item">
        <div style={{ flexShrink: 0, marginTop: '2px' }}><ClockIcon /></div>
        <div>
          <span style={labelStyle}>Horario</span>
          <span className="silver-text" style={valueStyle}>22:00 hs</span>
        </div>
      </div>

      {/* Lugar */}
      <div className="detail-item">
        <div style={{ flexShrink: 0, marginTop: '2px' }}><PinIcon /></div>
        <div>
          <span style={labelStyle}>Lugar</span>
          <span className="silver-text" style={{ ...valueStyle, fontSize: '1.05rem' }}>Club Médico del Sur</span>
          <p style={subStyle}>
            López y Planes · T4146<br />
            Concepción, Tucumán
          </p>
        </div>
      </div>

      {/* Mapa */}
      <div className="map-container">
        <iframe
          title="Club Médico del Sur"
          src="https://maps.google.com/maps?q=-27.3513373,-65.6073629&z=17&hl=es&output=embed"
          width="100%"
          height="280"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </section>
  )
}
