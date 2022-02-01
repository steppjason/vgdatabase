const Game = require("../models/gameModel")

class GameController{
	static getGames(req, res) {
		Game.getAll(req, res)
	}
	
	static getGame(req, res) {
		Game.get(req, res)
	}
	
	static addGame(req, res) {
		Game.create(req, res)
	}
	
	static updateGame(req, res) {
		Game.update(req, res)
	}
	
	static deleteGame(req, res) {
		Game.delete(req,res)
	}
}

module.exports = GameController
