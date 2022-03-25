import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import MissionStatement from './pages/MissionStatement'
import ParkSection from './pages/ParkSection'

function App() {
  const backgroundImageLanding =
    'https://games-b26f.kxcdn.com/wp-content/uploads/2021/07/Pokemon-Wonder-feature-image-770x470.jpg'
  const backgroundImageAdd =
    'https://poketouch.files.wordpress.com/2018/06/pokemon_trainer_spotlight_professor_oak_with_kanto_starters_bulbasaur_charmander_and_squirtle.jpg'
  const mapImageLanding = 'https://i.imgur.com/MQXAmH3.png'
  const landingBanner =
    'https://fontmeme.com/permalink/220324/b85ecfe51642a549db4b9889f0f37387.png'
  const missionBanner =
    'https://fontmeme.com/permalink/220325/0ef99bc2a694cfa48401526bac9c541c.png'
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              backgroundImage={backgroundImageLanding}
              landingBanner={landingBanner}
              missionBanner={missionBanner}
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
