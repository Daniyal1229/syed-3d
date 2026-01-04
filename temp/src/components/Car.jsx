
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useControls } from 'leva'

// Custom hook for wheel controls remains the same
function useWheelControls(wheelRef, isFront) {
  const speed = 5 // Base speed for rotation
  useFrame((state, delta) => {
    if (wheelRef.current) {
      if (state.controls?.up) {
        wheelRef.current.rotation.x += delta * speed
      }
      if (state.controls?.down) {
        wheelRef.current.rotation.x -= delta * speed
      }
      
      if (isFront) {
        let steering = 0
        if (state.controls?.left) steering = Math.PI / 8
        if (state.controls?.right) steering = -Math.PI / 8
        
        wheelRef.current.rotation.y = steering
      }
    }
  })
}

export default function Car() {
  const wheelFL = useRef()
  const wheelFR = useRef()
  const wheelBL = useRef()
  const wheelBR = useRef()
  
  useWheelControls(wheelFL, true)
  useWheelControls(wheelFR, true)
  useWheelControls(wheelBL, false)
  useWheelControls(wheelBR, false)
  
  const { bodyColor, chromeColor, tireColor, glassColor } = useControls({
    bodyColor: '#f0f0f0', // Classic white
    chromeColor: '#aaaaaa',
    tireColor: '#1a1a1a',
    glassColor: '#333333',
  })

  // Material definitions
  const bodyMaterial = { color: bodyColor, metalness: 0.5, roughness: 0.4 }
  const chromeMaterial = { color: chromeColor, metalness: 0.8, roughness: 0.2 }
  const tireMaterial = { color: tireColor, metalness: 0.3, roughness: 0.7 }
  const glassMaterial = { color: glassColor, transparent: true, opacity: 0.7, roughness: 0.2 }
  const headlightMaterial = { color: '#FFD700', emissive: '#FFD700', emissiveIntensity: 1.2 }
  const taillightMaterial = { color: '#D80000', emissive: '#FF0000', emissiveIntensity: 0.8 }
  const indicatorMaterial = { color: '#FFA500', emissive: '#FFA500', emissiveIntensity: 1 }

  return (
    <group rotation={[0, Math.PI / 2, 0]} scale={0.65}>
      {/* Main Body - Bolero's Boxy Shape */}
      <mesh castShadow receiveShadow position={[0, 1.4, 0]}>
        <boxGeometry args={[2.2, 1.4, 5]} />
        <meshStandardMaterial {...bodyMaterial} />
      </mesh>

      {/* Roof */}
      <mesh castShadow position={[0, 2.1, 0]}>
        <boxGeometry args={[2.1, 0.1, 5]} />
        <meshStandardMaterial {...bodyMaterial} />
      </mesh>

      {/* Cabin Structure */}
      <mesh castShadow position={[0, 2.1, -0.2]}>
          <boxGeometry args={[2.15, 1.2, 3.8]}/>
          <meshStandardMaterial {...bodyMaterial} />
      </mesh>

      {/* Hood */}
      <mesh castShadow position={[0, 1.5, -1.2]}>
        <boxGeometry args={[2.1, 0.6, 2.6]} />
        <meshStandardMaterial {...bodyMaterial} />
      </mesh>

      {/* Front Grille - Bolero Style */}
      <group position={[0, 1.3, -2.5]}>
        {/* Grille Frame */}
        <mesh>
            <boxGeometry args={[1.8, 0.8, 0.1]} />
            <meshStandardMaterial {...bodyMaterial} />
        </mesh>
        {/* Vertical Slats */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} castShadow position={[-0.625 + i * 0.25, 0, 0.05]}>
            <boxGeometry args={[0.08, 0.6, 0.05]} />
            <meshStandardMaterial {...chromeMaterial} />
          </mesh>
        ))}
      </group>

      {/* Headlights - Squared-off */}
      <mesh position={[-1, 1.3, -2.5]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial {...headlightMaterial} />
      </mesh>
      <mesh position={[1, 1.3, -2.5]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial {...headlightMaterial} />
      </mesh>

      {/* Indicator lights */}
       <mesh position={[-0.5, 1, -2.5]}>
        <boxGeometry args={[0.2, 0.1, 0.1]} />
        <meshStandardMaterial {...indicatorMaterial} />
      </mesh>
      <mesh position={[0.5, 1, -2.5]}>
        <boxGeometry args={[0.2, 0.1, 0.1]} />
        <meshStandardMaterial {...indicatorMaterial} />
      </mesh>

      {/* Bumpers */}
      <mesh castShadow position={[0, 0.7, -2.5]}>
        <boxGeometry args={[2.3, 0.3, 0.2]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh castShadow position={[0, 0.7, 2.5]}>
        <boxGeometry args={[2.3, 0.3, 0.2]} />
        <meshStandardMaterial color={"black"} />
      </mesh>

      {/* Windows */}
      <mesh position={[0, 2.2, -1.1]}> {/* Front */}
        <boxGeometry args={[2.0, 1, 0.05]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>
       <mesh position={[0, 2.2, 2.4]}> {/* Rear */}
        <boxGeometry args={[2.0, 1, 0.05]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>
      <mesh position={[-1.1, 2.2, 0.65]}> {/* Left */}
        <boxGeometry args={[0.05, 1, 3.5]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>
      <mesh position={[1.1, 2.2, 0.65]}> {/* Right */}
        <boxGeometry args={[0.05, 1, 3.5]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>

      {/* Wheels - Standard Bolero look */}
      {[[wheelFL, [-1.2, 0.8, -1.6]], [wheelFR, [1.2, 0.8, -1.6]], [wheelBL, [-1.2, 0.8, 1.7]], [wheelBR, [1.2, 0.8, 1.7]]].map(([ref, pos]) => (
        <group key={pos.toString()} ref={ref} position={pos}>
          <mesh castShadow>
            <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial {...tireMaterial} />
          </mesh>
          <mesh>
            <cylinderGeometry args={[0.25, 0.25, 0.31, 24]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial {...chromeMaterial} roughness={0.3} />
          </mesh>
        </group>
      ))}

      {/* Spare Tire on Rear */}
      <group position={[0, 1.4, 2.6]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[0, Math.PI / 2, 0]} />
          <meshStandardMaterial {...tireMaterial} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.2, 0.2, 0.21, 24]} rotation={[0, Math.PI / 2, 0]} />
          <meshStandardMaterial {...chromeMaterial} />
        </mesh>
      </group>

      {/* Side Mirrors */}
      <mesh castShadow position={[-1.15, 2.6, -0.8]}>
        <boxGeometry args={[0.1, 0.25, 0.2]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh castShadow position={[1.15, 2.6, -0.8]}>
        <boxGeometry args={[0.1, 0.25, 0.2]} />
        <meshStandardMaterial color={"black"} />
      </mesh>

      {/* Tail Lights - Simple vertical rectangles */}
      <mesh position={[-1, 1.5, 2.5]}>
        <boxGeometry args={[0.15, 0.5, 0.05]} />
        <meshStandardMaterial {...taillightMaterial} />
      </mesh>
      <mesh position={[1, 1.5, 2.5]}>
        <boxGeometry args={[0.15, 0.5, 0.05]} />
        <meshStandardMaterial {...taillightMaterial} />
      </mesh>
    </group>
  )
}
