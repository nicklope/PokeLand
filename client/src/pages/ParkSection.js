import PokemonCard from '../components/PokemonCard'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from '../components/landing'
import axios from 'axios'

const ParkSection = (props) => {
  let { sectionName } = useParams()
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    const response = await axios.get(`http://localhost:3001/${sectionName}`)
    console.log(response.data)
    setPokemon(response.data)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  switch (sectionName) {
    case 'Flying':
      return (
        <div>
          <Landing
            backgroundImage="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/06/760771.jpg?q=50&fit=contain&w=943&h=496&dpr=1.5"
            landingBanner="https://fontmeme.com/permalink/220326/5fb787fc64b6c889fd5aa6eba8d8f649.png"
          />
          <div className="container-grid">
            {pokemon.map((pokemon) => (
              <PokemonCard
                image={pokemon.image}
                name={pokemon.name}
                overview={pokemon.overview}
              />
            ))}
          </div>
        </div>
      )
      break
    case 'Water':
      return (
        <div>
          <Landing
            backgroundImage="https://wallpaperaccess.com/full/118488.jpg"
            landingBanner="https://fontmeme.com/permalink/220326/0b01fe42f79ed6589b5c1fa54753a2f7.png"
          />
          <div className="container-grid">
            {pokemon.map((pokemon) => (
              <PokemonCard
                image={pokemon.image}
                name={pokemon.name}
                overview={pokemon.overview}
              />
            ))}
          </div>
        </div>
      )
      break
    case 'Forest':
      return (
        <div>
          <Landing
            backgroundImage="https://images6.alphacoders.com/114/1140114.jpg"
            landingBanner="https://fontmeme.com/permalink/220326/9a3e8dfb7ac346cc58b2267c0a26bf44.png"
          />
          <div className="container-grid">
            {pokemon.map((pokemon) => (
              <PokemonCard
                image={pokemon.image}
                name={pokemon.name}
                overview={pokemon.overview}
              />
            ))}
          </div>
        </div>
      )
      break
    case 'Fire':
      return (
        <div>
          <Landing
            backgroundImage="https://pm1.narvii.com/7115/ed037afd6a9c1c8c93e4bf8048e34603fe02ed11r1-1024-671v2_hq.jpg"
            landingBanner="https://fontmeme.com/permalink/220326/28d246927f644692fc99308b5f1360f8.png"
          />
          <div className="container-grid">
            {pokemon.map((pokemon) => (
              <PokemonCard
                image={pokemon.image}
                name={pokemon.name}
                overview={pokemon.overview}
              />
            ))}
          </div>
        </div>
      )
      break
    case 'Ghost':
      return (
        <div>
          <Landing
            backgroundImage="https://i.pinimg.com/originals/9d/8e/c2/9d8ec2fbccd833b699cefcb214450a9a.jpg"
            landingBanner="https://fontmeme.com/permalink/220326/7948c1128811bb3aae4251ca3034cfae.png"
          />
          <div className="container-grid">
            {pokemon.map((pokemon) => (
              <PokemonCard
                image={pokemon.image}
                name={pokemon.name}
                overview={pokemon.overview}
              />
            ))}
          </div>
        </div>
      )
      break
    case 'Ranch':
      return (
        <div>
          <Landing
            backgroundImage="https://cdn.donmai.us/sample/7c/6a/__whitney_and_miltank_pokemon_and_2_more_drawn_by_nazgul_5511474__sample-7c6abd5f5c0e5954d6846b1d43f02897.jpg"
            landingBanner="https://fontmeme.com/permalink/220326/6e83f5f56d251744f2ac74584e9b413a.png"
          />
          <div className="container-grid">
            {pokemon.map((pokemon) => (
              <PokemonCard
                image={pokemon.image}
                name={pokemon.name}
                overview={pokemon.overview}
              />
            ))}
          </div>
        </div>
      )
      break
  }
}

export default ParkSection
