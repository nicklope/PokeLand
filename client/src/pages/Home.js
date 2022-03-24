import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'
import SectionCard from '../components/sectionCard'
import axios from 'axios'

const Home = () => {
  const [skyPark, setSkyPark] = useState([])
  const [waterPark, setWaterPark] = useState([])
  const [forestLand, setForestLand] = useState([])
  const [volcanoLand, setVolcanoLand] = useState([])
  const [hauntedHouse, setHauntedHouse] = useState([])
  const [pokemonRanch, setPokemonRanch] = useState([])

  useEffect(() => {
    getPokemon()
  }, [])

  const filterPokemon = (pokemonType) => {
    switch (pokemonType) {
      case '':
        setSkyPark()
    }
  }

  const getPokemon = async () => {
    const response = await axios.get(``)
    // setGenres(response)
  }

  return (
    <div>
      <Landing />
      <Landing />
      <section class="container-grid">
        <SectionCard sectionName="Sky Park" image="" />
        <SectionCard sectionName="Water Park" image="" />
        <SectionCard
          sectionName="Forest Land"
          image="http://pm1.narvii.com/5725/29631f955694b9f0dde9bec6504ad420d244476e_00.jpg"
        />
        <SectionCard
          sectionName="Volcano Land"
          image="https://pm1.narvii.com/7115/ed037afd6a9c1c8c93e4bf8048e34603fe02ed11r1-1024-671v2_hq.jpg"
        />
        <SectionCard sectionName="Haunted House" image="" />
        <SectionCard sectionName="Pokemon Ranch" image="" />
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
