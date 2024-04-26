import { AxiosPromise, AxiosResponse } from "axios";
import api from "./axios";
import { HOSPITAL } from "@endpointsAPI"
import Cookie from "js-cookie"

interface HospitalData {
  id: number;
  orcamento: StaticRange;
  nome: string;
}

interface HospitalResponse {
  data: HospitalData[]
}

const fetchHospital = async (): Promise<HospitalData> => {

  const token = Cookie.get("auth_token");

  const response = await api.get(HOSPITAL, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data.result[0][0];

}

export default fetchHospital;
