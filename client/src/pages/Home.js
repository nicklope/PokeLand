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
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
