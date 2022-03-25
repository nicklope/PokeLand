import Landing from '../components/landing'
import Input from '../components/input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MissionStatement = () => {
  const backgroundImage =
    'https://poketouch.files.wordpress.com/2018/06/pokemon_trainer_spotlight_professor_oak_with_kanto_starters_bulbasaur_charmander_and_squirtle.jpg'
  const bannerImage =
    'https://fontmeme.com/permalink/220325/8bd71c754139bff2f2b1d2bdaacfe80e.png'
  const navigate = useNavigate()

  const [formValue, setFormValue] = useState({
    name: '',
    section: '',
    image: ''
  })

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

  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/mission/statement', formValue)
    navigate('/')
  }

  const { name, section, image } = formValue

  return (
    <div>
      <Landing image={backgroundImage} banner={bannerImage} />
      <section className="input-section">
        <input
          className="form"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="section"
          placeholder="Section"
          value={section}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="image"
          placeholder="Image"
          value={image}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </section>
    </div>
  )
}

export default MissionStatement
