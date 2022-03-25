const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema(
  {
    //id
    pokemonName: { type: String },
    section: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pokemon', Pokemon)
