import api from '@/services/api'

class GameService{
    static async getGames() {
        return await api().get('/')
    }
    
    static getGame(id) {
        return api().get(`/${id}`)
    }
    
    static addGame(game) {
        return api().post(`/${game}`)
    }
    
    static updateGame(id) {
        return api().put(`/${id}`)
    }
    
    static deleteGame(id) {
        return api().delete(`/${id}`)
    }
}

export default GameService
