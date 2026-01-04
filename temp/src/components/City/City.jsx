import RealisticGround from './RealisticGround'
import RealisticRoads from './RealisticRoads'
import Signboards from './Signboards'
import ResidentialDistrict from './ResidentialDistrict'
import EducationBlock from './EducationBlock'
import RealisticBridge from './RealisticBridge'
import ExperienceBlock from './ExperienceBlock'
import TechPark from './TechPark'
import ProjectsBoulevard from './ProjectsBoulevard'
import StreetLights from './StreetLights'

export default function City() {
  return (
    <group>
      {/* Realistic Ground with Trees */}
      <RealisticGround />
      
      {/* Realistic Roads with Crossroads */}
      <RealisticRoads />
      
      {/* Navigation Signboards */}
      <Signboards />
      
      {/* Residential District (Left turn at first cross) */}
      <ResidentialDistrict />
      
      {/* Education Block (Left turn at second cross) */}
      <EducationBlock />
      
      {/* Realistic Bridge (Transition to Experience) */}
      <RealisticBridge />
      
      {/* Experience Block (After bridge, right turn) */}
      <ExperienceBlock />
      
      {/* Tech Park (Side area near main road) */}
      <TechPark />
      
      {/* Projects Boulevard */}
      <ProjectsBoulevard />
      
      {/* Street Lights */}
      <StreetLights />
    </group>
  )
}

