var
express = require('express')
characterRouter = express.Router() // to pull the Router function from express
charactersController = require('../controllers/characters.js')

characterRouter.route('/characters')

    .get(charactersController.index)
    .post(charactersController.create)

characterRouter.route('/characters/:id')
    .get(charactersController.show)
    .patch(charactersController.update)
    .delete(charactersController.destroy)
    .post(charactersController.addFriend)

module.exports = characterRouter
