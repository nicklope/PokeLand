const db = require('../db')
const Pokemon = require('../models/Pokemon')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const pokemon = []

  await Pokemon.insertMany(pokemon)
  console.log('Pokemon incoming!')
}
const run = async () => {
  await main()
  db.close()
}
