import axios from 'axios'
import envConfig from '../config/env-config'
import store from '../redux/configureStore'
import { SET_POPUP_OPEN } from '../redux/actionTypes'

const api = axios.create({
    baseURL: envConfig.API_PATH,
    timeout: 20000,
    headers: {
        'User-Agent': 'request'
    }
})

api.interceptors.request.use(request => {
    console.log('REQUEST', request)
    return request
})

api.interceptors.response.use(response => {
    console.log('RESPONSE', response)
    return response;
}, error => {
    console.log('ERROR', error.response)
    const {response:{status}} = error
    if(status === 403) store.dispatch({type:SET_POPUP_OPEN,payload:'GitHub API has a 60 request limit per hour.'})
    return Promise.reject(error);
});

export default api