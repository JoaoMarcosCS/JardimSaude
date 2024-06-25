import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import getCookies from "@/app/utils/getCookies";
import Cookie from "js-cookie";
import { createCartItem } from "./createCartItem";
import { toast } from "sonner";

export function updateCartItem(data:Medicamento){
  const { id } = getCookies()
  const idUsuario = id.toString();

  const currentCartNoformatted = Cookie.get(`Cart${idUsuario}`);

  if(currentCartNoformatted){
    const currentCart:Medicamento[] = JSON.parse(currentCartNoformatted);

    const existMedicamentoInCart = currentCart.find(itemCart => itemCart.codigo === data.codigo);

    if(existMedicamentoInCart){
      for(let i = 0; i < currentCart.length; i++){
        if(currentCart[i].codigo === data.codigo){
          currentCart[i].quantidade += 1
        }
      }
      toast.info("Incrementou");
    }else{
      toast.info("Entrou!")
      currentCart.push(data);
    }

    createCartItem(idUsuario, currentCart);
  }else{
    createCartItem(idUsuario, [data]);
  }
}
