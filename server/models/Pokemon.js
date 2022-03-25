const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema(
  {
    name: { type: String },
    section: { type: String },
    overview: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pokemon', Pokemon)
