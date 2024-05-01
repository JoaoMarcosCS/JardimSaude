import { TRATAMENTOS } from "@/app/constants/apiEndPoints"
import api from "../axios"
import { Tratamento } from "@/app/(home)/components/tables/tratamentos/columns";

const fetchTratamentos = async ():Promise<Tratamento[]> => {
  const response = await api.get(`${TRATAMENTOS}?field=nome`);
  return response.data[0];
}

export default fetchTratamentos
