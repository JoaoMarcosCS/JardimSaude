import { RETURN_MEDICAMENTOS_BY_NOME, TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";

export interface PesquisaMedicamento {
  nome: string,
  id: number,
  peso: number
}

const findMedicamentosByNome = async (nomeMedicamento: string): Promise<PesquisaMedicamento[] | []> => {
  if (nomeMedicamento) {
    const response = await api.get(`${RETURN_MEDICAMENTOS_BY_NOME}/${nomeMedicamento}`);
    return response.data;
  }
  return []
}

export default findMedicamentosByNome
