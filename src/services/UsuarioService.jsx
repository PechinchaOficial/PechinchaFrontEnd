import axios from "axios";

const API_URL = "http://localhost:8080/usuario/cadastro"

export const GetUsuarios = () => axios.get(API_URL)
export const GetUsuarioById = (id) => axios.get(`${API_URL}/${id}`)
export const createUser = (usuario) => axios.post(API_URL, usuario)
export const UpdateUsuarioById = (id, usuario) => axios.put(`${API_URL}/${id}`, usuario)
