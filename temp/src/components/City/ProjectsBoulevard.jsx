import { Text } from '@react-three/drei'

export default function ProjectsBoulevard() {
  return (
    <group position={[0, 0, -42]}>
      {/* Billboard 1 - Healthcare System */}
      <group position={[-7, 0, 0]}>
        <mesh castShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        
        <mesh castShadow position={[0, 2.5, 0]}>
          <boxGeometry args={[4, 3, 0.2]} />
          <meshStandardMaterial color="#2ECC71" />
        </mesh>
        
        <Text
          position={[0, 3.5, 0.15]}
          fontSize={0.25}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Healthcare
        </Text>
        
        <Text
          position={[0, 3.1, 0.15]}
          fontSize={0.2}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Credentialing
        </Text>
        
        <Text
          position={[0, 2.7, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          React • TypeScript
        </Text>
        
        <Text
          position={[0, 2.4, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          Material-UI • MobX
        </Text>
        
        {/* Medical cross decoration */}
        <mesh position={[0, 1.8, 0.15]}>
          <boxGeometry args={[0.5, 0.15, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        
        <mesh position={[0, 1.8, 0.15]}>
          <boxGeometry args={[0.15, 0.5, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>
      
      {/* Billboard 2 - Chat App */}
      <group position={[0, 0, 0]}>
        <mesh castShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        
        <mesh castShadow position={[0, 3, 0]}>
          <boxGeometry args={[4, 4, 0.2]} />
          <meshStandardMaterial color="#3498DB" />
        </mesh>
        
        <Text
          position={[0, 4.2, 0.15]}
          fontSize={0.3}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Real-time
        </Text>
        
        <Text
          position={[0, 3.8, 0.15]}
          fontSize={0.3}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Chat App
        </Text>
        
        <Text
          position={[0, 3.3, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          React • Node.js
        </Text>
        
        <Text
          position={[0, 3, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          Socket.io • MongoDB
        </Text>
        
        <Text
          position={[0, 2.7, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          Chakra UI
        </Text>
        
        {/* Chat bubbles decoration */}
        <mesh position={[-0.8, 2.2, 0.15]}>
          <boxGeometry args={[0.6, 0.4, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        
        <mesh position={[0.8, 1.9, 0.15]}>
          <boxGeometry args={[0.6, 0.4, 0.05]} />
          <meshStandardMaterial color="#E8F5E9" />
        </mesh>
      </group>
      
      {/* Billboard 3 - Computer Pointer Controller */}
      <group position={[7, 0, 0]}>
        <mesh castShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        
        <mesh castShadow position={[0, 2.5, 0]}>
          <boxGeometry args={[4, 3, 0.2]} />
          <meshStandardMaterial color="#9B59B6" />
        </mesh>
        
        <Text
          position={[0, 3.5, 0.15]}
          fontSize={0.22}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Hand Gesture
        </Text>
        
        <Text
          position={[0, 3.1, 0.15]}
          fontSize={0.22}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Mouse Control
        </Text>
        
        <Text
          position={[0, 2.7, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          Python • OpenCV
        </Text>
        
        <Text
          position={[0, 2.4, 0.15]}
          fontSize={0.15}
          color="#ECF0F1"
          anchorX="center"
          anchorY="middle"
        >
          Computer Vision
        </Text>
        
        {/* Hand icon representation */}
        <mesh position={[0, 1.8, 0.15]}>
          <boxGeometry args={[0.5, 0.7, 0.05]} />
          <meshStandardMaterial color="#FFE0B2" />
        </mesh>
      </group>
      
      {/* Main sign */}
      <group position={[0, 0, -4]}>
        <mesh castShadow position={[0, 3, 0]}>
          <boxGeometry args={[10, 1.5, 0.3]} />
          <meshStandardMaterial color="#E74C3C" />
        </mesh>
        
        <Text
          position={[0, 3, 0.2]}
          fontSize={0.5}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          🚀 PROJECTS BOULEVARD
        </Text>
      </group>
      
      {/* Decorative project markers */}
      {[-7, 0, 7].map((x, i) => (
        <mesh key={i} position={[x, 0, -2]} castShadow>
          <coneGeometry args={[0.3, 0.8, 4]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      ))}
    </group>
  )
}

