import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { toast } from "sonner";

export function createCartItem(idUsuario: string, medicamentos: Medicamento[]) {
  const initialMedicamentos = JSON.stringify(medicamentos);
  const cartStorageKey = "Cart" + idUsuario;
  sessionStorage.setItem(cartStorageKey, initialMedicamentos);
  console.log(`${initialMedicamentos}`);
}
