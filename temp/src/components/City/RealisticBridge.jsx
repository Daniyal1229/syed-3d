export default function RealisticBridge() {
  return (
    <group position={[0, 0, -38]}>
      {/* Bridge Deck - Concrete/Steel */}
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
        <boxGeometry args={[8, 0.5, 12]} />
        <meshStandardMaterial 
          color="#9ca3af"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Bridge Support Beams (I-Beams) */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`beam-${i}`} castShadow position={[0, 0.5, -5 + i * 2.5]}>
          <boxGeometry args={[7.5, 0.4, 0.3]} />
          <meshStandardMaterial 
            color="#4b5563"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}
      
      {/* Side Railings - Metal */}
      {/* Left Railing Posts */}
      {Array.from({ length: 13 }).map((_, i) => (
        <mesh key={`left-post-${i}`} castShadow position={[-3.8, 2, -6 + i]}>
          <cylinderGeometry args={[0.06, 0.06, 2, 16]} />
          <meshStandardMaterial 
            color="#374151"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
      
      {/* Right Railing Posts */}
      {Array.from({ length: 13 }).map((_, i) => (
        <mesh key={`right-post-${i}`} castShadow position={[3.8, 2, -6 + i]}>
          <cylinderGeometry args={[0.06, 0.06, 2, 16]} />
          <meshStandardMaterial 
            color="#374151"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
      
      {/* Top Rails */}
      <mesh castShadow position={[-3.8, 3, 0]}>
        <boxGeometry args={[0.1, 0.1, 12]} />
        <meshStandardMaterial 
          color="#374151"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      
      <mesh castShadow position={[3.8, 3, 0]}>
        <boxGeometry args={[0.1, 0.1, 12]} />
        <meshStandardMaterial 
          color="#374151"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      
      {/* Bridge Pillars/Supports */}
      {/* Left Support */}
      <mesh castShadow receiveShadow position={[-4, -2.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 5, 16]} />
        <meshStandardMaterial 
          color="#6b7280"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Right Support */}
      <mesh castShadow receiveShadow position={[4, -2.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 5, 16]} />
        <meshStandardMaterial 
          color="#6b7280"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Support Braces */}
      {[-3, 0, 3].map((z, i) => (
        <group key={`brace-${i}`}>
          <mesh castShadow position={[-3, 0, z]} rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[0.2, 3, 0.2]} />
            <meshStandardMaterial color="#4b5563" metalness={0.8} />
          </mesh>
          
          <mesh castShadow position={[3, 0, z]} rotation={[0, 0, -Math.PI / 6]}>
            <boxGeometry args={[0.2, 3, 0.2]} />
            <meshStandardMaterial color="#4b5563" metalness={0.8} />
          </mesh>
        </group>
      ))}
      
      {/* River/Water underneath */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial 
          color="#0891b2"
          transparent
          opacity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Water Effect - Multiple layers for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.9, 0]}>
        <planeGeometry args={[28, 18]} />
        <meshStandardMaterial 
          color="#06b6d4"
          transparent
          opacity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
      
      {/* Riverbank Stones */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 12 + Math.random() * 3
        return (
          <mesh
            key={`stone-${i}`}
            castShadow
            position={[
              Math.cos(angle) * radius,
              -4.5 + Math.random() * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <dodecahedronGeometry args={[0.3 + Math.random() * 0.4]} />
            <meshStandardMaterial 
              color="#78716c"
              roughness={0.95}
            />
          </mesh>
        )
      })}
      
      {/* Bridge Approach Ramps */}
      {/* North Ramp */}
      <mesh receiveShadow position={[0, 0.3, -9]}>
        <boxGeometry args={[8, 0.3, 4]} />
        <meshStandardMaterial color="#6b7280" roughness={0.85} />
      </mesh>
      
      {/* South Ramp */}
      <mesh receiveShadow position={[0, 0.3, 9]}>
        <boxGeometry args={[8, 0.3, 4]} />
        <meshStandardMaterial color="#6b7280" roughness={0.85} />
      </mesh>
      
      {/* Bridge Warning Signs */}
      {[-5, 5].map((z, i) => (
        <group key={`sign-${i}`} position={[-5, 1, z]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
            <meshStandardMaterial color="#4b5563" />
          </mesh>
          
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[0.6, 0.6, 0.05]} />
            <meshStandardMaterial color="#fbbf24" />
          </mesh>
        </group>
      ))}
      
      {/* Lamp Posts on Bridge */}
      {[-4, 0, 4].map((z, i) => (
        <group key={`lamp-${i}`}>
          <mesh castShadow position={[-3.5, 2, z]}>
            <cylinderGeometry args={[0.06, 0.08, 4, 8]} />
            <meshStandardMaterial color="#1f2937" metalness={0.8} />
          </mesh>
          
          <mesh castShadow position={[-3.5, 4, z]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial 
              color="#FFA500"
              emissive="#FFA500"
              emissiveIntensity={0.5}
            />
          </mesh>
          
          <mesh castShadow position={[3.5, 2, z]}>
            <cylinderGeometry args={[0.06, 0.08, 4, 8]} />
            <meshStandardMaterial color="#1f2937" metalness={0.8} />
          </mesh>
          
          <mesh castShadow position={[3.5, 4, z]}>
            <sphereGeometry args={[0.2, 16, 16]} />
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

