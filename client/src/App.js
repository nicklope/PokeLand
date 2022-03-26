import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import MissionStatement from './pages/MissionStatement'
import ParkSection from './pages/ParkSection'
import {
  backgroundImageLanding,
  backgroundImageAdd,
  mapImage,
  landingBanner,
  missionBanner,
  missionBackground,
  mapBanner
} from './ImageLinks'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              backgroundImage={backgroundImageLanding}
              landingBanner={landingBanner}
              missionBackground={missionBackground}
              missionBanner={missionBanner}
              mapImage={mapImage}
              mapBanner={mapBanner}
            />
          }
        />
        <Route
          path="/mission/statement"
          element={<MissionStatement backgroundImage={backgroundImageAdd} />}
        />
        <Route path="/park/section/:sectionName" element={<ParkSection />} />
        <Route path="/poke/card" element="" />
      </Routes>
    </div>
  )
}

export default App
