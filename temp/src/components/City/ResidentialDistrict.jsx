import { Text } from '@react-three/drei'

export default function ResidentialDistrict() {
  return (
    <group position={[-25, 0, 15]}>
      {/* Modern House 1 - Main Home */}
      <group position={[0, 0, 0]}>
        {/* Foundation */}
        <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
          <boxGeometry args={[8, 0.4, 8]} />
          <meshStandardMaterial color="#d4d4d4" roughness={0.8} />
        </mesh>
        
        {/* First Floor */}
        <mesh castShadow receiveShadow position={[0, 2, 0]}>
          <boxGeometry args={[7, 3, 7]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.7} />
        </mesh>
        
        {/* Second Floor */}
        <mesh castShadow receiveShadow position={[0, 4.5, 0]}>
          <boxGeometry args={[6, 2, 6]} />
          <meshStandardMaterial color="#e5e5e5" roughness={0.7} />
        </mesh>
        
        {/* Roof */}
        <mesh castShadow position={[0, 6.2, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[5, 2, 4]} />
          <meshStandardMaterial color="#7f1d1d" roughness={0.6} />
        </mesh>
        
        {/* Windows - First Floor */}
        {[-2, 0, 2].map((x, i) => (
          <mesh key={`window1-${i}`} position={[x, 2, 3.51]}>
            <boxGeometry args={[1, 1.5, 0.05]} />
            <meshStandardMaterial 
              color="#87CEEB"
              transparent
              opacity={0.7}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
        
        {/* Windows - Second Floor */}
        {[-1.5, 1.5].map((x, i) => (
          <mesh key={`window2-${i}`} position={[x, 4.5, 3.01]}>
            <boxGeometry args={[1, 1.2, 0.05]} />
            <meshStandardMaterial 
              color="#87CEEB"
              transparent
              opacity={0.7}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
        
        {/* Main Door */}
        <mesh position={[0, 1.5, 3.51]}>
          <boxGeometry args={[1.2, 2.5, 0.1]} />
          <meshStandardMaterial color="#4a2511" roughness={0.8} />
        </mesh>
        
        {/* Door Frame */}
        <mesh position={[0, 1.5, 3.52]}>
          <boxGeometry args={[1.3, 2.6, 0.05]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Balcony */}
        <mesh castShadow position={[0, 3.8, 3.5]}>
          <boxGeometry args={[4, 0.1, 1.5]} />
          <meshStandardMaterial color="#d4d4d4" />
        </mesh>
        
        {/* Balcony Railing */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={`rail-${i}`} position={[-1.75 + i * 0.5, 4.3, 4.2]}>
            <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
            <meshStandardMaterial color="#333333" metalness={0.8} />
          </mesh>
        ))}
        
        {/* Garage */}
        <mesh castShadow receiveShadow position={[-5, 1.2, 0]}>
          <boxGeometry args={[3, 2.4, 4]} />
          <meshStandardMaterial color="#cccccc" roughness={0.8} />
        </mesh>
        
        {/* Garage Door */}
        <mesh position={[-5, 1.2, 2.01]}>
          <boxGeometry args={[2.5, 2, 0.1]} />
          <meshStandardMaterial color="#4a4a4a" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Chimney */}
        <mesh castShadow position={[-2, 7, -2]}>
          <boxGeometry args={[0.6, 2, 0.6]} />
          <meshStandardMaterial color="#8B4513" roughness={0.9} />
        </mesh>
        
        {/* Garden */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 8]}>
          <planeGeometry args={[10, 6]} />
          <meshStandardMaterial color="#2d5016" roughness={0.95} />
        </mesh>
        
        {/* Fence */}
        {Array.from({ length: 11 }).map((_, i) => (
          <mesh key={`fence-${i}`} castShadow position={[-5 + i, 0.8, 11]}>
            <boxGeometry args={[0.08, 1.6, 0.08]} />
            <meshStandardMaterial color="#8B4513" roughness={0.9} />
          </mesh>
        ))}
        
        {/* Mailbox */}
        <group position={[6, 0.8, 8]}>
          <mesh castShadow>
            <boxGeometry args={[0.4, 0.6, 0.3]} />
            <meshStandardMaterial color="#1e3a8a" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh castShadow position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
            <meshStandardMaterial color="#4a4a4a" />
          </mesh>
        </group>
        
        {/* House Number Sign */}
        <mesh position={[0, 3, 3.52]}>
          <boxGeometry args={[1, 0.5, 0.05]} />
          <meshStandardMaterial color="#1e3a8a" />
        </mesh>
        
        <Text
          position={[0, 3, 3.57]}
          fontSize={0.3}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          HOME
        </Text>
      </group>
      
      {/* Neighbor House 1 - For aesthetics */}
      <group position={[-12, 0, 0]}>
        <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
          <boxGeometry args={[6, 3, 6]} />
          <meshStandardMaterial color="#e8e8e8" roughness={0.7} />
        </mesh>
        
        <mesh castShadow position={[0, 3.5, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[7, 0.5, 7]} />
          <meshStandardMaterial color="#4a4a4a" roughness={0.6} />
        </mesh>
        
        {/* Windows */}
        {[-1.5, 1.5].map((x, i) => (
          <mesh key={`nh1-w-${i}`} position={[x, 1.5, 3.01]}>
            <boxGeometry args={[0.8, 1.2, 0.05]} />
            <meshStandardMaterial 
              color="#87CEEB"
              transparent
              opacity={0.7}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
      </group>
      
      {/* Neighbor House 2 */}
      <group position={[12, 0, 0]}>
        <mesh castShadow receiveShadow position={[0, 2, 0]}>
          <boxGeometry args={[7, 4, 6]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.7} />
        </mesh>
        
        <mesh castShadow position={[0, 4.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[5.5, 1.5, 4]} />
          <meshStandardMaterial color="#92400e" roughness={0.6} />
        </mesh>
        
        {/* Windows */}
        {[-2, 0, 2].map((x, i) => (
          <mesh key={`nh2-w-${i}`} position={[x, 2, 3.01]}>
            <boxGeometry args={[0.8, 1.2, 0.05]} />
            <meshStandardMaterial 
              color="#87CEEB"
              transparent
              opacity={0.7}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
      </group>
      
      {/* Street lamps */}
      {[-10, 0, 10].map((x, i) => (
        <group key={`lamp-${i}`} position={[x, 0, -8]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.1, 3.5, 8]} />
            <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.3} />
          </mesh>
          
          <mesh castShadow position={[0, 3.5, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial 
              color="#FFA500"
              emissive="#FFA500"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}
