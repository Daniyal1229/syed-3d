export default function Roads() {
  return (
    <group>
      {/* Main road from entrance to projects */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.45, -5]}>
        <planeGeometry args={[4, 60]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
      
      {/* Road markings - dashed lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.43, 5 - i * 4]}
        >
          <planeGeometry args={[0.2, 1.5]} />
          <meshStandardMaterial color="#FFFF00" />
        </mesh>
      ))}
      
      {/* Side road to tech park */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[7, -0.45, -15]}>
        <planeGeometry args={[10, 4]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
      
      {/* Tech park road markings */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh
          key={`tech-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[3 + i * 3, -0.43, -15]}
        >
          <planeGeometry args={[1.5, 0.2]} />
          <meshStandardMaterial color="#FFFF00" />
        </mesh>
      ))}
    </group>
  )
}

