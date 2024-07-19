import { FETCH_TRATAMENTOS_EM_ANDAMENTO_BY_MEDICO_ID } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import Cookie from "js-cookie"
import { Tratamento } from "../interfaces/tratamentoInterface";
import getCookies from "@/app/utils/getCookies";

const fetchTratamentosEmAndamentoByMedicoId = async ():Promise<Tratamento[]> => {
  const { id } = getCookies();
  const response = await api.get(`${FETCH_TRATAMENTOS_EM_ANDAMENTO_BY_MEDICO_ID}/${id}`);
  return response.data;
}

export default fetchTratamentosEmAndamentoByMedicoId;
