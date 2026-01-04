export default function Ground() {
  return (
    <>
      {/* Main ground plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#90EE90" />
      </mesh>
      
      {/* Grass patches */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[
            (Math.random() - 0.5) * 80,
            -0.48,
            (Math.random() - 0.5) * 80
          ]}
        >
          <circleGeometry args={[Math.random() * 2 + 1, 16]} />
          <meshStandardMaterial color="#7CFC00" />
        </mesh>
      ))}
    </>
  )
}

