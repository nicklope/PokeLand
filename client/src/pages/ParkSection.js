import PokemonCard from '../components/pokemonCard'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import axios from 'axios'

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
  const getPokemon = async () => {
    const response = await axios.get('http://localhost:3001/')
    console.log(response)
  }

  useEffect(() => {
    getPokemon()
    console.log('test')
  }, [])

  return (
    <div>
      <Landing />
    </div>
  )
}

export default ParkSection
