import { useFrame, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import useStore from '../../store/useStore'
import * as THREE from 'three'

export default function CameraController() {
  const { camera } = useThree()
  const carPosition = useStore((state) => state.carPosition)
  const carRotation = useStore((state) => state.carRotation)

  useFrame((state, delta) => {
    // Camera follows car with smooth interpolation
    const targetPosition = new THREE.Vector3(
      carPosition[0] - Math.sin(carRotation) * 8,
      carPosition[1] + 6,
      carPosition[2] - Math.cos(carRotation) * 8
    )
    
    const targetLookAt = new THREE.Vector3(
      carPosition[0],
      carPosition[1] + 1,
      carPosition[2]
    )
    
    // Smooth camera movement
    camera.position.lerp(targetPosition, 2 * delta)
    
    // Look at car
    const currentLookAt = new THREE.Vector3()
    camera.getWorldDirection(currentLookAt)
    currentLookAt.add(camera.position)
    currentLookAt.lerp(targetLookAt, 5 * delta)
    camera.lookAt(currentLookAt)
  })

  return null
}

