export default function HeroSection() {
  return (
    <section style={{ padding: '60px 0 24px', textAlign: 'center' }}>

      {/* Línea decorativa superior */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(192,192,192,0.4))' }} />
        <span style={{ color: 'rgba(192,192,192,0.42)', fontSize: '10px', letterSpacing: '8px' }}>✦ ✦ ✦</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(192,192,192,0.4))' }} />
      </div>

      {/* Mis */}
      <p
        className="anim-fade-in"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '1rem',
          letterSpacing: '0.65em',
          color: 'rgba(180,180,180,0.6)',
          marginBottom: '2px',
          animationDelay: '0.1s',
        }}
      >
        Mis
      </p>

      {/* XV */}
      <p
        className="anim-fade-in silver-text"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '2.2rem',
          fontWeight: 700,
          letterSpacing: '0.55em',
          marginBottom: '10px',
          animationDelay: '0.2s',
        }}
      >
        XV
      </p>

      {/* ANITA — protagonista absoluta */}
      <h1
        className="anita-text"
        style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 900,
          fontSize: 'clamp(2.8rem, 13vw, 4.2rem)',
          letterSpacing: '0.1em',
          lineHeight: 0.95,
          marginBottom: '28px',
          width: '100%',
          textAlign: 'center',
          opacity: 0,
          animation: 'revealScale 1s ease-out 0.3s forwards, float 6s ease-in-out 1.4s infinite',
        }}
      >
        ANITA
      </h1>

      {/* Retrato de Anita */}
      <div style={{
        margin: '20px auto 0',
        width: '100%',
        maxWidth: '300px',
        position: 'relative',
      }}>
        {/* Marco plateado exterior */}
        <div style={{
          padding: '3px',
          background: 'linear-gradient(145deg, rgba(192,192,192,0.6), rgba(80,80,80,0.3), rgba(220,220,220,0.5))',
          borderRadius: '3px',
          boxShadow: '0 0 40px rgba(0,0,0,0.9), 0 0 20px rgba(192,192,192,0.08)',
        }}>
          {/* Marco interior negro + imagen */}
          <div style={{
            background: '#050505',
            padding: '3px',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img
              src="/img/anita.jpg"
              alt="Anita"
              style={{
                width: '100%',
                display: 'block',
                height: '380px',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                filter: 'contrast(1.05) brightness(0.92)',
              }}
            />
            {/* Viñeta inferior */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '90px',
              background: 'linear-gradient(to top, rgba(5,5,5,0.75), transparent)',
            }} />
          </div>
        </div>
      </div>

      {/* Fecha — debajo de la foto */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '22px' }}>
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(192,192,192,0.35))' }} />
        <p
          className="silver-text"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.82rem',
            letterSpacing: '0.42em',
            fontWeight: 400,
          }}
        >
          08 · 08 · 2026
        </p>
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(192,192,192,0.35))' }} />
      </div>

    </section>
  )
}
