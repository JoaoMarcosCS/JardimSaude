import { DEFAULT_SHOPPING, SHOPPING } from "@/app/constants/apiEndPoints";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import api from "@/app/services/axios";

const findMedicamentoShoppByNome = async (nomeMedicamento: string): Promise<Medicamento[]> => {
  if(nomeMedicamento){
    const response = await api.get(`${SHOPPING}/${nomeMedicamento}`);
    return response.data;
  }
  return []

}

export default findMedicamentoShoppByNome;
