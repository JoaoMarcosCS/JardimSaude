import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import Cokkie from "js-cookie";

export function createShoppingCart(idUsuario: number, medicamentos: Medicamento[]) {
  const initialMedicamentos = JSON.stringify(medicamentos);

  Cokkie.set(`Cart${idUsuario}`, initialMedicamentos, { expires: 365 * 100 });

}
