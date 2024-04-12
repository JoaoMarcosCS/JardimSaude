import api from "@services/axios";
import {LOGIN} from "@endpointsAPI"
import {TokenResponse} from "@interfaces/token/tokenResponseInterface"
import { AxiosPromise } from "axios";

const fetchToken = async ():Promise<AxiosPromise<TokenResponse>> => {
    const response = await api.post<TokenResponse>(LOGIN, {
        email:"jmcsjoaomarcos@gmail.com",
        senha:"JMCS20242"
    })

    return response;

}

export default fetchToken