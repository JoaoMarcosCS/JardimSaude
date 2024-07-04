import { MEDICAMENTOS, USUARIOS } from "@/app/constants/apiEndPoints";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import api from "@/app/services/axios";


const fetchMedicamentos = async ():Promise<Medicamento[]> => {
  const response = await api.get(`${MEDICAMENTOS}`);
  return response.data[0];
}

export default fetchMedicamentos;
