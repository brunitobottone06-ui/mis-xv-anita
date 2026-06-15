import { useState, useRef, useEffect } from 'react'
import GlitterBg from './components/GlitterBg'
import LandingScreen from './components/LandingScreen'
import MainCard from './components/MainCard'
import './index.css'

export default function App() {
  const [screen, setScreen] = useState('landing')
  const [guestType, setGuestType] = useState(null)
  const audioRef = useRef(null)

  const handleGuestSelect = (type) => {
    setGuestType(type)
    setScreen('main')
    if (audioRef.current) {
      audioRef.current.volume = 0.55
      audioRef.current.play().catch(() => {})
    }
  }

  useEffect(() => {
    if (screen === 'main') window.scrollTo({ top: 0, behavior: 'instant' })
  }, [screen])

  return (
    <div style={{ position: 'relative', minHeight: '100svh', background: '#050505', overflowX: 'hidden' }}>
      <GlitterBg />

      {/* Audio — el usuario debe colocar el archivo en /public/audio/every-breath.mp3 */}
      <audio ref={audioRef} src="/audio/every-breath.mp3" loop preload="auto" />

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100svh' }}>
        {screen === 'landing' ? (
          <LandingScreen onSelect={handleGuestSelect} />
        ) : (
          <MainCard guestType={guestType} />
        )}
      </div>
    </div>
  )
}
