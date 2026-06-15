import { useState } from 'react'

const ALIAS = 'miguelh1973'

function FamiliarCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ALIAS)
    } catch {
      // Fallback para navegadores sin clipboard API
      const el = document.createElement('input')
      el.value = ALIAS
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.focus()
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className="payment-card" style={{ padding: '32px 24px', textAlign: 'center' }}>

      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.55rem',
        letterSpacing: '0.3em',
        color: 'rgba(120,120,120,0.65)',
        textTransform: 'uppercase',
        marginBottom: '10px',
      }}>
        Valor de la tarjeta
      </p>

      <p
        className="silver-text"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '2.6rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          marginBottom: '24px',
        }}
      >
        $45.000
      </p>

      {/* Separador */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.28), transparent)', marginBottom: '24px' }} />

      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.55rem',
        letterSpacing: '0.3em',
        color: 'rgba(120,120,120,0.65)',
        textTransform: 'uppercase',
        marginBottom: '8px',
      }}>
        Transferí al alias
      </p>

      <p
        className="silver-text"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '1.25rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          marginBottom: '20px',
        }}
      >
        {ALIAS}
      </p>

      <button
        onClick={handleCopy}
        className={`copy-btn${copied ? ' copied' : ''}`}
      >
        {copied ? '✓ ¡Copiado!' : 'Copiar Alias'}
      </button>

    </div>
  )
}

function AmigoCard() {
  return (
    <div className="payment-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
      <p
        className="silver-text"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '0.3em',
          marginBottom: '16px',
        }}
      >
        ANITA
      </p>
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.25), transparent)', marginBottom: '20px' }} />
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: '1.2rem',
        color: 'rgba(205,205,205,0.82)',
        lineHeight: 1.8,
        letterSpacing: '0.02em',
      }}>
        ¡Sos parte de esta noche especial!
      </p>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: '0.95rem',
        color: 'rgba(155,155,155,0.65)',
        marginTop: '10px',
        letterSpacing: '0.03em',
        lineHeight: 1.7,
      }}>
        Tu presencia es el mejor regalo.<br />
        Con verte ahí, la noche será perfecta.
      </p>
    </div>
  )
}

export default function PaymentSection({ guestType }) {
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
          {guestType === 'FAMILIAR' ? 'Tarjeta' : 'Para Vos'}
        </span>
      </div>

      {guestType === 'FAMILIAR' ? <FamiliarCard /> : <AmigoCard />}

    </section>
  )
}
