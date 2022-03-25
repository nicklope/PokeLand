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
  const gotPokemon = () => {
    // const response = await axios.get('http://localhost:3001/')
    navigate('/mission/statement')
  }
  const filterPokemon = (pokemonType) => {
    switch (pokemonType) {
      case '':
      // setSkyPark()
    }
  }

  return (
    <div>
      <Landing backgroundImage={props.backgroundImage} banner={props.banner} />
      <button onClick={() => props.gotPokemon()}>Found a PokeMon?</button>
      <section className="container-grid">
        <SectionCard
          sectionName="Sky"
          onclick={() => props.navSection()}
          image={props.skyPark}
        />
        <SectionCard
          sectionName="Water"
          onClick={() => props.navSection()}
          image={props.waterPark}
        />
        <SectionCard
          sectionName="Forest"
          onClick={() => props.navSection()}
          image={props.forest}
        />
        <SectionCard
          sectionName="Fire"
          onClick={() => props.navSection()}
          image={props.volcanoLand}
        />
        <SectionCard
          sectionName="Ghost"
          onClick={() => props.navSection()}
          image={props.hauntedHouse}
        />
        <SectionCard
          sectionName="Ranch"
          onClick={() => props.navSection()}
          image={props.pokemonRanch}
        />
      </section>
      <PokemonCard />
    </div>
  )
}

export default Home
