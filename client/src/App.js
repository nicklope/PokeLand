import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import MissionStatement from './pages/MissionStatement'
import ParkSection from './pages/ParkSection'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const navigate = useNavigate()
  const backgroundImageAdd =
    'https://poketouch.files.wordpress.com/2018/06/pokemon_trainer_spotlight_professor_oak_with_kanto_starters_bulbasaur_charmander_and_squirtle.jpg'
  const backgroundImageLanding = 'https://i.imgur.com/MQXAmH3.png'
  const bannerImageAdd =
    'https://fontmeme.com/permalink/220325/8bd71c754139bff2f2b1d2bdaacfe80e.png'
  const bannerImageLanding =
    'https://fontmeme.com/permalink/220324/b85ecfe51642a549db4b9889f0f37387.png'

  const skyParkImg =
    'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/06/760771.jpg?q=50&fit=contain&w=943&h=496&dpr=1.5'
  const waterParkImg = 'https://wallpaperaccess.com/full/118488.jpg'
  const forestLandImg = 'https://www.1999.co.jp/itbig59/10592095.jpg'
  const volcanoLandImg =
    'https://pm1.narvii.com/7115/ed037afd6a9c1c8c93e4bf8048e34603fe02ed11r1-1024-671v2_hq.jpg'
  const hauntedHouseImg =
    'https://i.pinimg.com/originals/9d/8e/c2/9d8ec2fbccd833b699cefcb214450a9a.jpg'
  const pokemonRanchImg =
    'https://cdn.donmai.us/sample/7c/6a/__whitney_and_miltank_pokemon_and_2_more_drawn_by_nazgul_5511474__sample-7c6abd5f5c0e5954d6846b1d43f02897.jpg'

  const [formValue, setFormValue] = useState({
    name: '',
    section: '',
    image: ''
  })

  const handleSubmit = async () => {
    // await axios.post('http://localhost:3001/mission/statement', formValue)
    navigate('/')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    const newValues = (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    }
    setFormValue(newValues)
  }

  const { name, section, image } = formValue

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              backgroundImage={backgroundImageLanding}
              banner={bannerImageLanding}
              skyPark={skyParkImg}
              waterPark={waterParkImg}
              forest={forestLandImg}
              volcanoLand={volcanoLandImg}
              hauntedHouse={hauntedHouseImg}
              pokemonRanch={pokemonRanchImg}
            />
          }
        />
        <Route
          path="/mission/statement"
          element={
            <MissionStatement
              backgroundImage={backgroundImageAdd}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              name={name}
              section={section}
              image={image}
              banner={bannerImageAdd}
            />
          }
        />
        <Route path="/park/section/" element={<ParkSection />} />
        <Route path="/poke/card" element="" />
      </Routes>
    </div>
  )
}

export default App
