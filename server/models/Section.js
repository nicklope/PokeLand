const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Section = new Schema(
  {
    sectionName: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Section', Section)
