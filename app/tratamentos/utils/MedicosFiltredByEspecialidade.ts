import { USUARIOS } from "@/app/constants/apiEndPoints";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface";
import fetchFuncionarios from "@/app/funcionarios/services/fetchFuncionarios";
import api from "@/app/services/axios";

const medicosFiltredByEspecialidade = async (especialidade: string):Promise<FuncionarioInterface[]> => {
  const medicos = await fetchFuncionarios();
  const medicosFiltrados = medicos.filter((medico) => medico.especialidade == especialidade);
  console.log(medicosFiltrados);
  return medicosFiltrados;
}

export default medicosFiltredByEspecialidade
