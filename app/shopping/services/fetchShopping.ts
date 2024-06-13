import { SHOPPING } from "@/app/constants/apiEndPoints";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import api from "@/app/services/axios";

const fetchShopping = async ():Promise<Medicamento[]>=> {
  const response =  await api.get(`${SHOPPING}/`);
  return response.data;
}

export default fetchShopping;
