import axios from "axios"

const api = axios.create({
    baseURL: "https://jardim-saude-api-9yr9-liard.vercel.app"
})

export default api;