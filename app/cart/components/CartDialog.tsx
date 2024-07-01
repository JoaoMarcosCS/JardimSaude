import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { getCartItems } from "../storage/getCartItems";
import CartItem from "./CartItem";
import formatCurrency from "@/app/utils/formatCurrency";

const CartDialog = () => {
  const [open, setOpen] = useState(false);
  const cartData = getCartItems();

  const total = cartData.reduce((acc, medicamento) => {
    return (acc + medicamento.valor_unitario * medicamento.quantidade)
  },0)

  const quantidade = cartData.reduce((acc, medicamento) => {
    return (acc + medicamento.quantidade)
  },0)

  return(
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex relative flex-col items-center justify-center">
            <div className=" absolute -top-1 -left-1 bg-green-400 text-xs font-bold px-1 rounded-full">{quantidade}</div>
            <ShoppingCart/>
            Carrinho
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Seu carrinho</DialogTitle>
            <DialogDescription  className="overflow-y-scroll max-h-[425px]">
              {
                cartData.length <=0 && (
                  <p>Seu carrinho está vazio :(</p>
                )
              }
              {
                cartData?.map( medicamento => (
                  <CartItem key={medicamento.id} medicamento={medicamento}/>
                ))
              }
            </DialogDescription>
            <p>Total: {formatCurrency(total)}</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}

export default CartDialog;
