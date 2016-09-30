var

Character = require('../models/characters.js')

module.exports = {
    index: function(req, res) {
        Character.find({}, function(err, characters) {
                res.json(characters)
            })
    },

    create: function(req, res) {
      Character.create(req.body, function(err, character) {
        res.json({message: "Character Created!", character: character})
      })
    },

    show: function(req, res) {
        Charater.findById(req.params.id, function(err, character) {
                res.json(character)
            })
    },

    update: function(req, res) {
        Character.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, character) {
                res.json({message: "Charater Updated", updatedcharacter: character})
            })
          },

    destroy: function(req, res) {
        Character.findByIdAndRemove(req.params.id, function(err) {
            res.json({message: "Character Deleted"})
        })
    }
}
