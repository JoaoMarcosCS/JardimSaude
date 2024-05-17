import api from "@/app/services/axios";
import { TRATAMENTOS } from "@/app/constants/apiEndPoints";
import { TratamentoFormProps } from "../schemas/tratamentoFormSchema";
import { toast } from "sonner";

const createTratamento = async (data: TratamentoFormProps) => {

  try{
    await api.post(`${TRATAMENTOS}`, data);
    toast.success("Tratamento criado!")
  }catch(error){
    console.log("Erro: " + error);
    toast.error("Erro: " + error)
  }
}

export default createTratamento;
