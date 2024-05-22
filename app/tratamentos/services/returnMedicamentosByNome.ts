import { RETURNMEDICAMENTOSBYNOME, TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { Tratamento } from "../interfaces/tratamentoInterface";
import { AplicacaoMedicamento } from "@/app/aplicacoes_medicamentos/interfaces/aplicacaoMedicamentoInterface";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";

const returnMedicamentosByNome = async (nomeMedicamento:string):Promise<Medicamento[]> => {
  if(nomeMedicamento){
  const response = await api.get(`${RETURNMEDICAMENTOSBYNOME}/${nomeMedicamento}`);
  return response.data;
  }
  return []
}

export default returnMedicamentosByNome
