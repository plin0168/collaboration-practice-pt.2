var

Character = require('../models/characters.js')

module.exports = {

    index: function(req, res) {
        Character.find({}, function(err, characters) {
                res.json(characters)
            }) // res.json({message: "All fruits"})
    },

    create: function(req, res) {
      //create new fruit
      Character.create(req.body, function(err, character) {

        res.json({message: "Character Created!", character: character}) 
  })
  },

    show: function(req, res) {
        Charater.findById(req.params.id, function(err, fruit) {
                res.json(fruit)
            })
            //show specific fruit
    },

    update: function(req, res) {
        //update a specific fruit
        Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, fruit) {
                res.json({message: "Fruit Updated", updatedfruit: fruit})
            })
          },

    destroy: function(req, res) {
        //delete a specific fruit
        Fruit.findByIdAndRemove(req.params.id, function(err) {
            res.json({
                message: "Fruit Deleted"
            })
        })
    },
