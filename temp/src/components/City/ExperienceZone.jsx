import { Text } from '@react-three/drei'

export default function ExperienceZone() {
  return (
    <group position={[0, 0, -30]}>
      {/* Modern office building */}
      <group position={[7, 0, 0]}>
        {/* Main building */}
        <mesh castShadow position={[0, 3, 0]}>
          <boxGeometry args={[5, 6, 4]} />
          <meshStandardMaterial color="#2C3E50" metalness={0.3} roughness={0.5} />
        </mesh>
        
        {/* Glass windows grid */}
        {Array.from({ length: 4 }).map((_, floor) =>
          Array.from({ length: 3 }).map((_, col) => (
            <mesh
              key={`window-${floor}-${col}`}
              position={[-1.5 + col * 1.5, floor * 1.2 + 0.5, 2.01]}
            >
              <planeGeometry args={[0.8, 0.9]} />
              <meshStandardMaterial
                color="#87CEEB"
                transparent
                opacity={0.6}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          ))
        )}
        
        {/* Company logo/name */}
        <mesh castShadow position={[0, 6.5, 0]}>
          <boxGeometry args={[5.5, 0.8, 4.5]} />
          <meshStandardMaterial color="#E74C3C" />
        </mesh>
        
        <Text
          position={[0, 6.5, 2.3]}
          fontSize={0.35}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          InspironLabs
        </Text>
        
        <Text
          position={[0, 5.5, 2.01]}
          fontSize={0.2}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          Software Developer
        </Text>
        
        <Text
          position={[0, 5, 2.01]}
          fontSize={0.18}
          color="#BDC3C7"
          anchorX="center"
          anchorY="middle"
        >
          Nov 2024 - Present
        </Text>
        
        {/* Entrance */}
        <mesh position={[0, 0.8, 2.01]}>
          <boxGeometry args={[1.2, 1.8, 0.1]} />
          <meshStandardMaterial color="#34495E" metalness={0.5} />
        </mesh>
        
        {/* Door handle */}
        <mesh position={[0.4, 0.8, 2.06]}>
          <boxGeometry args={[0.1, 0.05, 0.05]} />
          <meshStandardMaterial color="#FFD700" metalness={1} roughness={0} />
        </mesh>
      </group>
      
      {/* Tech stack icons as decorative elements */}
      <group position={[-7, 0, 0]}>
        {/* React logo representation */}
        <mesh castShadow position={[0, 1.5, 0]}>
          <torusGeometry args={[0.8, 0.1, 16, 50]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
        </mesh>
        
        <mesh castShadow position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 3]}>
          <torusGeometry args={[0.8, 0.1, 16, 50]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
        </mesh>
        
        <mesh castShadow position={[0, 1.5, 0]} rotation={[0, 0, -Math.PI / 3]}>
          <torusGeometry args={[0.8, 0.1, 16, 50]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
        </mesh>
        
        <mesh castShadow position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.5} />
        </mesh>
        
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.25}
          color="#61DAFB"
          anchorX="center"
          anchorY="middle"
        >
          React
        </Text>
      </group>
      
      {/* Parking lot lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-5 + i * 2, -0.48, 3]}
        >
          <planeGeometry args={[1.5, 3]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      ))}
    </group>
  )
}

