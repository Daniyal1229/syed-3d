import { Sky, Environment, OrbitControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import useStore from '../store/useStore'
import Car from './Car/Car'
import City from './City/City'
import Lighting from './Scene/Lighting'
import Weather from './Scene/Weather'
import CameraController from './Scene/CameraController'
import DebugHelper from './DebugHelper'

export default function Experience() {
  const { isDay, weatherEffect } = useStore()
  const [debugMode, setDebugMode] = useState(false)

  useEffect(() => {
    const handleDebug = (e) => {
      if (e.key === 'd' || e.key === 'D') {
        setDebugMode(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleDebug)
    return () => window.removeEventListener('keydown', handleDebug)
  }, [])

  return (
    <>
      {/* Sky - Fixed visibility */}
      <Sky
        distance={450000}
        sunPosition={isDay ? [0, 1, 0] : [0, -0.1, 0]}
        turbidity={8}
        rayleigh={isDay ? 2 : 0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      
      {/* Lighting */}
      <Lighting isDay={isDay} />
      
      {/* Environment for reflections */}
      <Environment preset={isDay ? "sunset" : "night"} />
      
      {/* Weather Effects */}
      <Weather weatherEffect={weatherEffect} />
      
      {/* Debug helpers (press D to toggle) */}
      {debugMode && (
        <>
          <DebugHelper />
          <OrbitControls />
        </>
      )}
      
      {/* Car */}
      <Car />
      
      {/* Camera Controller - only when not in debug mode */}
      {!debugMode && <CameraController />}
      
      {/* City */}
      <City />
    </>
  )
}

