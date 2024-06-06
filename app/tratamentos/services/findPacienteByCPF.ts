import { FIND_PACIENTE_BY_CPF } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { PacienteInterface } from "@/app/interfaces/pacienteInterface";

const findPacienteByCPF = async (cpf:string):Promise<PacienteInterface | null> => {
  try{
    const response = await api.get(`${FIND_PACIENTE_BY_CPF}/${cpf}`);
    return response.data;
  }catch(error){
    return null;
  }
}

export default findPacienteByCPF
