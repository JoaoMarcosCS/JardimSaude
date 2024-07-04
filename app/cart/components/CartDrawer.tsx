
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
import { Loader, PlusCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartItem from "./CartItem";
import formatCurrency from "@/app/utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/root-reducer";
import Link from "next/link";
import { limparCarrinho } from "@/app/states/cart/cartSlice";
import { usePurchaseMedicamento } from "../hooks/usePurchaseMedicamento";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { valorTotal, quantidadeTotal, medicamentos } = useSelector((state: RootState) => state.cartReducer)
  const { mutate, isPending, isSuccess } = usePurchaseMedicamento()

  const handleComprarMedicamentos = () => {
    mutate(medicamentos);
    if (isSuccess) {
      dispatch(limparCarrinho())
      setOpen(false);
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="relative flex flex-col items-center justify-center">
          <div className=" absolute -top-1 -right-1 bg-green-400 text-xs font-bold px-1 rounded-full">
            {quantidadeTotal}
          </div>
          <ShoppingCart />
          Carrinho
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Seu carrinho</DrawerTitle>
          <DrawerDescription className="overflow-y-scroll max-h-[425px]">
            {
              medicamentos.length <= 0 && (
                <p>Seu carrinho está vazio :(</p>
              )
            }
            {
              medicamentos?.map(medicamento => (
                <CartItem key={medicamento.id} medicamento={medicamento} />
              ))
            }
          </DrawerDescription>
          <p>Total: {formatCurrency(valorTotal)}</p>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          {medicamentos.length > 0 ?
            (<div className="flex flex-col">
              <Button onClick={handleComprarMedicamentos}>
                {isPending && (
                  <div className="flex gap-1 justify-center items-center flex-row">
                    <Loader className="animate-spin" />
                    <p>Efetuando compra</p>
                  </div>
                )}
                {!isPending && (
                  <p>Finalizar compra</p>
                )

                }
              </Button>
              <DrawerClose asChild>
                <Button className="outline-none bg-white text-black hover:outline-none hover:bg-transparent hover:text-zinc-800 transition-all"
                  onClick={() => dispatch(limparCarrinho())}>
                  Limpar carrinho
                </Button>
              </DrawerClose>
            </div>
            ) : (
              <div className="w-full justify-center flex">
                <Link href="/shopping">
                  <DrawerClose>
                    <Button className="gap-1 bg-emerald-400 text-white text-base">
                      <PlusCircle /> Comprar medicamentos
                    </Button>
                  </DrawerClose>
                </Link>
              </div>
            )
          }

        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer;
