import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState, useEffect } from 'react'
import Experience from './components/Experience'
import UI from './components/UI/UI'
import LoadingScreen from './components/UI/LoadingScreen'
import './styles/App.css'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Scene Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '500px',
          textAlign: 'center'
        }}>
          <h2>❌ Scene Loading Error</h2>
          <p>There was an issue loading the 3D scene.</p>
          <p style={{ fontSize: '12px', color: '#ff6b6b' }}>
            {this.state.error?.message}
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#4ECDC4',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reload Page
          </button>
          <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.7 }}>
            Press D key for debug mode after reload
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

// Fallback loader
function SceneFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function App() {
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    // Show help after 3 seconds if user seems stuck
    const timer = setTimeout(() => {
      console.log('%c🎮 Controls:', 'font-size: 16px; color: #4ECDC4; font-weight: bold')
      console.log('Arrow Keys: Move car')
      console.log('D Key: Debug mode (orbit controls)')
      console.log('If you see only sky, press D to enable debug view!')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 60 }}
        gl={{ antialias: true }}
        onCreated={(state) => {
          console.log('✅ Canvas created successfully')
          console.log('Camera position:', state.camera.position)
        }}
      >
        <Suspense fallback={<SceneFallback />}>
          <Experience />
        </Suspense>
      </Canvas>
      <UI />
      <LoadingScreen />
    </ErrorBoundary>
  )
}

export default App

