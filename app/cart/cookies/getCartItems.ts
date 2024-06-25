import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";
import Cookie from "js-cookie";

export function getCartItems() {
  const {id} = getCookies();
  const idUsuario = id.toString()
  const cartDataUnformatted = Cookie.get(`Cart${idUsuario}`);

  if(cartDataUnformatted){

    const cartData:Medicamento[] = JSON.parse(cartDataUnformatted);
    return cartData;

  }else{
    return [];
  }

}
