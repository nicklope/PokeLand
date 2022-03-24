const { model } = require('mongoose')
const PokemonSchema = require('./Pokemon')
const SectionSchema = require('./Section')

const Pokemon = model('Pokemon', PokemonSchema)
const Section = model('Section', SectionSchema)

module.exports = {
  Pokemon,
  Section
}
