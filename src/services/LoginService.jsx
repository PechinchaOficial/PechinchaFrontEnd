import axios from "axios";
import { baseURL } from "../shared";

const API_URL = `${baseURL}/login`

export const CreateUsuario = (login) => axios.post(API_URL, login)
