import axios from 'axios'
//import store from '@/store/index'

export default () => {
    return axios.create({
        baseURL: `https://localhost:3000/api/games`,
        //headers: {
        //    //Authorization: `Bearer ${store.state.token}`
        //    Authorization: 'Basic ANxbuasd9ba0=='
        //}
    })
}
