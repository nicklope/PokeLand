const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema(
  {
    name: { type: String, required: true },
    section: { type: String },
    image: { type: String },
    overview: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pokemon', Pokemon)
