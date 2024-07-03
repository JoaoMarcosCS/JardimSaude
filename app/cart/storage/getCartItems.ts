import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";

export function getCartItems() {
  const { id } = getCookies();
  const idUsuario = id.toString();
  const cartDataUnformatted = localStorage.getItem(`Cart${idUsuario}`);

  if (cartDataUnformatted) {
    const cartData: Medicamento[] = JSON.parse(cartDataUnformatted);
    return cartData;
  } else {
    return [];
  }
}
