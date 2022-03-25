import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'
import SectionCard from '../components/sectionCard'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate()

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

  const backgroundImage = 'https://i.imgur.com/MQXAmH3.png'
  const bannerImage =
    'https://fontmeme.com/permalink/220324/b85ecfe51642a549db4b9889f0f37387.png'

  useEffect(() => {
    // getPokemon()
  }, [])
  const getPokemon = () => {
    // const response = await axios.get('http://localhost:3001/')
    navigate('/mission/statement')
    // console.log(response)
  }
  const filterPokemon = (pokemonType) => {
    switch (pokemonType) {
      case '':
      // setSkyPark()
    }
  }

  const navSection = () => {
    navigate(`/park/section/`)
  }

  return (
    <div>
      <Landing image={backgroundImage} banner={bannerImage} />
      <button onClick={() => getPokemon()}>Found a PokeMon?</button>
      <section className="container-grid">
        <SectionCard
          sectionName="Sky"
          onclick={() => navSection()}
          image={skyParkImg}
        />
        <SectionCard
          sectionName="Water"
          onClick={() => navSection()}
          image={waterParkImg}
        />
        <SectionCard
          sectionName="Forest"
          onClick={() => navSection()}
          image={forestLandImg}
        />
        <SectionCard
          sectionName="Fire"
          onClick={() => navSection()}
          image={volcanoLandImg}
        />
        <SectionCard
          sectionName="Ghost"
          onClick={() => navSection()}
          image={hauntedHouseImg}
        />
        <SectionCard
          sectionName="Ranch"
          onClick={() => navSection()}
          image={pokemonRanchImg}
        />
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
