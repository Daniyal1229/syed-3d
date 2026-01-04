import { Text } from '@react-three/drei'

export default function HomeArea() {
  return (
    <group position={[0, 0, 0]}>
      {/* House base */}
      <mesh castShadow position={[6, 1, 0]}>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#FFA07A" />
      </mesh>
      
      {/* Roof */}
      <mesh castShadow position={[6, 2.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[3, 1.5, 4]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>
      
      {/* Door */}
      <mesh position={[6, 0.8, 2.01]}>
        <boxGeometry args={[0.8, 1.5, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* Windows */}
      <mesh position={[7.5, 1.2, 2.01]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      
      <mesh position={[4.5, 1.2, 2.01]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      
      {/* Sign */}
      <Text
        position={[6, 3.5, 0]}
        fontSize={0.3}
        color="#333333"
        anchorX="center"
        anchorY="middle"
      >
        HOME
      </Text>
      
      {/* Mailbox */}
      <group position={[9, 0.5, 2]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.6, 0.3]} />
          <meshStandardMaterial color="#E63946" />
        </mesh>
        <mesh castShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>
      
      {/* Garden decorations */}
      <mesh castShadow position={[5, 0.2, 3]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      
      <mesh castShadow position={[7, 0.2, 3]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  )
}

