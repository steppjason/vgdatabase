import api from '@/services/api'

class GameService{
    static  getGames() {
        return api().get('/')
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

// function  getGames() {
//     return api().get('/')
// }

// function getGame(id) {
//     return api().get(`/${id}`)
// }

// function addGame(game) {
//     return api().post(`/${game}`)
// }

// function updateGame(id) {
//     return api().put(`/${id}`)
// }

// function deleteGame(id) {
//     return api().delete(`/${id}`)
// }

//export default { getGames, getGame, addGame, updateGame, deleteGame }


