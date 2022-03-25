const Pokemon = require('../models/Pokemon')
const Section = require('../models/Section')
const axios = require('axios')

const getPokemonDetails = async (req, res) => {
  try {
    const pokemon = await Pokemon.find()
    return res.status(200).json({ pokemon })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSectionDetails = async (req, res) => {
  try {
    const section = await Section.find()
    return res.status(200).json({ section })
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
    console.log('test')
    const pokemon = await new Pokemon(req.body)
    await pokemon.save()
    return 'test'
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getPokemonBySection = async (req, res) => {
  try {
    const pokemon = await Pokemon.find({ section: req.params.section })
    res.send(pokemon)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
// res.status(200).json({ pokemon })
module.exports = {
  getPokemonDetails,
  findPokemon,
  createPokemonDetails,
  getSectionDetails,
  getPokemonBySection
}
