import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../components/landing'

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
          backgroundImage={props.missionBackground}
          landingBanner={props.missionBanner}
        />
      </Link>
      <Landing
        backgroundImage={props.mapImage}
        landingBanner={props.mapBanner}
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
