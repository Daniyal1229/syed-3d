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
    </>
  )
}
