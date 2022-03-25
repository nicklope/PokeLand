import PokemonCard from '../components/PokemonCard'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import axios from 'axios'

const ParkSection = () => {
  let { sectionName } = useParams()
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    const response = await axios.get('http://localhost:3001/')
    console.log(response)
  }

  useEffect(() => {
    getPokemon()
    console.log('test')
  }, [])

  return (
    <div className="container-grid">
      {pokemon.map((pokemon) => (
        <PokemonCard
          image={pokemon.image}
          name={pokemon.name}
          overview={pokemon.overview}
        />
      ))}
    </div>
  )
}

export default ParkSection
