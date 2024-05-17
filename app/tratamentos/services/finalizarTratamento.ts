import { TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { toast } from "sonner";

const finalizarTratamento = async (id: string) => {
  await api.put(`${TRATAMENTOS}/${id}/finalizar`, {});
  toast.success("Tratamento finalizado!");
}

export default finalizarTratamento;
