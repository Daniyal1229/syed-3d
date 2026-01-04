import { Text } from '@react-three/drei'

export default function Signboards() {
  return (
    <>
      {/* SIGNBOARD 1 - Home District Direction */}
      <group position={[-1, 0, 8]}>
        {/* Post */}
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
          <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Sign pointing left */}
        <group position={[0, 1.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
          <mesh castShadow>
            <boxGeometry args={[2.5, 0.8, 0.1]} />
            <meshStandardMaterial color="#1e40af" metalness={0.3} roughness={0.6} />
          </mesh>
          
          {/* Arrow */}
          <mesh position={[-1, 0, 0.06]}>
            <coneGeometry args={[0.2, 0.4, 3]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          
          <Text
            position={[0.3, 0, 0.06]}
            fontSize={0.25}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            HOME DISTRICT
          </Text>
        </group>
      </group>
      
      {/* SIGNBOARD 2 - Education District Direction */}
      <group position={[-2, 0, -13]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
          <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
        </mesh>
        
        <group position={[0, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[3.5, 0.8, 0.1]} />
            <meshStandardMaterial color="#7c2d12" metalness={0.3} roughness={0.6} />
          </mesh>
          
          <mesh position={[-1.5, 0, 0.06]} rotation={[0, 0, -Math.PI / 2]}>
            <coneGeometry args={[0.2, 0.4, 3]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          
          <Text
            position={[0.2, 0, 0.06]}
            fontSize={0.25}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            EDUCATION
          </Text>
        </group>
      </group>
      
      {/* SIGNBOARD 3 - Bridge Ahead */}
      <group position={[2, 0, -30]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
          <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
        </mesh>
        
        <group position={[0, 1.5, 0]}>
          <mesh castShadow>
            <boxGeometry args={[2.5, 0.8, 0.1]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.3} roughness={0.6} />
          </mesh>
          
          <Text
            position={[0, 0.2, 0.06]}
            fontSize={0.25}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            BRIDGE AHEAD
          </Text>
          
          <Text
            position={[0, -0.2, 0.06]}
            fontSize={0.15}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            Experience District
          </Text>
        </group>
      </group>
      
      {/* SIGNBOARD 4 - After Bridge */}
      <group position={[1, 0, -45]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
          <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
        </mesh>
        
        <group position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <mesh castShadow>
            <boxGeometry args={[3, 0.8, 0.1]} />
            <meshStandardMaterial color="#166534" metalness={0.3} roughness={0.6} />
          </mesh>
          
          <mesh position={[1.3, 0, 0.06]}>
            <coneGeometry args={[0.2, 0.4, 3]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          
          <Text
            position={[-0.2, 0, 0.06]}
            fontSize={0.22}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            EXPERIENCE
          </Text>
        </group>
      </group>
      
      {/* WELCOME SIGNBOARD - At entrance */}
      <group position={[0, 0, 15]}>
        <mesh castShadow position={[-2, 2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 4, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        
        <mesh castShadow position={[2, 2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 4, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        
        <mesh castShadow position={[0, 4, 0]}>
          <boxGeometry args={[5, 1.2, 0.15]} />
          <meshStandardMaterial color="#1e3a8a" metalness={0.4} roughness={0.5} />
        </mesh>
        
        <Text
          position={[0, 4.4, 0.1]}
          fontSize={0.4}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          DANIYAL SYED
        </Text>
        
        <Text
          position={[0, 3.9, 0.1]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Portfolio City
        </Text>
        
        <Text
          position={[0, 3.5, 0.1]}
          fontSize={0.15}
          color="#cccccc"
          anchorX="center"
          anchorY="middle"
        >
          Drive to Explore
        </Text>
      </group>
    </>
  )
}

