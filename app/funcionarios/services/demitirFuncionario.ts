import { TRATAMENTOS, USUARIOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { toast } from "sonner";

export interface demitirFuncionarioProps{
  id: string | number,
  nome: string
}

const demitirFuncionario = async ({id, nome}: demitirFuncionarioProps) => {
  await api.delete(`${USUARIOS}/${id}`);
  toast.message("Funcionário demitido", {
    description: `Você demitiu ${nome} com sucesso`
  })
}

export default demitirFuncionario;
