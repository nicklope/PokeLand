import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'
import SectionCard from '../components/sectionCard'

const Home = () => {
  const [skyPark, setSkyPark] = useState([])
  const [waterPark, setWaterPark] = useState([])
  const [forestLand, setForestLand] = useState([])
  const [volcanoLand, setVolcanoLand] = useState([])
  const [hauntedHouse, setHauntedHouse] = useState([])
  const [pokemonRanch, setPokemonRanch] = useState([])

  return (
    <div>
      <Landing />
      <PokemonCard />
      <SectionCard />
    </div>
  )
}

export default Home
