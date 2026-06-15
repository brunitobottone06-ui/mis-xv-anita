import HeroSection from './HeroSection'
import Countdown from './Countdown'
import EventDetails from './EventDetails'
import PaymentSection from './PaymentSection'
import RSVPSection from './RSVPSection'

export default function MainCard({ guestType }) {
  return (
    <div style={{ padding: '0 22px 80px', maxWidth: '480px', margin: '0 auto' }}>

      <HeroSection />
      <Countdown />
      <EventDetails />
      <PaymentSection guestType={guestType} />
      <RSVPSection />

      {/* Cierre ornamental */}
      <div style={{ marginTop: '60px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(192,192,192,0.3))' }} />
          <span style={{ color: 'rgba(192,192,192,0.35)', fontSize: '10px', letterSpacing: '6px' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(192,192,192,0.3))' }} />
        </div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '0.8rem',
          color: 'rgba(130,130,130,0.45)',
          letterSpacing: '0.12em',
        }}>
          Con amor, la familia Hernández Recio!
        </p>

        <a
          href="https://www.instagram.com/ph_brunitobottone/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.52rem',
            letterSpacing: '0.18em',
            color: 'rgba(100,100,100,0.38)',
            textDecoration: 'none',
            marginTop: '8px',
          }}
        >
          Desarrollado por @ph_brunitobottone
        </a>
      </div>

    </div>
  )
}
