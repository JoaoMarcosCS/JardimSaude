import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import Cookie from "js-cookie";
import { toast } from "sonner";

export function createCartItem(idUsuario: number, medicamentos: Medicamento[]) {
  const initialMedicamentos = JSON.stringify(medicamentos);

  Cookie.set(`Cart${idUsuario}`, initialMedicamentos, { expires: 365 * 100 });
  toast.success("Medicamento adicionado ao carrinho!");

}
