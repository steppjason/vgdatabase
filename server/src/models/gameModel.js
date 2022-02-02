const db = require('../data/db')

class Game{

	static getAll(req, res, method) {
		db.runQuery( 'SELECT * FROM game ORDER BY title ASC', null, 'Found  games successfully!', 'No games found!', req, res, "GET")
	}

	static get(req, res, method) {
		const { id } = req.params
		db.runQuery( 'SELECT * FROM game WHERE gameid = $1', [id], 'Found game successfully!', 'Game was not found!', req, res, "GET")
	}

	static create(req, res, method) {
		const { title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage } = req.body
		db.runQuery(`INSERT INTO game (title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage) 
				VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
				[title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage],
				'Added game successfully!', 'Failed to add game!', req, res, "POST")
	}

	static update(req, res, method) {
		const { id } = req.params
    	const { title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage } = req.body

		db.runQuery(`UPDATE game SET title = $2, summary = $3, longdescription = $4, publisher = $5, 
				developer = $6, platform = $7, genre = $8, releasedate = $9, coverimage = $10 WHERE gameid = $1 RETURNING *`,
				[id, title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage],
				'Updated game successfully!','Failed to update game!', req, res, "PUT")
	}

	static delete(req, res, method) {
		const { id } = req.params
		db.runQuery( 'DELETE FROM game WHERE gameid = $1 RETURNING *', [id], 'Deleted game successfully!', 'Could not delete game!', req, res, "DELETE")
	}

}

module.exports = Game