import { ESPECIALIDADES } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { Especialidade } from "../interfaces/especialidadeInterface";

const fetchEspecialidades = async ():Promise<Especialidade[]> => {
  const response = await api.get(ESPECIALIDADES);
  return response.data[0];
}

export default fetchEspecialidades;
