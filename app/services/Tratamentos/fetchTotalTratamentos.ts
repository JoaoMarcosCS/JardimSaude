import { TRATAMENTOS } from "@/app/constants/apiEndPoints"
import api from "../axios"

const fetchTotalTratamentos = async ():Promise<number> => {
  const response = await api.get(`${TRATAMENTOS}?field=nome`);
  return response.data[1];
}

export default fetchTotalTratamentos
