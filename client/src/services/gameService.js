import Api from '@/services/api'


function getGames() {
    let response = Api().get('/')
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("RESPONSE ERROR===================>")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("REQUEST ERROR===================>")
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("GENERIC ERROR===================>")
                console.log('Error', error.message);
            }
            console.log("CONFIG ERROR===================>")
            console.log(error.config);
        });
    
    
    return response
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
