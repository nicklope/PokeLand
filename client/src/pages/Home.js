import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'
import SectionCard from '../components/sectionCard'

const Home = () => {
  return (
    <div>
      <Landing />
      <PokemonCard />
      <SectionCard />
    </div>
  )
}

export default Home
