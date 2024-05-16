import api from "@/app/services/axios";
import { Tratamento } from "../interfaces/tratamentoInterface";
import { USUARIOS } from "@/app/constants/apiEndPoints";
import Cookie from "js-cookie"

const fetchMedicoTratamentos = async ():Promise<Tratamento[]> => {
  const id_usuario = Number(Cookie.get("id_usuario"));
  const response = await api.get(`${USUARIOS}/${id_usuario}`);
  return response.data.tratamentos;
}

export default fetchMedicoTratamentos;
