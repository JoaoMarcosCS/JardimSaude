import { AxiosPromise, AxiosResponse } from "axios";
import api from "./axios";
import { HOSPITAL } from "@endpointsAPI"
import Cookie from "js-cookie"

const fetchHospital = async (): Promise<number> => {

  const token = Cookie.get("auth_token");

  const response = await api.get(HOSPITAL, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data.result[0][0].orcamento;

}

export default fetchHospital;
