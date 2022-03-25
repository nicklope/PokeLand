import Landing from '../components/landing'
import Input from '../components/input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MissionStatement = (props) => {
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
      <Landing
        backgroundImage={props.backgroundImage}
        landingBanner={
          'https://fontmeme.com/permalink/220325/51cb9bd3c15dcfce48a9d486bee432b8.png'
        }
      />
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
        <Link to="/">
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
        </Link>
      </section>
    </div>
  )
}

export default MissionStatement
