import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";
import Cookie from "js-cookie";
import { createCartItem } from "./createCartItem";

export function updateCartItem(data:Medicamento){
  const { id } = getCookies()
  const currentCartNoformatted = Cookie.get(`Cart${id}`);
  if(currentCartNoformatted){
    const currentCart:Medicamento[] = JSON.parse(currentCartNoformatted);

    const existMedicamentoInCart = currentCart.find(itemCart => itemCart.id === data.id);

    if(existMedicamentoInCart){
      for(let i = 0; i < currentCart.length; i++){
        if(currentCart[i].id === data.id){
          currentCart[i].quantidade += 1
        }
      }
    }else{
      currentCart.push(data);
    }

    createCartItem(id, currentCart);
  }else{
    createCartItem(id, [data]);
  }
}
