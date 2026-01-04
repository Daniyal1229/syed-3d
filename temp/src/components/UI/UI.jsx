import { useState, useEffect } from 'react'
import useStore from '../../store/useStore'
import InfoPopup from './InfoPopup'
import Controls from './Controls'
import MiniMap from './MiniMap'
import MusicController from './MusicController'
import WelcomeSign from './WelcomeSign'

export default function UI() {
  const { showPopup, isDay, weatherEffect, toggleDayNight, setWeatherEffect } = useStore()
  
  const [showWelcome, setShowWelcome] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  
  const cycleWeather = () => {
    const weathers = ['clear', 'rain', 'snow']
    const currentIndex = weathers.indexOf(weatherEffect)
    const nextIndex = (currentIndex + 1) % weathers.length
    setWeatherEffect(weathers[nextIndex])
  }
  
  return (
    <div className="ui-container">
      {/* Welcome Sign */}
      {showWelcome && <WelcomeSign />}
      
      {/* Music Controller */}
      <MusicController />
      
      {/* Controls Info */}
      <Controls />
      
      {/* Mini Map */}
      <MiniMap />
      
      {/* Environment Controls */}
      <div className="controls-toggle">
        <button
          className={`toggle-button ${isDay ? 'active' : ''}`}
          onClick={toggleDayNight}
        >
          {isDay ? '☀️ Day' : '🌙 Night'}
        </button>
        
        <button
          className="toggle-button"
          onClick={cycleWeather}
        >
          {weatherEffect === 'clear' && '☀️ Clear'}
          {weatherEffect === 'rain' && '🌧️ Rain'}
          {weatherEffect === 'snow' && '❄️ Snow'}
        </button>
      </div>
      
      {/* Info Popup */}
      {showPopup && <InfoPopup />}
    </div>
  )
}

