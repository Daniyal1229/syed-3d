import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import useStore from '../../store/useStore'

export default function StreetLights() {
  const lightsRef = useRef([])
  const isDay = useStore((state) => state.isDay)
  
  const positions = [
    [-4, 0, 5],
    [4, 0, 5],
    [-4, 0, 0],
    [4, 0, 0],
    [-4, 0, -10],
    [4, 0, -10],
    [-4, 0, -20],
    [4, 0, -20],
    [-4, 0, -30],
    [4, 0, -30],
    [-4, 0, -42],
    [4, 0, -42],
  ]
  
  useFrame((state) => {
    if (!isDay) {
      lightsRef.current.forEach((light, i) => {
        if (light) {
          light.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1
        }
      })
    }
  })
  
  return (
    <>
      {positions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Pole */}
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.1, 3, 8]} />
            <meshStandardMaterial color="#404040" />
          </mesh>
          
          {/* Lamp housing */}
          <mesh castShadow position={[0, 1.7, 0]}>
            <cylinderGeometry args={[0.2, 0.3, 0.3, 8]} />
            <meshStandardMaterial color="#222222" />
          </mesh>
          
          {/* Light bulb */}
          <mesh position={[0, 1.5, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color="#FFA500"
              emissive="#FFA500"
              emissiveIntensity={isDay ? 0 : 1}
            />
          </mesh>
          
          {/* Point light for night */}
          {!isDay && (
            <pointLight
              ref={(el) => (lightsRef.current[i] = el)}
              position={[0, 1.5, 0]}
              color="#FFA500"
              intensity={0.8}
              distance={8}
              castShadow
            />
          )}
        </group>
      ))}
    </>
  )
}

