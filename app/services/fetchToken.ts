import api from "@services/axios";
import {LOGIN} from "@endpointsAPI"
import {TokenResponse} from "@interfaces/token/tokenResponseInterface"
import { AxiosPromise } from "axios";
import { loginPayloadInterface } from "@interfaces/login/loginPayload";

const fetchToken = async (payload: loginPayloadInterface):Promise<AxiosPromise<TokenResponse>> => {
    console.log(`Dados a serem anviados: ${payload.email} | ${payload.senha}`)
    const response = await api.post<TokenResponse>(LOGIN, payload)

    return response;

}

export default fetchToken