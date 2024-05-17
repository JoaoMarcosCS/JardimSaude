import { TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { toast } from "sonner";

const cancelarTratamento = async (id: string) => {
  await api.put(`${TRATAMENTOS}/${id}/cancelar`, {});
  toast.success("Tratamento cancelada!");
}

export default cancelarTratamento;
