export default function RealisticGround() {
  return (
    <>
      {/* Main ground plane - Grass */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial 
          color="#4a6741"
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>
      
      {/* Sidewalk borders */}
      {/* Main road borders */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[3.5, -0.48, 0]}>
        <planeGeometry args={[1, 100]} />
        <meshStandardMaterial color="#808080" roughness={0.8} />
      </mesh>
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-3.5, -0.48, 0]}>
        <planeGeometry args={[1, 100]} />
        <meshStandardMaterial color="#808080" roughness={0.8} />
      </mesh>
      
      {/* Cross street borders */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-20, -0.48, 3.5]}>
        <planeGeometry args={[40, 1]} />
        <meshStandardMaterial color="#808080" roughness={0.8} />
      </mesh>
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-20, -0.48, -3.5]}>
        <planeGeometry args={[40, 1]} />
        <meshStandardMaterial color="#808080" roughness={0.8} />
      </mesh>
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[20, -0.48, 3.5]}>
        <planeGeometry args={[40, 1]} />
        <meshStandardMaterial color="#808080" roughness={0.8} />
      </mesh>
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[20, -0.48, -3.5]}>
        <planeGeometry args={[40, 1]} />
        <meshStandardMaterial color="#808080" roughness={0.8} />
      </mesh>
      
      {/* Street trees for realism */}
      {Array.from({ length: 20 }).map((_, i) => {
        const z = -40 + i * 4
        return (
          <group key={`tree-${i}`}>
            {/* Left side trees */}
            <group position={[-8, 0, z]}>
              {/* Trunk */}
              <mesh castShadow position={[0, 1.5, 0]}>
                <cylinderGeometry args={[0.2, 0.25, 3, 8]} />
                <meshStandardMaterial color="#654321" roughness={1} />
              </mesh>
              {/* Foliage */}
              <mesh castShadow position={[0, 3.5, 0]}>
                <sphereGeometry args={[1.2, 8, 8]} />
                <meshStandardMaterial color="#2d5016" roughness={0.9} />
              </mesh>
            </group>
            
            {/* Right side trees */}
            <group position={[8, 0, z]}>
              <mesh castShadow position={[0, 1.5, 0]}>
                <cylinderGeometry args={[0.2, 0.25, 3, 8]} />
                <meshStandardMaterial color="#654321" roughness={1} />
              </mesh>
              <mesh castShadow position={[0, 3.5, 0]}>
                <sphereGeometry args={[1.2, 8, 8]} />
                <meshStandardMaterial color="#2d5016" roughness={0.9} />
              </mesh>
            </group>
          </group>
        )
      })}
    </>
  )
}

