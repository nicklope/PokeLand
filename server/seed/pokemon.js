const db = require('../db')
const Pokemon = require('../models/Pokemon')
const axios = require('axios')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  let res
  async function getPokemon() {
    res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    // console.log(res.data.results)

    console.log('Pokemon incoming!')
  }

  await getPokemon()
  await Pokemon.insertMany(res.data.results)
}
const run = async () => {
  await main()
  db.close()
}
run()
