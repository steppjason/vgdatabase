const dc = require('./dataController')

function getGames(req, res) {
    dc.runQuery( 'SELECT * FROM game ORDER BY title ASC', null, 'Found  games successfully!', 'No games found!', req, res)
}

function getGame(req, res) {
    const { id } = req.params
    dc.runQuery( 'SELECT * FROM game WHERE gameid = $1', [id], 'Found game successfully!', 'Game was not found!', req, res)
}

function addGame(req, res) {
    const { title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage } = req.body

    dc.runQuery(`INSERT INTO game (title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage) 
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
                [title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage],
                'Added game successfully!', 'Failed to add game!', req, res)
}

function updateGame(req, res) {
    const { id } = req.params
    const { title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage } = req.body

    dc.runQuery(`UPDATE game SET title = $2, summary = $3, longdescription = $4, publisher = $5, 
                developer = $6, platform = $7, genre = $8, releasedate = $9, coverimage = $10 WHERE gameid = $1 RETURNING *`,
                [id, title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage],
                'Updated game successfully!','Failed to update game!', req, res)
}

function deleteGame(req, res) {
    const { id } = req.params
    dc.runQuery( 'DELETE FROM game WHERE gameid = $1 RETURNING *', [id], 'Deleted game successfully!', 'Could not delete game!', req, res)
}

module.exports = { getGames, getGame, addGame, updateGame, deleteGame }
