import PokemonCard from '../components/pokemonCard'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ParkSection = ({ pokemon }) => {
  const [skyPark, setSkyPark] = useState([])
  const [waterPark, setWaterPark] = useState([])
  const [forestLand, setForestLand] = useState([])
  const [volcanoLand, setVolcanoLand] = useState([])
  const [hauntedHouse, setHauntedHouse] = useState([])
  const [pokemonRanch, setPokemonRanch] = useState([])

  let { sectionName } = useParams()

  const selectSection = (sectionName) => {
    switch (sectionName) {
      case 'skyPark':
        setSkyPark()
        break
      case 'waterPark':
        setWaterPark()
        break
      case 'forestLand':
        setForestLand()
        break
      case 'volcanoLand':
        setVolcanoLand()
        break
      case 'hauntedHouse':
        setHauntedHouse()
        break
      default:
        setPokemonRanch()
    }
  }

  useEffect(() => {
    getPokemon()
    selectSection(sectionName)
  })

  const getPokemon = async () => {
    const response = await axios.get(``)
    // setGenres(response)
  }

  return (
    <div>
      {pokemon.map((poke) => (
        <PokemonCard
          name={pokemon.name}
          image={pokemon.image}
          description={pokemon.description}
        />
      ))}
    </div>
  )
}

export default ParkSection
