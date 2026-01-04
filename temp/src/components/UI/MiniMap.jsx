import { useEffect, useRef } from 'react'
import useStore from '../../store/useStore'

export default function MiniMap() {
  const canvasRef = useRef(null)
  const { carPosition, currentZone } = useStore()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const scale = 3
    
    // Clear canvas
    ctx.fillStyle = '#1a1a1a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Draw roads
    ctx.strokeStyle = '#444'
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(100, 20)
    ctx.lineTo(100, 180)
    ctx.stroke()
    
    // Side road to tech park
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(150, 100)
    ctx.stroke()
    
    // Draw zones
    const zones = [
      { name: 'Entrance', x: 100, y: 30, color: '#FFD700' },
      { name: 'Home', x: 100, y: 50, color: '#FFA07A' },
      { name: 'Education', x: 100, y: 75, color: '#9B59B6' },
      { name: 'Bridge', x: 100, y: 95, color: '#8B4513' },
      { name: 'Experience', x: 100, y: 115, color: '#2C3E50' },
      { name: 'Tech Park', x: 140, y: 100, color: '#FF6B6B' },
      { name: 'Projects', x: 100, y: 145, color: '#E74C3C' },
    ]
    
    zones.forEach((zone) => {
      ctx.fillStyle = zone.color
      ctx.fillRect(zone.x - 5, zone.y - 5, 10, 10)
    })
    
    // Draw car position
    const carX = 100 + carPosition[0] * scale
    const carY = 80 - carPosition[2] * scale
    
    ctx.fillStyle = '#E63946'
    ctx.beginPath()
    ctx.arc(carX, carY, 4, 0, Math.PI * 2)
    ctx.fill()
    
    // Draw current zone indicator
    ctx.fillStyle = 'white'
    ctx.font = '10px Arial'
    ctx.fillText(currentZone.toUpperCase(), 10, 15)
    
  }, [carPosition, currentZone])
  
  return (
    <div className="mini-map">
      <div className="mini-map-title">MAP</div>
      <canvas
        ref={canvasRef}
        width={200}
        height={180}
        style={{ width: '100%', height: 'calc(100% - 30px)' }}
      />
    </div>
  )
}

