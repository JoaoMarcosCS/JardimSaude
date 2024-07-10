import { PACIENTES, TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { Paciente } from "../interfaces/Paciente";


const fetchPacientes = async ():Promise<Paciente[]> => {
  const response = await api.get(`${PACIENTES}?field=nome`);
  return response.data[0] || [{}];
}

export default fetchPacientes
