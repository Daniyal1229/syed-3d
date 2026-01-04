export default function WoodenBridge() {
  return (
    <group position={[0, 0, -20]}>
      {/* Bridge deck */}
      <mesh castShadow position={[0, -0.3, 0]}>
        <boxGeometry args={[6, 0.3, 5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Wooden planks */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          castShadow
          position={[0, -0.14, -2 + i * 0.5]}
        >
          <boxGeometry args={[5.8, 0.1, 0.3]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      ))}
      
      {/* Side rails */}
      <mesh castShadow position={[-2.8, 0.3, 0]}>
        <boxGeometry args={[0.15, 0.8, 5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      <mesh castShadow position={[2.8, 0.3, 0]}>
        <boxGeometry args={[0.15, 0.8, 5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Support posts */}
      {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((z, i) => (
        <group key={i}>
          <mesh castShadow position={[-2.8, 0.5, z]}>
            <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          <mesh castShadow position={[2.8, 0.5, z]}>
            <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
        </group>
      ))}
      
      {/* Water underneath */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
        <planeGeometry args={[15, 8]} />
        <meshStandardMaterial color="#1E90FF" transparent opacity={0.7} />
      </mesh>
      
      {/* Decorative rocks */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`rock-${i}`}
          castShadow
          position={[
            (Math.random() - 0.5) * 10,
            -0.6,
            (Math.random() - 0.5) * 8
          ]}
        >
          <dodecahedronGeometry args={[Math.random() * 0.3 + 0.2]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
      ))}
    </group>
  )
}

