import api from "@/app/services/axios";
import { TRATAMENTOS, USUARIOS } from "@/app/constants/apiEndPoints";
import { toast } from "sonner";
import { FuncionarioFormProps } from "../schemas/funcionarioFormSchema";
import { redirect } from "next/navigation";

const createFuncionario = async (data: FuncionarioFormProps) => {

  try{
    await api.post(`${USUARIOS}`, data);
    toast.success("Funcionario contratado!");
  }catch(error:any){
    toast.error("Erro: " + error)
  }
}

export default createFuncionario;
