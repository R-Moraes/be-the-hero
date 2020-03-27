/** Cliente HTTP, ele é responsavel por obter as chamadas a api do back-end */
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;