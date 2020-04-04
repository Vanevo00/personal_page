export {} // avoiding TS redeclaration error
const mongoose = require('mongoose')

const VisitorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ip: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  agent: {
    type: String
  },
  numberOfVisits: {
    type: Number,
    required: true,
    default: 1
  },
  created: {
    type: Date,
    default: Date.now()
  },
  lastVisit: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('visitor', VisitorSchema)
