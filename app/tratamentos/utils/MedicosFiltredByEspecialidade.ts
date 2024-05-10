import { USUARIOS } from "@/app/constants/apiEndPoints";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface";
import fetchFuncionarios from "@/app/funcionarios/services/fetchFuncionarios";
import api from "@/app/services/axios";

const medicosFiltredByEspecialidade = async (especialidade: string): Promise<FuncionarioInterface[] | null> => {
  try {
    const medicos = await fetchFuncionarios();
    const medicosFiltrados = medicos.filter((medico) => medico.especialidade?.nome == especialidade);
    return medicosFiltrados;
  } catch (error) {
    return null;
  }


}

export default medicosFiltredByEspecialidade
