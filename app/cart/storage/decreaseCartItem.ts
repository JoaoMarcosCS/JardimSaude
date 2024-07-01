import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";
import Cookie from "js-cookie";
import { createCartItem } from "./createCartItem";

export function decreaseCartItem(data:Medicamento){
  const { id } = getCookies()
  const idUsuario = id.toString()
  const currentCartNoformatted = Cookie.get(`Cart${idUsuario}`);

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
      currentCart.push(data)
    }

    createCartItem(idUsuario, currentCart);
  }else{
    createCartItem(idUsuario, [data]);
  }
}
