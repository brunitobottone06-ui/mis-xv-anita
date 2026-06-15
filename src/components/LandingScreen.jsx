const S = {
  wrap: {
    minHeight: '100svh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 28px',
  },
  diamondRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '32px',
  },
  line: (dir) => ({
    flex: 1,
    height: '1px',
    maxWidth: '60px',
    background: `linear-gradient(to ${dir}, transparent, rgba(192,192,192,0.45))`,
  }),
  diamond: {
    color: 'rgba(192,192,192,0.45)',
    fontSize: '10px',
    letterSpacing: '6px',
  },
  misLabel: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontSize: '1.05rem',
    letterSpacing: '0.6em',
    color: 'rgba(180,180,180,0.6)',
    marginBottom: '2px',
  },
  xvLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: '2.6rem',
    fontWeight: 700,
    letterSpacing: '0.55em',
    marginBottom: '10px',
  },
  anitaName: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 900,
    fontSize: 'clamp(2.8rem, 13vw, 4.2rem)',
    letterSpacing: '0.1em',
    lineHeight: 1,
    marginBottom: '40px',
    width: '100%',
    textAlign: 'center',
  },
  cta: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.62rem',
    letterSpacing: '0.26em',
    color: 'rgba(170,170,170,0.6)',
    textTransform: 'uppercase',
    marginBottom: '28px',
    textAlign: 'center',
  },
  btnWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    width: '100%',
    maxWidth: '280px',
  },
  footer: {
    marginTop: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  footerDate: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    letterSpacing: '0.35em',
    color: 'rgba(120,120,120,0.45)',
  },
}

export default function LandingScreen({ onSelect }) {
  return (
    <div style={{ ...S.wrap, position: 'relative' }}>

      {/* Foto de fondo con overlay oscuro */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          src="/img/anita.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            opacity: 0.28,
            filter: 'grayscale(15%) contrast(1.05)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.45) 35%, rgba(5,5,5,0.45) 65%, #050505 100%)',
        }} />
      </div>

      {/* Contenido (sobre la foto) */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

      {/* ✦ ✦ ✦ */}
      <div className="anim-fade-in" style={{ ...S.diamondRow, animationDelay: '0.2s' }}>
        <div style={S.line('right')} />
        <span style={S.diamond}>✦ ✦ ✦</span>
        <div style={S.line('left')} />
      </div>

      {/* Mis */}
      <p className="anim-fade-in" style={{ ...S.misLabel, animationDelay: '0.45s' }}>
        Mis
      </p>

      {/* XV */}
      <p className="anim-fade-in silver-text" style={{ ...S.xvLabel, animationDelay: '0.6s' }}>
        XV
      </p>

      {/* ANITA */}
      <h1 className="anim-fade-in anita-text" style={{ ...S.anitaName, animationDelay: '0.8s' }}>
        ANITA
      </h1>

      {/* Divider */}
      <div
        className="ornament-divider anim-fade-in"
        style={{ width: '100%', maxWidth: '260px', marginBottom: '32px', animationDelay: '1s' }}
      >
        <span style={{ color: 'rgba(192,192,192,0.42)', fontSize: '13px' }}>◆</span>
      </div>

      {/* CTA */}
      <p className="anim-fade-in" style={{ ...S.cta, animationDelay: '1.15s' }}>
        Seleccioná cómo nos vas a acompañar
      </p>

      {/* Buttons */}
      <div className="anim-fade-in" style={{ ...S.btnWrap, animationDelay: '1.3s' }}>
        <button className="guest-btn" onClick={() => onSelect('FAMILIAR')}>
          Familiar
        </button>
        <button className="guest-btn" onClick={() => onSelect('AMIGO')}>
          Amigo
        </button>
      </div>

      {/* Footer */}
      <div className="anim-fade-in" style={{ ...S.footer, animationDelay: '1.5s' }}>
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.35), transparent)' }} />
        <p style={S.footerDate}>08 · 08 · 2026</p>
      </div>

      </div> {/* fin contenido */}
    </div>
  )
}
