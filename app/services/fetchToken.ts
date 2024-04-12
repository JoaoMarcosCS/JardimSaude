import api from "@services/axios";
import {LOGIN} from "@endpointsAPI"
import {TokenResponse} from "@interfaces/token/tokenResponseInterface"
import { AxiosPromise } from "axios";

const fetchToken = async (payload: { email: string; senha: string; }):Promise<AxiosPromise<TokenResponse>> => {
    console.log(`Dados a serem anviados: ${payload.email} | ${payload.senha}`)
    const response = await api.post<TokenResponse>(LOGIN, payload)

    return response;

}

export default fetchToken