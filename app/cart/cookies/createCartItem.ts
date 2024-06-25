import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import Cookie from "js-cookie";
import { toast } from "sonner";

export function createCartItem(idUsuario: string, medicamentos: Medicamento[]) {
  const initialMedicamentos = JSON.stringify(medicamentos);
  const cartCookieName = "Cart" + idUsuario
  Cookie.set(cartCookieName, initialMedicamentos, { expires: 365 * 100 });
  console.log(`${initialMedicamentos}`);

}
