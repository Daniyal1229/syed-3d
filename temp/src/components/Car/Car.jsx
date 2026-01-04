import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import useStore from '../../store/useStore'
import * as THREE from 'three'

export default function Car() {
  const carRef = useRef()
  const { carPosition, carRotation, setCarPosition, setCarRotation, setCurrentZone, setShowPopup, setPopupContent } = useStore()
  
  const keys = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  })

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keys.current.hasOwnProperty(e.key)) {
        keys.current[e.key] = true
      }
    }

    const handleKeyUp = (e) => {
      if (keys.current.hasOwnProperty(e.key)) {
        keys.current[e.key] = false
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  // Zone detection - Updated for new realistic layout
  const checkZone = (position) => {
    const [x, y, z] = position
    
    // ENTRANCE - Starting area (expanded to include approach)
    if (z > 10 && z < 30 && Math.abs(x) < 5) return 'entrance'
    
    // RESIDENTIAL DISTRICT - Left turn from first crossroad (z=5)
    if (x < -10 && z > 0 && z < 10 && x > -35) return 'home'
    
    // EDUCATION BLOCK - Left turn from second crossroad (z=-15)
    // Expanded zone to make it easier to access
    if (x < -10 && z > -22 && z < -8 && x > -35) return 'education'
    
    // BRIDGE - Transition zone (moved further down)
    if (z > -45 && z < -32 && Math.abs(x) < 8) return 'bridge'
    
    // EXPERIENCE BLOCK - After bridge, right turn (z=-50)
    if (x > 10 && z > -60 && z < -45 && x < 40) return 'experience'
    
    // TECH PARK - Side area near main road
    if (x > 8 && x < 20 && z > -25 && z < -10) return 'techpark'
    
    // PROJECTS - Further down main road
    if (z > -80 && z < -55 && Math.abs(x) < 5) return 'projects'
    
    return 'road'
  }

  useFrame((state, delta) => {
    if (!carRef.current) return

    let newRotation = carRotation
    let speed = 0

    // Handle rotation
    if (keys.current.ArrowLeft) {
      newRotation += 2 * delta
      setCarRotation(newRotation)
    }
    if (keys.current.ArrowRight) {
      newRotation -= 2 * delta
      setCarRotation(newRotation)
    }

    // Handle movement
    if (keys.current.ArrowUp) {
      speed = 5 * delta
    }
    if (keys.current.ArrowDown) {
      speed = -3 * delta
    }

    // Update position
    const newPosition = [
      carPosition[0] + Math.sin(newRotation) * speed,
      carPosition[1],
      carPosition[2] + Math.cos(newRotation) * speed
    ]

    setCarPosition(newPosition)
    
    // Update car mesh
    carRef.current.position.set(...newPosition)
    carRef.current.rotation.y = newRotation

    // Check zone and show popup
    const zone = checkZone(newPosition)
    const currentZone = useStore.getState().currentZone
    
    if (zone !== currentZone && zone !== 'road') {
      setCurrentZone(zone)
      showZoneInfo(zone)
    } else if (zone === 'road' && currentZone !== 'road') {
      setCurrentZone('road')
      setShowPopup(false)
    }
  })

  const showZoneInfo = (zone) => {
    const zoneData = getZoneData(zone)
    if (zoneData) {
      setPopupContent(zoneData)
      setShowPopup(true)
    }
  }

  return (
    <group ref={carRef} position={carPosition}>
      {/* Main Body (Lower) - Boxy Monster Truck Style */}
      <mesh castShadow position={[0, 0.6, 0]}>
        <boxGeometry args={[1.6, 0.8, 2.8]} />
        <meshStandardMaterial 
          color="#FF5733" 
          metalness={0.5} 
          roughness={0.5} 
        />
      </mesh>
      
      {/* Upper Body/Cabin - Boxy Design */}
      <mesh castShadow position={[0, 1.3, -0.2]}>
        <boxGeometry args={[1.5, 0.9, 1.6]} />
        <meshStandardMaterial 
          color="#E63946" 
          metalness={0.5} 
          roughness={0.5} 
        />
      </mesh>
      
      {/* Hood - Boxy */}
      <mesh castShadow position={[0, 0.7, 1.1]}>
        <boxGeometry args={[1.4, 0.4, 0.8]} />
        <meshStandardMaterial 
          color="#FF5733" 
          metalness={0.5} 
          roughness={0.5} 
        />
      </mesh>
      
      {/* Front Grille - Simple Boxy */}
      <mesh position={[0, 0.7, 1.51]}>
        <boxGeometry args={[1, 0.5, 0.1]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Grille Bars - Vertical */}
      {[-0.3, -0.15, 0, 0.15, 0.3].map((x, i) => (
        <mesh key={i} position={[x, 0.7, 1.56]}>
          <boxGeometry args={[0.08, 0.4, 0.05]} />
          <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Headlights - Square Style */}
      <mesh position={[-0.6, 0.8, 1.52]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.08]} />
        <meshStandardMaterial 
          color="#FFFACD" 
          emissive="#FFFACD" 
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0.6, 0.8, 1.52]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.08]} />
        <meshStandardMaterial 
          color="#FFFACD" 
          emissive="#FFFACD" 
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Front Bumper - Chunky */}
      <mesh castShadow position={[0, 0.2, 1.6]}>
        <boxGeometry args={[1.7, 0.2, 0.25]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.7} roughness={0.4} />
      </mesh>
      
      {/* Roof Equipment Platform */}
      <mesh castShadow position={[0, 1.85, -0.2]}>
        <boxGeometry args={[1.4, 0.12, 1.5]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.6} roughness={0.5} />
      </mesh>
      
      {/* Roof Light Bar */}
      <mesh castShadow position={[0, 1.95, 0.3]}>
        <boxGeometry args={[1.2, 0.15, 0.2]} />
        <meshStandardMaterial 
          color="#1A1A1A" 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
      
      {/* Light Bar LEDs */}
      {[-0.5, -0.25, 0, 0.25, 0.5].map((x, i) => (
        <mesh key={`led-${i}`} position={[x, 1.95, 0.41]}>
          <boxGeometry args={[0.15, 0.1, 0.05]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      
      {/* Antenna */}
      <mesh castShadow position={[-0.7, 2, -0.8]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
      </mesh>
      
      <mesh position={[-0.7, 2.25, -0.8]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#FF5733" />
      </mesh>
      
      {/* Roof Rack Bars */}
      <mesh position={[-0.65, 1.92, -0.2]}>
        <boxGeometry args={[0.08, 0.08, 1.5]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
      </mesh>
      <mesh position={[0.65, 1.92, -0.2]}>
        <boxGeometry args={[0.08, 0.08, 1.5]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
      </mesh>
      
      {/* Windshield - More Vertical */}
      <mesh position={[0, 1.4, 0.6]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[1.4, 0.7, 0.08]} />
        <meshStandardMaterial 
          color="#4A4A4A" 
          transparent 
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Side Windows - Boxy */}
      <mesh position={[0.76, 1.3, -0.2]}>
        <boxGeometry args={[0.08, 0.6, 1]} />
        <meshStandardMaterial 
          color="#4A4A4A" 
          transparent 
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-0.76, 1.3, -0.2]}>
        <boxGeometry args={[0.08, 0.6, 1]} />
        <meshStandardMaterial 
          color="#4A4A4A" 
          transparent 
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Back Window */}
      <mesh position={[0, 1.3, -1.0]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[1.4, 0.6, 0.08]} />
        <meshStandardMaterial 
          color="#4A4A4A" 
          transparent 
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Side Mirrors - Larger */}
      <mesh castShadow position={[-0.85, 1.2, 0.5]}>
        <boxGeometry args={[0.12, 0.15, 0.25]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0.85, 1.2, 0.5]}>
        <boxGeometry args={[0.12, 0.15, 0.25]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Rear Lights - Rectangular */}
      <mesh position={[-0.7, 0.7, -1.41]}>
        <boxGeometry args={[0.2, 0.25, 0.08]} />
        <meshStandardMaterial 
          color="#FF0000" 
          emissive="#FF0000" 
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0.7, 0.7, -1.41]}>
        <boxGeometry args={[0.2, 0.25, 0.08]} />
        <meshStandardMaterial 
          color="#FF0000" 
          emissive="#FF0000" 
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Spare Tire on Back - Larger */}
      <mesh castShadow position={[0, 1, -1.45]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.2} roughness={0.9} />
      </mesh>
      
      {/* Spare Tire Rim */}
      <mesh position={[0, 1, -1.46]}>
        <cylinderGeometry args={[0.25, 0.25, 0.22, 6]} />
        <meshStandardMaterial color="#FF5733" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Rear Bumper */}
      <mesh castShadow position={[0, 0.3, -1.5]}>
        <boxGeometry args={[1.7, 0.2, 0.2]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.7} roughness={0.4} />
      </mesh>
      
      {/* Wheels - Monster Truck Style (HUGE!) */}
      {/* Front Left */}
      <group position={[-0.8, 0.45, 1]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.3, 20]} />
          <meshStandardMaterial color="#1A1A1A" metalness={0.2} roughness={0.95} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.32, 6]} />
          <meshStandardMaterial color="#FF5733" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Wheel bolts */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <mesh key={i} position={[0.16, Math.cos(rad) * 0.15, Math.sin(rad) * 0.15]}>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
              <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
            </mesh>
          )
        })}
      </group>
      
      {/* Front Right */}
      <group position={[0.8, 0.45, 1]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.3, 20]} />
          <meshStandardMaterial color="#1A1A1A" metalness={0.2} roughness={0.95} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.32, 6]} />
          <meshStandardMaterial color="#FF5733" metalness={0.7} roughness={0.3} />
        </mesh>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <mesh key={i} position={[-0.16, Math.cos(rad) * 0.15, Math.sin(rad) * 0.15]}>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
              <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
            </mesh>
          )
        })}
      </group>
      
      {/* Rear Left */}
      <group position={[-0.8, 0.45, -1]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.3, 20]} />
          <meshStandardMaterial color="#1A1A1A" metalness={0.2} roughness={0.95} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.32, 6]} />
          <meshStandardMaterial color="#FF5733" metalness={0.7} roughness={0.3} />
        </mesh>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <mesh key={i} position={[0.16, Math.cos(rad) * 0.15, Math.sin(rad) * 0.15]}>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
              <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
            </mesh>
          )
        })}
      </group>
      
      {/* Rear Right */}
      <group position={[0.8, 0.45, -1]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.3, 20]} />
          <meshStandardMaterial color="#1A1A1A" metalness={0.2} roughness={0.95} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.32, 6]} />
          <meshStandardMaterial color="#FF5733" metalness={0.7} roughness={0.3} />
        </mesh>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <mesh key={i} position={[-0.16, Math.cos(rad) * 0.15, Math.sin(rad) * 0.15]}>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
              <meshStandardMaterial color="#1A1A1A" metalness={0.9} />
            </mesh>
          )
        })}
      </group>
      
      {/* Wheel Arches/Fenders - Lifted/Flared */}
      <mesh castShadow position={[-0.85, 0.7, 1]}>
        <boxGeometry args={[0.2, 0.4, 0.6]} />
        <meshStandardMaterial color="#FF5733" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh castShadow position={[0.85, 0.7, 1]}>
        <boxGeometry args={[0.2, 0.4, 0.6]} />
        <meshStandardMaterial color="#FF5733" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh castShadow position={[-0.85, 0.7, -1]}>
        <boxGeometry args={[0.2, 0.4, 0.6]} />
        <meshStandardMaterial color="#FF5733" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh castShadow position={[0.85, 0.7, -1]}>
        <boxGeometry args={[0.2, 0.4, 0.6]} />
        <meshStandardMaterial color="#FF5733" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Running Boards - Thicker */}
      <mesh castShadow position={[-0.9, 0.2, 0]}>
        <boxGeometry args={[0.15, 0.08, 2.5]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0.9, 0.2, 0]}>
        <boxGeometry args={[0.15, 0.08, 2.5]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Exhaust Pipes */}
      <mesh castShadow position={[-0.6, 0.4, -1.45]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0.6, 0.4, -1.45]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Zone information data
function getZoneData(zone) {
  const data = {
    entrance: {
      title: "🎉 Welcome to Daniyal's Portfolio City!",
      description: "Drive through the city to explore my journey as a MERN Stack Developer.",
      items: ["📍 Bangalore, Karnataka", "📧 syeddaniyalbokhari72@gmail.com", "📱 9353252474"]
    },
    home: {
      title: "🏠 Home - Contact Information",
      description: "Get in touch with me!",
      items: [
        "📧 Email: syeddaniyalbokhari72@gmail.com",
        "📱 Phone: 9353252474",
        "📍 Location: Bangalore, Karnataka",
        "🔗 GitHub: github.com/syeddaniyal",
        "💼 LinkedIn: linkedin.com/in/syeddaniyal",
        "🌐 Portfolio: syeddaniyal.com"
      ]
    },
    education: {
      title: "🎓 Education District",
      description: "My academic journey",
      items: [
        "🏫 St. Anthony's Church School (2016-2017)",
        "🏫 SET PU College (2017-2019)",
        "🎓 VTU - GCE, BE in CSE (2019-2023) - CGPA: 8.32",
        "💡 Strong foundation in algorithms, software engineering, and web technologies"
      ]
    },
    experience: {
      title: "💼 Experience Zone",
      description: "Professional journey",
      items: [
        "🏢 InspironLabs Software Systems (Nov 2024 - Present)",
        "💻 Role: Software Developer",
        "🚀 Developed Healthcare Provider Credentialing System",
        "⚛️ Tech: React, TypeScript, Material-UI, MobX",
        "👥 Collaborated with cross-functional teams",
        "📝 Code reviews, agile meetings, sprint planning"
      ]
    },
    techpark: {
      title: "🎡 Tech Stack Amusement Park",
      description: "Technologies I master - 5000+ hours of experience!",
      items: [
        "⚛️ Frontend: React.js, TypeScript, JavaScript (ES6+)",
        "🎨 UI: Material-UI, Chakra UI, Styled Components, SCSS",
        "🔧 Backend: Node.js, Express.js, MongoDB, Mongoose",
        "🔐 Auth: JWT, OAuth",
        "🛠️ Tools: Git, GitHub, Postman, Webpack, Babel",
        "☁️ Deploy: Vercel, Netlify, Cloudinary",
        "💬 Real-time: Socket.IO, WebSockets",
        "🐍 Others: Python, OpenCV, SQL, MySQL"
      ]
    },
    projects: {
      title: "🚀 Projects Boulevard",
      description: "My notable projects",
      items: [
        "🏥 Healthcare Provider Credentialing System",
        "  - React, TypeScript, Material-UI, MobX",
        "  - API integration, form validation, responsive UI",
        "💬 Real-time Chat Application",
        "  - React.js, Node.js, Socket.io, MongoDB",
        "  - Instant messaging with live updates",
        "🖱️ Computer Pointer Controller",
        "  - Python, OpenCV for hand gesture control",
        "  - Virtual mouse with computer vision"
      ]
    },
    bridge: {
      title: "🌉 Wooden Bridge - Transition",
      description: "Crossing from education to professional experience...",
      items: ["Keep driving forward!"]
    }
  }
  
  return data[zone] || null
}

