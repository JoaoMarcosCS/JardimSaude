import { TRATAMENTOS } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { toast } from "sonner";
import { Action } from "../types/actions";

interface ActionTratamentoInterface {
  id:string;
  action:Action;
}

const actionTratamento = async ({id, action}: ActionTratamentoInterface) => {
  await api.put(`${TRATAMENTOS}/${id}/${action}`, {});
  toast.success("Tratamento finalizado!");
  return;
}

export default actionTratamento;
