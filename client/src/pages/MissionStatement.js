import Landing from '../components/landing'
import Input from '../components/input'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MissionStatement = () => {
  const [formValue, setFormValue] = useState({
    pokemonName: '',
    section: '',
    image: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  // const postPoke = async (formValue) => {
  //   await axios.post('http://localhost:3001/mission/statment', formValue)
  // }

  const { pokemonName, section, image } = formValue

  return (
    <div>
      <Landing />
      <section className="input-section">
        <input
          className="form"
          type="text"
          name="pokemonName"
          placeholder="Name"
          value={pokemonName}
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
        <button
          onClick={async () =>
            await axios.post(
              'http://localhost:3001/mission/statement',
              formValue
            )
          }
        >
          Submit
        </button>
      </section>
    </div>
  )
}

export default MissionStatement
