import { useEffect, useState } from 'react'
import useStore from '../../store/useStore'

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = useStore()
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (!isLoading) return
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // When progress reaches 100%, hide loading screen after a short delay
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)
    
    return () => clearInterval(interval)
  }, [isLoading, setIsLoading])
  
  return (
    <div className={`loading-screen ${!isLoading ? 'loaded' : ''}`}>
      <h1>Welcome to Portfolio City</h1>
      <p style={{ color: 'white', marginBottom: '20px' }}>
        Loading Daniyal Syed's Portfolio...
      </p>
      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p style={{ color: 'white', marginTop: '10px', fontSize: '14px' }}>
        {progress}%
      </p>
    </div>
  )
}

