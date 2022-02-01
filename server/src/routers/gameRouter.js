const express = require('express')
const router = express.Router()

const GameController = require('../controllers/gameController')

router.get('/', GameController.getGames)
router.get('/:id/:url', GameController.getGame)
router.post('/', GameController.addGame)
router.put('/:id', GameController.updateGame)
router.delete('/:id', GameController.deleteGame)

module.exports = router
