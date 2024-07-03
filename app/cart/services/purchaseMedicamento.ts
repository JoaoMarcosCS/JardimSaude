import { MEDICAMENTOS } from "@/app/constants/apiEndPoints";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import api from "@/app/services/axios";
import { toast } from "sonner";

const purchaseMedicamento = async (cartItems: Medicamento[]) => {
  try{
    const requests = cartItems.map((item) => {
      return api.post(MEDICAMENTOS, item);
    });

    await Promise.all(requests);
    toast.success("Compra efetuada!");

  }catch(error:any){
    toast.error(`${error.message}`)
  }
}

export default purchaseMedicamento;
