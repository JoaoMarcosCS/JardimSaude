import { FETCH_TRATAMENTOS_EM_ANDAMENTO_BY_MEDICO_ID } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import Cookie from "js-cookie"
import { Tratamento } from "../interfaces/tratamentoInterface";

const fetchTratamentosEmAndamentoByMedicoId = async ():Promise<Tratamento[]> => {
  const id_usuario = Number(Cookie.get("id_usuario"));
  const response = await api.get(`${FETCH_TRATAMENTOS_EM_ANDAMENTO_BY_MEDICO_ID}/${id_usuario}`);
  return response.data;
}

export default fetchTratamentosEmAndamentoByMedicoId;
