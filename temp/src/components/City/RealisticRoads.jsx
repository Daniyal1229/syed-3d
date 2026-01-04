export default function RealisticRoads() {
  return (
    <group>
      {/* MAIN ROAD - North to South */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.45, 0]}>
        <planeGeometry args={[6, 100]} />
        <meshStandardMaterial 
          color="#2c2c2c"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      
      {/* Road center line - yellow dashes */}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh
          key={`center-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.43, -48 + i * 4]}
        >
          <planeGeometry args={[0.15, 2]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      ))}
      
      {/* Road edge lines - white */}
      {Array.from({ length: 25 }).map((_, i) => (
        <group key={`edge-${i}`}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2.8, -0.43, -48 + i * 4]}>
            <planeGeometry args={[0.1, 2]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2.8, -0.43, -48 + i * 4]}>
            <planeGeometry args={[0.1, 2]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>
      ))}
      
      {/* CROSS ROAD 1 - For Home District (Left turn at z=5) */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-20, -0.45, 5]}>
        <planeGeometry args={[40, 6]} />
        <meshStandardMaterial 
          color="#2c2c2c"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      
      {/* Crossroad markings */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={`cross1-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-38 + i * 4, -0.43, 5]}
        >
          <planeGeometry args={[2, 0.15]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      ))}
      
      {/* CROSS ROAD 2 - For Education District (Left turn at z=-15) */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-20, -0.45, -15]}>
        <planeGeometry args={[40, 6]} />
        <meshStandardMaterial 
          color="#2c2c2c"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={`cross2-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-38 + i * 4, -0.43, -15]}
        >
          <planeGeometry args={[2, 0.15]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      ))}
      
      {/* CROSS ROAD 3 - After bridge, for Experience District (z=-50) */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[20, -0.45, -50]}>
        <planeGeometry args={[40, 6]} />
        <meshStandardMaterial 
          color="#2c2c2c"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={`cross3-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[2 + i * 4, -0.43, -50]}
        >
          <planeGeometry args={[2, 0.15]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      ))}
      
      {/* Intersection zones - slightly lighter for visibility */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.44, 5]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#353535" roughness={0.85} />
      </mesh>
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.44, -15]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#353535" roughness={0.85} />
      </mesh>
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.44, -50]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#353535" roughness={0.85} />
      </mesh>
    </group>
  )
}

