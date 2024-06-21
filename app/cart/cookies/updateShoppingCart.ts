import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";
import Cokkie from "js-cookie";
import { Cookie } from "next/font/google";
import { createShoppingCart } from "./createShoppingCart";

export function updateShoppingCart(data: Medicamento[]){
  const { id } = getCookies()
  const currentCartNoformatted = Cokkie.get(`Cart${id}`);
  if(currentCartNoformatted){
    const currentCart:Medicamento[] = JSON.parse(currentCartNoformatted);

    data.forEach(medicamento => {
      currentCart.push(medicamento);
    })

    createShoppingCart(id, currentCart);
  }
}
