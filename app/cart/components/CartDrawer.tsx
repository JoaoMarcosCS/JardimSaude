
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { getCartItems } from "../cookies/getCartItems";
import CartItem from "./CartItem";
import formatCurrency from "@/app/utils/formatCurrency";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const cartData = getCartItems();
  const total = cartData.reduce((acc, medicamento) => {
    return (acc + medicamento.valor_unitario * medicamento.quantidade)
  },0)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="flex flex-col items-center justify-center">
          <ShoppingCart />
          Carrinho
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Seu carrinho</DrawerTitle>
          <DrawerDescription className="overflow-y-scroll max-h-[425px]">
            {
              cartData.length <= 0 && (
                <p>Seu carrinho está vazio :(</p>
              )
            }
            {
               cartData?.map( medicamento => (
                <CartItem key={medicamento.id} medicamento={medicamento}/>
              ))
            }
          </DrawerDescription>
          <p>Total: {formatCurrency(total)}</p>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button>Comprar</Button>
          <DrawerClose asChild>
            <Button className="outline-none bg-white text-black">Limpar carrinho</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer;
