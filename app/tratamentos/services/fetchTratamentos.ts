import { TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { Tratamento } from "../interfaces/tratamentoInterface";

const fetchTratamentos = async ():Promise<Tratamento[]> => {
  const response = await api.get(`${TRATAMENTOS}?field=nome`);
  return response.data[0] || [{}];
}

export default fetchTratamentos
