var
  mongoose = require('mongoose'),

  characterSchema = mongoose.Schema({
    name: String,
    power: Array,
    sex: String,
    created: Number,
    universe: String,
    hero: Boolean
  })

var Character = mongoose.model('Character', characterSchema)

modules.exports = Character
