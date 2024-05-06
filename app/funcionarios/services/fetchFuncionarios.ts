import { USUARIOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { FuncionarioInterface } from "../interfaces/funcionarioInterface";


const fetchFuncionarios = async ():Promise<FuncionarioInterface[]> => {
  const response = await api.get(`${USUARIOS}?field=name`);
  return response.data[0];
}

export default fetchFuncionarios;
