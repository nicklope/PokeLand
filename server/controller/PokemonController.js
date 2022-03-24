const Pokemon = require('../models/Pokemon')

//const getPokemonDetails = async (req, res) => { try { const pokemon = await.Pokemon.find() return res.status(200).json({pokemon}) } catch (error) { return res.status(500).send(error.message) } }
//const findPokemon = async (req, res) => { try { const {id} = req.params const pokemon = await Pokemon.findById(id) if (pokemon) { return res.status(200).json({pokemon}) } return res.status(404).send('Pokemon with the specified ID does not exist') } catch (error) { return res.status(500).send(error.message) } }
//const createPokemonDetails = async (req, res) => { try { const pokemon = await new Pokemon(req.body) await pokemon.save() return res.status(200).json({ pokemon }) { catch (error) { return res.status(500).json({ error: error message }) } }

//module.exports = { getPokemonDetails, findPokemon, createPokemon }
