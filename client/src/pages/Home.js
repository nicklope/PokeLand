import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'

const Home = () => {
  return (
    <div>
      <Landing />
      <PokemonCard />
    </div>
  )
}

export default Home
