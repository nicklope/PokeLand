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

  useEffect(() => {
    // getPokemon()
  }, [])
  const getPokemon = async () => {
    const response = await axios.post('http://localhost:3001/')
    console.log(response.data)
  }
  const filterPokemon = (pokemonType) => {
    switch (pokemonType) {
      case '':
      // setSkyPark()
    }
  }

  const parkSection = (section) => {
    navigate(`/park/section/${section}`)
  }

  return (
    <div>
      <Landing />
      <Landing />
      <section class="container-grid">
        <SectionCard
          sectionName="Sky Park"
          onclick={() => parkSection('skyPark')}
          image={skyParkImg}
          // pokemon={skyPark}
        />
        <SectionCard
          sectionName="Water Park"
          onclick={() => parkSection('waterPark')}
          image={waterParkImg}
          // pokemon={waterPark}
        />
        <SectionCard
          sectionName="Forest Land"
          onclick={() => parkSection('forestLand')}
          image={forestLandImg}
          // pokemon={forestLand}
        />
        <SectionCard
          sectionName="Volcano Land"
          onclick={() => parkSection('volcanoLand')}
          image={volcanoLandImg}
          // pokemon={volcanoLand}
        />
        <SectionCard
          sectionName="Haunted House"
          onclick={() => parkSection('hauntedHouse')}
          image={hauntedHouseImg}
          // pokemon={hauntedHouse}
        />
        <SectionCard
          sectionName="Pokemon Ranch"
          onclick={() => parkSection('pokemonRanch')}
          image={pokemonRanchImg}
          // pokemon={pokemonRanch}
        />
        <button onClick={() => getPokemon()}>submit</button>
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
