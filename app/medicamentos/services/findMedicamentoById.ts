import { MEDICAMENTOS, TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { Medicamento } from "../interfaces/medicamentoInterface";

const findMedicamentoById = async (id: string):Promise<Medicamento> => {
  const response =  await api.get(`${MEDICAMENTOS}/${id}`);
  return response.data[0];
}

export default findMedicamentoById;
