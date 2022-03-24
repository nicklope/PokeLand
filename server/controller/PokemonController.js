const Pokemon = require('../models/Pokemon')
const axios = require('axios')

const getPokemonDetails = async (req, res) => {
  try {
    const pokemon = await Pokemon.find()
    return res.status(200).json({ pokemon })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findPokemon = async (req, res) => {
  try {
    const { name } = req.params
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    )
    res.json(response)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPokemonDetails = async (req, res) => {
  try {
    const pokemon = await new Pokemon(req.body)
    await pokemon.save()
    return res.status(200).json({ pokemon })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { getPokemonDetails, findPokemon, createPokemonDetails }
