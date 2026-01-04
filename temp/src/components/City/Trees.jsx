import { useMemo } from 'react'

export default function Trees() {
  const treeData = useMemo(() => {
    const parkBoundary = { xMin: 2, xMax: 22, zMin: -25, zMax: -5 };
    const newTrees = [];

    // Adjusted loop to increase density and area coverage
    for (let i = 0; i < 40; i++) { 
      let x, z;
      let attempts = 0;
      let positionValid = false;

      // Loop to find a valid position for each tree
      while (!positionValid && attempts < 100) {
        x = (Math.random() - 0.5) * 100; // Wider range for x
        z = (Math.random() - 0.5) * 100; // Wider range for z

        // Check if the position is outside the park boundary
        const inPark = x > parkBoundary.xMin && x < parkBoundary.xMax && z > parkBoundary.zMin && z < parkBoundary.zMax;
        
        if (!inPark) {
          positionValid = true;
          newTrees.push({ x, z });
        }
        attempts++;
      }
    }
    return newTrees;
  }, []);

  return (
    <group>
      {treeData.map((tree, i) => (
        <group key={`tree-${i}`} position={[tree.x, 0, tree.z]}>
          <mesh castShadow position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.2, 0.25, 3, 8]} />
            <meshStandardMaterial color="#654321" roughness={1} />
          </mesh>
          <mesh castShadow position={[0, 3.5, 0]}>
            <sphereGeometry args={[1.2, 8, 8]} />
            <meshStandardMaterial color="#2d5016" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
