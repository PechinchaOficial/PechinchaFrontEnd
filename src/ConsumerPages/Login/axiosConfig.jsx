// api.js
import axios from 'axios';
import { baseURL } from '../../shared';
const api = axios.create({
    baseURL: `${baseURL}`,
});

// Adicionar um interceptor para incluir o token em todas as requisições
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;
