import { FETCH_TOTAL_TRATAMENTOS_BY_MEDICO_ID } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import Cookie from "js-cookie"

const fetchTotalTratamentosByMedicoId = async () => {
  const id_usuario = Number(Cookie.get("id_usuario"));
  const response = await api.get(`${FETCH_TOTAL_TRATAMENTOS_BY_MEDICO_ID}/${id_usuario}`);
  return response.data;
}

export default fetchTotalTratamentosByMedicoId;
