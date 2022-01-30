//TODO: Setup database connection
let { games } = require('../data/games')
const dataController = require('./dataController')

async function getGames(req, res) {
    try {
        const query = await dataController.query("SELECT * FROM game")
        res.status(200).json({success:true, message: 'Retrieved games successfully!', data: query.rows })
    } catch (err) {
        console.error(err)
        res.status(404).json({success: false, message: err })
    }
}

async function getGame(req, res) {
    try {
        const query = await dataController.query("SELECT * FROM game")
        res.status(200).json({success:true, message: 'Retrieved games successfully!', data: query.rows })
    } catch (err) {
        console.error(err)
        res.status(404).json({success: false, message: err })
    }
}

async function addGame(req, res) {
    //Add game to DB
    res.status(200).json({success:true})
}

async function updateGame(req, res) {
    //Update game in DB by id
    res.status(200).json({success:true})
}

async function deleteGame(req, res) {
    //Delete game in DB by id
    res.status(200).json({success:true})
}

module.exports = { getGames, getGame, addGame, updateGame, deleteGame }
