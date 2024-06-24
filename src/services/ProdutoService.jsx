import axios from "axios";

const API_URL = "http://localhost:8080/Produto"

export const GetProduto = () => axios.get(API_URL)
export const GetProdutoById = (id) => axios.get(`${API_URL}/${id}`)
export const CreateProduto = (Produto) => axios.post(API_URL, Produto)
export const UpdateProdutoById = (id, Produto) => axios.put(`${API_URL}/${id}`, Produto)
