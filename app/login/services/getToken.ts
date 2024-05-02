import api from "@services/axios";
import {LOGIN} from "@endpointsAPI"
import { loginPayloadInterface } from "../interfaces/loginPayload";
import UsuarioToken from "../interfaces/tokenInterface";
import * as jwtDecode from "jwt-decode";
import { TokenResponse } from "../interfaces/tokenResponseInterface";
import { getTokenResponse } from "../interfaces/getTokenResponse";


const getToken = async (payload: loginPayloadInterface):Promise<getTokenResponse> => {

  const response = await api.post<TokenResponse>(LOGIN, payload)
  const token = response.data.token;
  const { name, id, email, nivel } = jwtDecode.jwtDecode<UsuarioToken>(token);
  return { name ,id, email, nivel, token}
}

export default getToken
