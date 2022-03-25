import Landing from '../components/landing'
import Input from '../components/input'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MissionStatement = () => {
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

  const { name, section, image } = formValue

  return (
    <div>
      <Landing />
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
