import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../components/landing'
import PokemonCard from '../components/pokemonCard'
import SectionCard from '../components/sectionCard'
import axios from 'axios'

const Home = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    // getPokemon()
  }, [])
  const getPokemon = () => {
    // const response = await axios.get('http://localhost:3001/')
    navigate('/mission/statement')
    // console.log(response)
  }
  const filterPokemon = (pokemonType) => {
    switch (pokemonType) {
      case '':
      // setSkyPark()
    }
  }

  const navSection = () => {
    navigate(`/park/section/`)
  }

  return (
    <div>
      <Landing backgroundImage={props.backgroundImage} banner={props.banner} />
      <button onClick={() => getPokemon()}>Found a PokeMon?</button>
      <section className="container-grid">
        <SectionCard
          sectionName="Sky"
          onclick={() => navSection()}
          image={props.skyPark}
        />
        <SectionCard
          sectionName="Water"
          onClick={() => navSection()}
          image={props.waterPark}
        />
        <SectionCard
          sectionName="Forest"
          onClick={() => navSection()}
          image={props.forest}
        />
        <SectionCard
          sectionName="Fire"
          onClick={() => navSection()}
          image={props.volcanoLand}
        />
        <SectionCard
          sectionName="Ghost"
          onClick={() => navSection()}
          image={props.hauntedHouse}
        />
        <SectionCard
          sectionName="Ranch"
          onClick={() => navSection()}
          image={props.pokemonRanch}
        />
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
