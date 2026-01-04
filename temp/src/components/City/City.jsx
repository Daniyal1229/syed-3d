import RealisticGround from './RealisticGround'
import RealisticRoads from './RealisticRoads'
import Signboards from './Signboards'
import ResidentialDistrict from './ResidentialDistrict'
import EducationBlock from './EducationBlock'
import ExperienceBlock from './ExperienceBlock'
import TechPark from './TechPark'
import StreetLights from './StreetLights'
import Trees from './Trees'

export default function City() {
  return (
    <group>
      {/* Realistic Ground with Trees */}
      <RealisticGround />
      <Trees />
      
      {/* Realistic Roads with Crossroads */}
      <RealisticRoads />
      
      {/* Navigation Signboards */}
      <Signboards />
      
      {/* Residential District (Left turn at first cross) */}
      <ResidentialDistrict />
      
      {/* Education Block (Left turn at second cross) */}
      <EducationBlock />
      
      {/* Experience Block (After bridge, right turn) */}
      <ExperienceBlock />
      
      {/* Tech Park (Side area near main road) */}
      <TechPark />
      
      {/* Street Lights */}
      <StreetLights />
    </group>
  )
}
