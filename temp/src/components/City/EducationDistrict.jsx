import { Text } from '@react-three/drei'

export default function EducationDistrict() {
  return (
    <group position={[0, 0, -10]}>
      {/* School Building 1 - St. Anthony's */}
      <group position={[-8, 0, 0]}>
        <mesh castShadow position={[0, 1.5, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="#FF6B6B" />
        </mesh>
        
        <mesh castShadow position={[0, 3.5, 0]}>
          <coneGeometry args={[2, 1, 4]} />
          <meshStandardMaterial color="#C92A2A" />
        </mesh>
        
        <Text
          position={[0, 0.5, 1.51]}
          fontSize={0.2}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          St. Anthony's
        </Text>
        
        <Text
          position={[0, 0.2, 1.51]}
          fontSize={0.15}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          2016-2017
        </Text>
      </group>
      
      {/* PU College - SET */}
      <group position={[0, 0, 0]}>
        <mesh castShadow position={[0, 2, 0]}>
          <boxGeometry args={[4, 4, 3]} />
          <meshStandardMaterial color="#4ECDC4" />
        </mesh>
        
        <mesh castShadow position={[0, 4.5, 0]}>
          <boxGeometry args={[4.5, 0.5, 3.5]} />
          <meshStandardMaterial color="#45B7AF" />
        </mesh>
        
        <Text
          position={[0, 2.5, 1.51]}
          fontSize={0.25}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          SET PU College
        </Text>
        
        <Text
          position={[0, 2, 1.51]}
          fontSize={0.18}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          2017-2019
        </Text>
      </group>
      
      {/* University - VTU */}
      <group position={[8, 0, 0]}>
        <mesh castShadow position={[0, 2.5, 0]}>
          <boxGeometry args={[4, 5, 3]} />
          <meshStandardMaterial color="#9B59B6" />
        </mesh>
        
        <mesh castShadow position={[0, 5.5, 0]}>
          <boxGeometry args={[5, 0.8, 4]} />
          <meshStandardMaterial color="#8E44AD" />
        </mesh>
        
        <mesh castShadow position={[0, 6.2, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[2.5, 1, 4]} />
          <meshStandardMaterial color="#6C3483" />
        </mesh>
        
        <Text
          position={[0, 3, 1.51]}
          fontSize={0.3}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          VTU - GCE
        </Text>
        
        <Text
          position={[0, 2.5, 1.51]}
          fontSize={0.2}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          BE - CSE
        </Text>
        
        <Text
          position={[0, 2, 1.51]}
          fontSize={0.18}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          2019-2023
        </Text>
        
        <Text
          position={[0, 1.6, 1.51]}
          fontSize={0.18}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          CGPA: 8.32
        </Text>
      </group>
      
      {/* Flag poles */}
      <mesh castShadow position={[-8, 4.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="#DAA520" />
      </mesh>
      
      <mesh castShadow position={[8, 7, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial color="#DAA520" />
      </mesh>
    </group>
  )
}

