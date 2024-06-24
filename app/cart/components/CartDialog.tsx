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
import { getCartItems } from "../cookies/getCartItems";
import CartItem from "./CartItem";

const CartDialog = () => {
  const [open, setOpen] = useState(false);
  const cartData = getCartItems();

  return(
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex flex-col items-center justify-center">
            <ShoppingCart/>
            Carrinho
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Seu carrinho</DialogTitle>
            <DialogDescription >
              {
                cartData.length <=0 && (
                  <p>Seu carrinho está vazio :(</p>
                )
              }
              {
                cartData?.map( medicamento => (
                  <CartItem medicamento={medicamento}/>
                ))
              }
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}

export default CartDialog;
