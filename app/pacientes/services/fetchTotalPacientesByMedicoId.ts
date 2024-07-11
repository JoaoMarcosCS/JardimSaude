import { FETCH_TOTAL_PACIENTES_BY_MEDICO_ID } from "@/app/constants/apiEndPoints"
import api from "@/app/services/axios"
import Cookie from "js-cookie"

export const fetchTotalPacientesByMedicoId = async () => {
  const id_usuario = Number(Cookie.get("id_usuario"));
  const response = await api.get<number>(`${FETCH_TOTAL_PACIENTES_BY_MEDICO_ID}/${id_usuario}`);
  return response.data;
}
