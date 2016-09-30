var
  mongoose = require('mongoose'),

  characterSchema = mongoose.Schema({
    name: {type: String, required: true},
    power: Array,
    sex: String,
    created: Number,
    universe: String,
    hero: Boolean
  }, {timestamps: true})

var Character = mongoose.model('Character', characterSchema)

modules.exports = Character
