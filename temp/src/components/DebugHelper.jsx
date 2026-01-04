// Debug helper to show scene info
export default function DebugHelper() {
  return (
    <>
      {/* Helper grid at ground level */}
      <gridHelper args={[50, 50, '#444', '#222']} position={[0, -0.4, 0]} />
      
      {/* Axis helper at origin */}
      <axesHelper args={[5]} />
      
      {/* Test cube at origin */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Test cube at car start position */}
      <mesh position={[0, 1, 5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  )
}
