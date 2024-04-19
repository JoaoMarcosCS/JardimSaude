import { AxiosPromise, AxiosResponse } from "axios";
import api from "./axios";
import {HOSPITAL} from "@endpointsAPI"
import Cookie from "js-cookie"

interface HospitalData {
  id:number;
  orcamento:StaticRange;
  nome: string;
}

interface HospitalResponse{
  data:HospitalData[]
}

const fetchHospital = async () => {

  const token = Cookie.get("auth_token");
    try{
    const response = await api.get(HOSPITAL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })//<HospitalResponse>(HOSPITAL);
    // console.log("Dentro do resultado: " + response.data.result[0][0]);


    return response.data.result[0][0];
  }catch(e){
    console.log(e);
  }
}

export default fetchHospital;
