import api from '@/services/api'

class GameService{
	static async getGames() {
		return await api().get('/')
	}

	static async getGame(id, url) {
		return await api().get(`/${id}/${url}`)
	}

	static async addGame(game) {
		return await api().post(`/`, game)
	}

	static async updateGame(id, game) {
		return await api().patch(`/${id}`, game)
	}

	static async deleteGame(id) {
		return await api().delete(`/${id}`)
	}
}

export default GameService
