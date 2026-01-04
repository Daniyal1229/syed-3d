import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export default function Weather({ weatherEffect }) {
  const particlesRef = useRef()
  
  const particles = useMemo(() => {
    if (weatherEffect === 'clear') return null
    
    const count = 1000
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50
      positions[i + 1] = Math.random() * 30
      positions[i + 2] = (Math.random() - 0.5) * 50
    }
    
    return positions
  }, [weatherEffect])
  
  useFrame((state, delta) => {
    if (!particlesRef.current || weatherEffect === 'clear') return
    
    const positions = particlesRef.current.geometry.attributes.position.array
    
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= weatherEffect === 'rain' ? 0.3 : 0.1
      
      if (positions[i] < -1) {
        positions[i] = 30
      }
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })
  
  if (weatherEffect === 'clear' || !particles) return null
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={weatherEffect === 'rain' ? 0.1 : 0.2}
        color={weatherEffect === 'rain' ? '#4A90E2' : '#FFFFFF'}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

