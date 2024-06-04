import api from "@/app/services/axios";
import { AplicacaoMedicamento } from "../interfaces/aplicacaoMedicamentoInterface";
import { MEDICAMENTOS } from "@/app/constants/apiEndPoints";
import Error from "next/error";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { promises } from "dns";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


interface CreateAplicacaoProps{
  idTratamento:string,
  medicamentos: Medicamento[]
}

const createAplicacao = async ({idTratamento, medicamentos}: CreateAplicacaoProps)=> {
  try{
    const requests = medicamentos.map(medicamento => {
      return api.put(`${MEDICAMENTOS}/${medicamento.id}`,{
        isAplication: true,
        quantidade: medicamento.quantidadeAplicada,
        id_tratamento: idTratamento
      })
    });

    await Promise.all(requests);
    toast.success("Medicamentos aplicados!");


  }catch(error: any){
    toast.error(error)
  }
}

export default createAplicacao;
