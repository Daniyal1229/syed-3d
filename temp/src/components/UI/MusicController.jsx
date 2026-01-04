import { useEffect, useRef } from 'react'
import useStore from '../../store/useStore'

export default function MusicController() {
  const { musicPlaying, toggleMusic } = useStore()
  const audioRef = useRef(null)
  
  useEffect(() => {
    // Note: You would need to add an actual audio file to public folder
    // For now, this is just the UI component
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play might be blocked by browser
          console.log('Audio playback blocked')
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [musicPlaying])
  
  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/background.mp3"
        preload="auto"
      />
      
      <button
        className="music-toggle"
        onClick={toggleMusic}
        title={musicPlaying ? 'Pause Music' : 'Play Music'}
      >
        {musicPlaying ? '🔊' : '🔇'}
      </button>
    </>
  )
}

