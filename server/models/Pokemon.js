const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema(
  {
    //id
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    section: [{ type: Schema.Types.ObjectId, ref: 'Section' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pokemon', Pokemon)
