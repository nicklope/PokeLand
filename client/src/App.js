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

  const [formValue, setFormValue] = useState({
    name: '',
    section: '',
    image: ''
  })

  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/mission/statement', formValue)
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
          element={<Home backgroundImage={backgroundImageLanding} />}
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
