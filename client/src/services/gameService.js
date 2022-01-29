import Api from '@/services/api'


function getGames() {
    return Api().get('/')
}

function getGame(id) {
    return Api().get(`/${id}`)
}

function addGame(game) {
    return Api().post(`/${game}`)
}

function updateGame(id) {
    return Api().put(`/${id}`)
}

function deleteGame(id) {
    return Api().delete(`/${id}`)
}

export default { getGames, getGame, addGame, updateGame, deleteGame }
