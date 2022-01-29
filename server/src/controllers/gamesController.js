//TODO: Setup database connection
let { games } = require('../data/games')


function getGames(req, res) {
    //Get games from DB
    res.status(200).json({success:true, message: 'Retrieved games successfully!', games: games  })
}

function getGame(req, res) {
    //Get game from DB by id
    res.status(200).json({success:true})
}

function addGame(req, res) {
    //Add game to DB
    res.status(200).json({success:true})
}

function updateGame(req, res) {
    //Update game in DB by id
    res.status(200).json({success:true})
}

function deleteGame(req, res) {
    //Delete game in DB by id
    res.status(200).json({success:true})
}

module.exports = { getGames, getGame, addGame, updateGame, deleteGame }
