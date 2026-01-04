import { Text } from '@react-three/drei'

export default function EducationBlock() {
  return (
    <group position={[-25, 0, -25]}>
      {/* SCHOOL 1 - St. Anthony's (Modern School Building) */}
      <group position={[0, 0, 0]}>
        {/* Main Building */}
        <mesh castShadow receiveShadow position={[0, 3, 0]}>
          <boxGeometry args={[12, 6, 8]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.7} />
        </mesh>
        
        {/* Entrance Canopy */}
        <mesh castShadow position={[0, 2, 4.5]}>
          <boxGeometry args={[4, 0.3, 1.5]} />
          <meshStandardMaterial color="#dc2626" roughness={0.6} />
        </mesh>
        
        {/* School Name Board */}
        <mesh position={[0, 5.5, 4.01]}>
          <boxGeometry args={[8, 1, 0.1]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
        </mesh>
        
        <Text
          position={[0, 5.9, 4.06]}
          fontSize={0.35}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          St. Anthony's School
        </Text>
        
        <Text
          position={[0, 5.3, 4.06]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          2016-2017
        </Text>
        
        {/* Windows Grid - Realistic pattern */}
        {Array.from({ length: 3 }).map((_, floor) =>
          Array.from({ length: 6 }).map((_, col) => (
            <mesh
              key={`school1-w-${floor}-${col}`}
              position={[-5 + col * 2, 1.5 + floor * 2, 4.01]}
            >
              <boxGeometry args={[1, 1.2, 0.05]} />
              <meshStandardMaterial 
                color="#b3e5fc"
                transparent
                opacity={0.8}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          ))
        )}
        
        {/* School Flag Pole */}
        <mesh castShadow position={[8, 5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 10, 16]} />
          <meshStandardMaterial color="#d4d4d4" metalness={0.9} roughness={0.2} />
        </mesh>
        
        <mesh position={[8, 9.5, 0]}>
          <boxGeometry args={[1.5, 1, 0.05]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
        
        {/* Playground Equipment */}
        <group position={[-8, 0, 8]}>
          {/* Swing Set */}
          <mesh castShadow position={[0, 1.5, 0]}>
            <boxGeometry args={[3, 0.1, 0.1]} />
            <meshStandardMaterial color="#fbbf24" metalness={0.7} />
          </mesh>
          
          <mesh castShadow position={[-1, 0.7, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        </group>
      </group>
      
      {/* COLLEGE - SET PU (Taller, Modern Building) */}
      <group position={[15, 0, 0]}>
        {/* Main Tower */}
        <mesh castShadow receiveShadow position={[0, 4.5, 0]}>
          <boxGeometry args={[10, 9, 8]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.6} />
        </mesh>
        
        {/* Top Section */}
        <mesh castShadow position={[0, 9.5, 0]}>
          <boxGeometry args={[10.5, 1, 8.5]} />
          <meshStandardMaterial color="#92400e" roughness={0.7} />
        </mesh>
        
        {/* College Name */}
        <mesh position={[0, 8, 4.01]}>
          <boxGeometry args={[8, 1.2, 0.1]} />
          <meshStandardMaterial color="#0c4a6e" roughness={0.5} />
        </mesh>
        
        <Text
          position={[0, 8.4, 4.06]}
          fontSize={0.35}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          SET PU College
        </Text>
        
        <Text
          position={[0, 7.8, 4.06]}
          fontSize={0.2}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          2017-2019
        </Text>
        
        {/* Windows - Multiple Floors */}
        {Array.from({ length: 4 }).map((_, floor) =>
          Array.from({ length: 5 }).map((_, col) => (
            <mesh
              key={`college-w-${floor}-${col}`}
              position={[-4 + col * 2, 2 + floor * 2, 4.01]}
            >
              <boxGeometry args={[1.2, 1.5, 0.05]} />
              <meshStandardMaterial 
                color="#bfdbfe"
                transparent
                opacity={0.8}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          ))
        )}
        
        {/* Main Entrance */}
        <mesh position={[0, 1.5, 4.01]}>
          <boxGeometry args={[3, 3, 0.1]} />
          <meshStandardMaterial color="#1e40af" roughness={0.4} />
        </mesh>
        
        {/* Steps */}
        {[0, 0.3, 0.6].map((y, i) => (
          <mesh key={`step-${i}`} receiveShadow position={[0, y, 4.5 + i * 0.3]}>
            <boxGeometry args={[4, 0.2, 0.4]} />
            <meshStandardMaterial color="#9ca3af" roughness={0.8} />
          </mesh>
        ))}
      </group>
      
      {/* UNIVERSITY - VTU-GCE (Large Campus Building) */}
      <group position={[0, 0, -15]}>
        {/* Main University Building */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[16, 10, 10]} />
          <meshStandardMaterial color="#dbeafe" roughness={0.6} />
        </mesh>
        
        {/* University Tower/Dome */}
        <mesh castShadow position={[0, 11, 0]}>
          <cylinderGeometry args={[3, 4, 3, 8]} />
          <meshStandardMaterial color="#1e40af" roughness={0.6} />
        </mesh>
        
        <mesh castShadow position={[0, 13, 0]}>
          <sphereGeometry args={[2, 16, 16]} />
          <meshStandardMaterial color="#1e3a8a" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* University Name */}
        <mesh position={[0, 9, 5.01]}>
          <boxGeometry args={[12, 1.5, 0.1]} />
          <meshStandardMaterial color="#7c3aed" roughness={0.5} />
        </mesh>
        
        <Text
          position={[0, 9.6, 5.06]}
          fontSize={0.45}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          VTU - GCE
        </Text>
        
        <Text
          position={[0, 9.1, 5.06]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          BE - Computer Science
        </Text>
        
        <Text
          position={[0, 8.6, 5.06]}
          fontSize={0.2}
          color="#fde047"
          anchorX="center"
          anchorY="middle"
        >
          2019-2023 | CGPA: 8.32
        </Text>
        
        {/* Windows - University Style */}
        {Array.from({ length: 5 }).map((_, floor) =>
          Array.from({ length: 8 }).map((_, col) => (
            <mesh
              key={`uni-w-${floor}-${col}`}
              position={[-7 + col * 2, 1 + floor * 2, 5.01]}
            >
              <boxGeometry args={[1.2, 1.5, 0.05]} />
              <meshStandardMaterial 
                color="#dbeafe"
                transparent
                opacity={0.75}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          ))
        )}
        
        {/* Grand Entrance with Pillars */}
        {[-4, -2, 2, 4].map((x, i) => (
          <mesh key={`pillar-${i}`} castShadow position={[x, 2.5, 5.5]}>
            <cylinderGeometry args={[0.3, 0.35, 5, 16]} />
            <meshStandardMaterial color="#f5f5f5" roughness={0.7} />
          </mesh>
        ))}
        
        {/* Campus Plaza */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 10]}>
          <planeGeometry args={[20, 8]} />
          <meshStandardMaterial color="#d4d4d4" roughness={0.9} />
        </mesh>
        
        {/* Library Wing */}
        <mesh castShadow receiveShadow position={[-12, 3, 0]}>
          <boxGeometry args={[6, 6, 8]} />
          <meshStandardMaterial color="#e0e7ff" roughness={0.7} />
        </mesh>
        
        <Text
          position={[-12, 5, 4.01]}
          fontSize={0.3}
          color="#1e40af"
          anchorX="center"
          anchorY="middle"
        >
          LIBRARY
        </Text>
        
        {/* Lab Wing */}
        <mesh castShadow receiveShadow position={[12, 3, 0]}>
          <boxGeometry args={[6, 6, 8]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.7} />
        </mesh>
        
        <Text
          position={[12, 5, 4.01]}
          fontSize={0.3}
          color="#92400e"
          anchorX="center"
          anchorY="middle"
        >
          LAB
        </Text>
      </group>
      
      {/* Campus Trees */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 25
        return (
          <group key={`tree-${i}`} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 8]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.3, 0.35, 4, 8]} />
              <meshStandardMaterial color="#654321" roughness={1} />
            </mesh>
            <mesh castShadow position={[0, 4.5, 0]}>
              <sphereGeometry args={[1.5, 8, 8]} />
              <meshStandardMaterial color="#2d5016" roughness={0.9} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}
