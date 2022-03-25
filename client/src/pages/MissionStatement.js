import Landing from '../components/landing'
import Input from '../components/input'
import { useState, useEffect } from 'react'

const MissionStatement = () => {
  const [formValue, setFormValue] = useState({
    pokemonName: '',
    section: '',
    image: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue((preState) => {
      return {
        ...preState,
        [name]: value
      }
    })
  }

  const { pokemonName, section, image } = formValue

  return (
    <div>
      <Landing />
      <section class="input-section">
        <input
          type="text"
          name="pokemonName"
          placeholder="Name"
          value={pokemonName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="section"
          placeholder="Section"
          value={section}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={image}
          onChange={handleChange}
        />
        <button>Submit</button>
      </section>
    </div>
  )
}

export default MissionStatement
