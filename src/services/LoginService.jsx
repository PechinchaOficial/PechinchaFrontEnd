import axios from "axios";
const API_URL = "http://localhost:8080/login"

export const CreateUsuario = (login) => axios.post(API_URL, login)
