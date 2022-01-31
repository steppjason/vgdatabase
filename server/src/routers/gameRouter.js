const express = require('express')
const router = express.Router()

const { getGames, getGame, addGame, updateGame, deleteGame } = require('../controllers/gameController')

router.get('/', getGames)
router.get('/:id/:url', getGame)
router.post('/', addGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router
