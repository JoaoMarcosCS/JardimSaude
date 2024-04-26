import { PACIENTES } from "@/app/constants/apiEndPoints"
import api from "../axios"

const fetchTotalPacientes = async ():Promise<number> => {
  const response = await api.get(PACIENTES);
  return response.data[1];
}

export default fetchTotalPacientes
