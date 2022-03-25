import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'
import SectionCard from '../components/sectionCard'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate()

  // const skyParkImg = ''
  // const waterParkImg =
  //   'http://pm1.narvii.com/5725/29631f955694b9f0dde9bec6504ad420d244476e_00.jpg'
  // const forestLandImg = ''
  // const volcanoLandImg =
  //   'https://pm1.narvii.com/7115/ed037afd6a9c1c8c93e4bf8048e34603fe02ed11r1-1024-671v2_hq.jpg'
  // const hauntedHouseImg = ''
  // const pokemonRanchImg = ''

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

  // const parkSection = (section) => {
  //   navigate(`/park/section/${section}`)
  // }

  return (
    <div>
      <Landing />
      <Landing />
      <section class="container-grid">
        <SectionCard
          sectionName="Sky Park"
          onclick={() => parkSection('skyPark')}
          image=""
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
          image=""
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
          image=""
          // pokemon={hauntedHouse}
        />
        <SectionCard
          sectionName="Pokemon Ranch"
          onclick={() => parkSection('pokemonRanch')}
          image=""
          // pokemon={pokemonRanch}
        />
        <button onClick={() => getPokemon()}>submit</button>
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
