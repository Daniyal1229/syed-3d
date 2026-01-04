import { Text } from '@react-three/drei'

export default function ExperienceBlock() {
  return (
    <group position={[25, 0, -50]}>
      {/* MODERN OFFICE TOWER - InspironLabs */}
      <group position={[0, 0, 0]}>
        {/* Main Tower */}
        <mesh castShadow receiveShadow position={[0, 8, 0]}>
          <boxGeometry args={[12, 16, 10]} />
          <meshStandardMaterial 
            color="#1e293b"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        
        {/* Glass Facade Effect */}
        {Array.from({ length: 8 }).map((_, floor) =>
          Array.from({ length: 6 }).map((_, col) => (
            <mesh
              key={`office-w-${floor}-${col}`}
              position={[-5 + col * 2, floor * 2, 5.01]}
            >
              <boxGeometry args={[1.5, 1.8, 0.05]} />
              <meshStandardMaterial 
                color="#3b82f6"
                transparent
                opacity={0.6}
                metalness={0.95}
                roughness={0.05}
                envMapIntensity={1.5}
              />
            </mesh>
          ))
        )}
        
        {/* Company Logo/Sign */}
        <mesh position={[0, 15, 5.02]}>
          <boxGeometry args={[10, 2, 0.15]} />
          <meshStandardMaterial 
            color="#dc2626"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        
        <Text
          position={[0, 15.5, 5.1]}
          fontSize={0.6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          InspironLabs
        </Text>
        
        <Text
          position={[0, 14.8, 5.1]}
          fontSize={0.25}
          color="#fde047"
          anchorX="center"
          anchorY="middle"
        >
          Software Systems
        </Text>
        
        {/* Role Banner */}
        <mesh position={[0, 13, 5.02]}>
          <boxGeometry args={[8, 1, 0.1]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
        
        <Text
          position={[0, 13, 5.07]}
          fontSize={0.35}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Software Developer
        </Text>
        
        {/* Experience Timeline */}
        <mesh position={[0, 12, 5.02]}>
          <boxGeometry args={[6, 0.6, 0.08]} />
          <meshStandardMaterial color="#374151" />
        </mesh>
        
        <Text
          position={[0, 12, 5.06]}
          fontSize={0.25}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          Nov 2024 - Present
        </Text>
        
        {/* Lobby/Entrance */}
        <mesh castShadow position={[0, 1.5, 5.5]}>
          <boxGeometry args={[6, 3, 1]} />
          <meshStandardMaterial 
            color="#1f2937"
            transparent
            opacity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Revolving Door Effect */}
        <mesh position={[0, 1.5, 5.51]}>
          <cylinderGeometry args={[1, 1, 3, 4]} />
          <meshStandardMaterial 
            color="#6b7280"
            transparent
            opacity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Helipad on Roof */}
        <mesh receiveShadow position={[0, 16.1, 0]}>
          <cylinderGeometry args={[3, 3, 0.2, 32]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
        
        <Text
          position={[0, 16.3, 0]}
          fontSize={1.5}
          color="#1e293b"
          anchorX="center"
          anchorY="middle"
          rotation={[-Math.PI / 2, 0, 0]}
        >
          H
        </Text>
        
        {/* Tech Stack Display Screens */}
        <group position={[-8, 0, 0]}>
          {/* Display Board Structure */}
          <mesh castShadow position={[0, 4, 0]}>
            <boxGeometry args={[0.3, 8, 6]} />
            <meshStandardMaterial color="#1f2937" metalness={0.7} />
          </mesh>
          
          {/* LED Display */}
          <mesh position={[-0.16, 4, 0]}>
            <boxGeometry args={[0.1, 7, 5]} />
            <meshStandardMaterial 
              color="#1e40af"
              emissive="#3b82f6"
              emissiveIntensity={0.5}
            />
          </mesh>
          
          <Text
            position={[-0.2, 6, 0]}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            TECH STACK
          </Text>
          
          <Text
            position={[-0.2, 5, 0]}
            fontSize={0.25}
            color="#fde047"
            anchorX="center"
            anchorY="middle"
          >
            React • TypeScript
          </Text>
          
          <Text
            position={[-0.2, 4.4, 0]}
            fontSize={0.25}
            color="#fde047"
            anchorX="center"
            anchorY="middle"
          >
            Node.js • MongoDB
          </Text>
          
          <Text
            position={[-0.2, 3.8, 0]}
            fontSize={0.25}
            color="#fde047"
            anchorX="center"
            anchorY="middle"
          >
            Material-UI • MobX
          </Text>
        </group>
        
        {/* Parking Lot */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 12]}>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#374151" roughness={0.9} />
        </mesh>
        
        {/* Parking Lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh
            key={`parking-${i}`}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[-7.5 + i * 3, 0.02, 12]}
          >
            <planeGeometry args={[2.5, 5]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        ))}
        
        {/* Office Campus Trees */}
        {[-10, -5, 5, 10].map((x, i) => (
          <group key={`office-tree-${i}`} position={[x, 0, 18]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.25, 0.3, 3, 8]} />
              <meshStandardMaterial color="#654321" roughness={1} />
            </mesh>
            <mesh castShadow position={[0, 3.5, 0]}>
              <sphereGeometry args={[1.2, 8, 8]} />
              <meshStandardMaterial color="#2d5016" roughness={0.9} />
            </mesh>
          </group>
        ))}
        
        {/* Company Banner Flags */}
        {[-6, 6].map((x, i) => (
          <group key={`flag-${i}`} position={[x, 0, 8]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.08, 0.08, 6, 16]} />
              <meshStandardMaterial color="#1f2937" metalness={0.8} />
            </mesh>
            <mesh position={[0, 5.5, 0.3]}>
              <boxGeometry args={[2, 1.5, 0.05]} />
              <meshStandardMaterial color="#dc2626" />
            </mesh>
          </group>
        ))}
        
        {/* Security Gate */}
        <group position={[0, 0, 18]}>
          <mesh castShadow position={[-3, 1.5, 0]}>
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#6b7280" metalness={0.7} />
          </mesh>
          
          <mesh castShadow position={[3, 1.5, 0]}>
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#6b7280" metalness={0.7} />
          </mesh>
          
          <mesh position={[0, 3, 0]}>
            <boxGeometry args={[6.5, 0.3, 0.3]} />
            <meshStandardMaterial color="#fbbf24" />
          </mesh>
          
          <Text
            position={[0, 3.3, 0]}
            fontSize={0.25}
            color="#1f2937"
            anchorX="center"
            anchorY="middle"
          >
            SECURE CAMPUS
          </Text>
        </group>
      </group>
      
      {/* Tech Park Project Showcase Area */}
      <group position={[18, 0, 0]}>
        <mesh castShadow receiveShadow position={[0, 3, 0]}>
          <boxGeometry args={[8, 6, 6]} />
          <meshStandardMaterial color="#f3f4f6" roughness={0.6} />
        </mesh>
        
        <Text
          position={[0, 5.5, 3.01]}
          fontSize={0.4}
          color="#1e40af"
          anchorX="center"
          anchorY="middle"
        >
          PROJECT SHOWCASE
        </Text>
        
        {/* Project Boards */}
        {[-2, 0, 2].map((y, i) => (
          <mesh key={`project-board-${i}`} position={[0, 3 + y, 3.02]}>
            <boxGeometry args={[6, 0.8, 0.05]} />
            <meshStandardMaterial color={['#dc2626', '#10b981', '#3b82f6'][i]} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

