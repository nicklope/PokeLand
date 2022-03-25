import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../components/landing'
import PokemonCard from '../components/PokemonCard'
import SectionCard from '../components/sectionCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const [sections, setSection] = useState([])

  const getSections = async () => {
    const response = await axios.get('http://localhost:3001/section')
    console.log(response.data.section)
    setSection(response.data.section)
  }
  useEffect(() => {
    getSections()
  }, [])
  const navigate = useNavigate()

  const navMissionStatement = () => {
    navigate('/mission/statement')
  }
  const filterPokemon = (pokemonType) => {
    switch (pokemonType) {
    }
  }

  const navSection = (section) => {
    navigate(`/park/section/${section}`)
  }

  return (
    <div>
      <Landing
        backgroundImage={props.backgroundImage}
        landingBanner={props.landingBanner}
      />
      <Link to="/mission/statement">
        <Landing
          onClick={() => navMissionStatement()}
          backgroundImage={
            'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/pokemon-professors-featured.jpg?q=50&fit=contain&w=943&h=500&dpr=1.5'
          }
          landingBanner={props.missionBanner}
        />
      </Link>
      <Landing
        backgroundImage={'https://i.imgur.com/MQXAmH3.png'}
        landingBanner={
          'https://fontmeme.com/permalink/220325/88f4258a1aed67434d473062560c4788.png'
        }
      />
      <section className="container-grid">
        {sections.map((section) => (
          <div>
            <SectionCard
              sectionName={`${section.sectionName} Park`}
              onclick={() => navSection(section.sectionName)}
              image={section.image}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
