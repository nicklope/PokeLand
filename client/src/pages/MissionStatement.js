import Landing from '../components/landing'
import BackButton from '../components/BackButton'
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
        backgroundImage="https://media.wired.co.uk/photos/606da47d1e0ddb19555fbbba/master/w_1600%2Cc_limit/1_0627-1.jpg"
        landingBanner="https://fontmeme.com/permalink/220326/be7abc06249343c8932d4a690ede7540.png"
      />
      <h1>
        Here at PokeLand, we offer guests an experience like no others. Our
        park, which spans over 6 vast sections, allows guests to interact with
        Pokemon in a way that has never been done before!
      </h1>
      <br />
      <h1>
        All of our Pokemon residents have been rescued from unstable conditions
        and acclaimated to be comfortable with human interactions! Whether its
        flying high with Charizard in the Flying Park, or diving deep with
        Blastoise in the Water Park, our Pokemon are excited to meet you!
      </h1>
      <br />
      <h1>
        We are always accepting new rescues! If you have a Pokemon that you can
        no longer take care of or would just like to help rehabilitate a
        Pokemon, find the form below.
      </h1>
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
      <BackButton />
    </div>
  )
}

export default MissionStatement
