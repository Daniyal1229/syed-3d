export default function Lighting({ isDay }) {
  return (
    <>
      {/* Ambient light - More realistic */}
      <ambientLight intensity={isDay ? 0.8 : 0.3} />
      
      {/* Main sun/moon light */}
      <directionalLight
        position={isDay ? [50, 50, 50] : [50, -20, 50]}
        intensity={isDay ? 2 : 0.5}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={100}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0001}
      />
      
      {/* Hemisphere light for realistic sky/ground lighting */}
      <hemisphereLight
        color={isDay ? "#ffffff" : "#404040"}
        groundColor={isDay ? "#a0a0a0" : "#202020"}
        intensity={isDay ? 0.6 : 0.4}
      />
      
      {/* Fill light for better visibility */}
      <directionalLight
        position={isDay ? [-30, 20, -30] : [-30, 10, -30]}
        intensity={isDay ? 0.5 : 0.2}
      />
    </>
  )
}

