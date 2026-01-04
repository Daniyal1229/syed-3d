import { Text } from '@react-three/drei'

export default function EntranceGate() {
  return (
    <group position={[0, 0, 7]}>
      {/* Left pillar */}
      <mesh castShadow position={[-3, 2, 0]}>
        <boxGeometry args={[0.8, 4, 0.8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Right pillar */}
      <mesh castShadow position={[3, 2, 0]}>
        <boxGeometry args={[0.8, 4, 0.8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Top beam */}
      <mesh castShadow position={[0, 4, 0]}>
        <boxGeometry args={[7, 0.5, 0.8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* Welcome text */}
      <Text
        position={[0, 4.5, 0]}
        fontSize={0.4}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
      >
        DANIYAL SYED
      </Text>
      
      <Text
        position={[0, 3.8, 0]}
        fontSize={0.25}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        Portfolio City
      </Text>
      
      {/* Decorative elements */}
      <mesh position={[-3, 4.5, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>
      
      <mesh position={[3, 4.5, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

