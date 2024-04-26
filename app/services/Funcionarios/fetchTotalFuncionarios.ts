import { USUARIOS } from "@/app/constants/apiEndPoints";
import api from "../axios";

const fetchTotalFuncionarios = async ():Promise<number> => {
  const response = await api.get(`${USUARIOS}?field=name`);
  return response.data[1];
}

export default fetchTotalFuncionarios;
