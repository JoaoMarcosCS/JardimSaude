import { USUARIOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { FuncionarioInterface } from "../interfaces/funcionarioInterface";


const fetchFuncionarioDetails = async (id:number | string):Promise<FuncionarioInterface> => {
  const response = await api.get(`${USUARIOS}/${id}`);
  return response.data;
}

export default fetchFuncionarioDetails;
