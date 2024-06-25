import axios from 'axios';

const API_URL = "http://localhost:8080/Produto";

// Crie uma instância do Axios
const api = axios.create({
    baseURL: API_URL
});

// Adicione um interceptor para incluir o token de autorização em todas as requisições
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Funções para fazer requisições com o Axios configurado
export const GetProduto = () => api.get('/page');
export const GetProdutoById = (id) => api.get(`/${id}`);
export const CreateProduto = (Produto) => api.post('/', Produto);
export const UpdateProdutoById = (id, Produto) => api.put(`/${id}`, Produto);
