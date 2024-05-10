import api from "@/app/services/axios";
import { Tratamento } from "../interfaces/tratamentoInterface";
import { TRATAMENTOS } from "@/app/constants/apiEndPoints";
import { TratamentoFormProps } from "../schemas/tratamentoFormSchema";
import { toast } from "sonner";

const createTratamento = async (data: TratamentoFormProps) => {

  console.log("Dados enviados:" + JSON.stringify(data));
  try{
    const response = await api.post(`${TRATAMENTOS}`, data);
    toast.success("Tratamento criado!")
  }catch(error){
    console.log("Erro: " + error)
  }
}

export default createTratamento;
