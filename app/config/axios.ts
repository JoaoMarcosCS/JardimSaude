import axios from "axios"
import {type} from "@endpoints"

const api = axios.create({
    baseURL: "https://jardim-saude-api-9yr9-liard.vercel.app"
})

export default api;