import axios from "axios";
import 'dotenv/config'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;