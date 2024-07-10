import api from "@/app/services/axios";
import { FETCH_PACIENTES_BY_MEDICO_ID, USUARIOS } from "@/app/constants/apiEndPoints";
import Cookie from "js-cookie"
import { Paciente } from "../interfaces/Paciente";

const fetchPacientesByMedicoId = async ():Promise<Paciente[]> => {
  const id_usuario = Number(Cookie.get("id_usuario"));
  const response = await api.get(`${FETCH_PACIENTES_BY_MEDICO_ID}/${id_usuario}`);
  return response.data;
}

export default fetchPacientesByMedicoId;
