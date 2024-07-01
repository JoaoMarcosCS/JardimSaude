import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";
import { createCartItem } from "./createCartItem";
import { toast } from "sonner";

export function updateCartItem(data: Medicamento) {
  const { id } = getCookies();
  const idUsuario = id.toString();
  const currentCartNoformatted = sessionStorage.getItem(`Cart${idUsuario}`);

  if (currentCartNoformatted) {

    const currentCart: Medicamento[] = JSON.parse(currentCartNoformatted);

    const existMedicamentoInCart = currentCart.find(itemCart => itemCart.codigo === data.codigo);

    if (existMedicamentoInCart) {
      console.log("Existe medicamento")
      for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].codigo === data.codigo) {
          console.log("aumentou")
          currentCart[i].quantidade += 1;
        }
      }
    }else{
      currentCart.push(data);
    }

    createCartItem(idUsuario, currentCart);
  } else {

    createCartItem(idUsuario, [data]);
  }
}
