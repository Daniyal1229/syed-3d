import { Text, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function TechPark() {
  const ferrisWheelRef = useRef()
  const carouselRef = useRef()
  
  useFrame((state, delta) => {
    if (ferrisWheelRef.current) {
      ferrisWheelRef.current.rotation.z += delta * 0.2
    }
    if (carouselRef.current) {
      carouselRef.current.rotation.y += delta * 0.3
    }
  })
  
  return (
    <group position={[12, 0, -15]}>
      {/* Ferris Wheel - Tech Stack Display */}
      <group ref={ferrisWheelRef} position={[0, 4, 0]}>
        {/* Main wheel structure */}
        <mesh>
          <torusGeometry args={[3, 0.1, 16, 50]} />
          <meshStandardMaterial color="#FF6B6B" metalness={0.5} />
        </mesh>
        
        {/* Spokes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          return (
            <mesh key={i} rotation={[0, 0, angle]}>
              <boxGeometry args={[0.1, 3, 0.1]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
          )
        })}
        
        {/* Tech stack "cabins" */}
        {[
          { name: 'React', color: '#61DAFB', angle: 0 },
          { name: 'Node.js', color: '#68A063', angle: Math.PI / 4 },
          { name: 'MongoDB', color: '#47A248', angle: Math.PI / 2 },
          { name: 'TypeScript', color: '#3178C6', angle: 3 * Math.PI / 4 },
          { name: 'Express', color: '#000000', angle: Math.PI },
          { name: 'Socket.IO', color: '#010101', angle: 5 * Math.PI / 4 },
          { name: 'Material-UI', color: '#007FFF', angle: 3 * Math.PI / 2 },
          { name: 'Redux', color: '#764ABC', angle: 7 * Math.PI / 4 },
        ].map((tech, i) => (
          <group
            key={tech.name}
            position={[
              Math.cos(tech.angle) * 3,
              Math.sin(tech.angle) * 3,
              0
            ]}
            rotation={[0, 0, -tech.angle]}
          >
            <mesh castShadow>
              <boxGeometry args={[0.8, 0.8, 0.5]} />
              <meshStandardMaterial color={tech.color} />
            </mesh>
            
            <Text
              position={[0, 0, 0.3]}
              fontSize={0.15}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
            >
              {tech.name}
            </Text>
          </group>
        ))}
      </group>
      
      {/* Center support pole */}
      <mesh castShadow position={[0, 2, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 4, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Carousel - Additional Tech */}
      <group ref={carouselRef} position={[6, 0, 3]}>
        {/* Carousel base */}
        <mesh castShadow position={[0, 0.3, 0]}>
          <cylinderGeometry args={[2, 2.2, 0.5, 16]} />
          <meshStandardMaterial color="#FF1744" />
        </mesh>
        
        {/* Carousel roof */}
        <mesh castShadow position={[0, 2.5, 0]}>
          <coneGeometry args={[2.5, 1, 16]} />
          <meshStandardMaterial color="#D50000" />
        </mesh>
        
        {/* Tech icons on carousel */}
        {[
          { name: 'Git', color: '#F05032', angle: 0 },
          { name: 'Python', color: '#3776AB', angle: Math.PI / 2 },
          { name: 'MySQL', color: '#4479A1', angle: Math.PI },
          { name: 'Docker', color: '#2496ED', angle: 3 * Math.PI / 2 },
        ].map((tech) => (
          <group
            key={tech.name}
            position={[
              Math.cos(tech.angle) * 1.5,
              1.2,
              Math.sin(tech.angle) * 1.5
            ]}
          >
            <mesh castShadow>
              <boxGeometry args={[0.5, 0.5, 0.1]} />
              <meshStandardMaterial color={tech.color} />
            </mesh>
            
            <Text
              position={[0, -0.4, 0]}
              fontSize={0.12}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
            >
              {tech.name}
            </Text>
          </group>
        ))}
      </group>
      
      {/* Entrance arch */}
      <group position={[-3, 0, 0]}>
        <mesh castShadow position={[-1, 2, 0]}>
          <boxGeometry args={[0.3, 4, 0.3]} />
          <meshStandardMaterial color="#FF6B6B" />
        </mesh>
        
        <mesh castShadow position={[1, 2, 0]}>
          <boxGeometry args={[0.3, 4, 0.3]} />
          <meshStandardMaterial color="#FF6B6B" />
        </mesh>
        
        <mesh castShadow position={[0, 4, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 2.5, 16]} />
          <meshStandardMaterial color="#FF6B6B" />
        </mesh>
        
        <Text
          position={[0, 4.5, 0]}
          fontSize={0.3}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          🎡 TECH PARK
        </Text>
      </group>
      
      {/* Decorative balloons */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.3, 16, 16]}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 8,
            2 + Math.sin((i / 6) * Math.PI * 2) * 0.5,
            Math.sin((i / 6) * Math.PI * 2) * 8
          ]}
          castShadow
        >
          <meshStandardMaterial color={['#FF6B6B', '#4ECDC4', '#45B7AF', '#FFD93D', '#6BCB77', '#4D96FF'][i]} />
        </Sphere>
      ))}
    </group>
  )
}

