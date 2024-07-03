import { useState } from "react";
import CartItem from "./CartItem";
import formatCurrency from "@/app/utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/root-reducer";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader, PlusCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { clearCart } from "../storage/clearCart";
import { limparCarrinho } from "@/app/states/cart/cartSlice";
import { usePurchaseMedicamento } from "../hooks/usePurchaseMedicamento";

const CartDialog = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { valorTotal, quantidadeTotal, medicamentos } = useSelector((state: RootState) => state.cartReducer)
  const {mutate, isPending, isSuccess} = usePurchaseMedicamento()

  const handleComprarMedicamentos = () =>{
    mutate(medicamentos);
    if(isSuccess) {
      dispatch(limparCarrinho())
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex relative flex-col items-center justify-center">
          <div className=" absolute -top-1 -right-1 bg-green-400 text-xs font-bold px-1 rounded-full">
            {quantidadeTotal}
          </div>
          <ShoppingCart />
          Carrinho
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Seu carrinho</DialogTitle>
          <DialogDescription className="overflow-y-scroll max-h-[425px]">
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
          </DialogDescription>
          {medicamentos.length > 0 ?
            (
              <div className="flex flex-col justify-center items-start ">
                <p>Total: {formatCurrency(valorTotal)}</p>
                <div className="flex justify-around items-center mt-3 w-full">
                  <DialogClose>
                    <Button className="outline-none bg-white text-black hover:outline-none hover:bg-transparent hover:text-zinc-800 transition-all"
                      onClick={() => dispatch(limparCarrinho())}>
                      Limpar carrinho
                    </Button>
                  </DialogClose>
                  <Button onClick={handleComprarMedicamentos}>
                    {isPending && (
                      <div className="flex justify-center items-center flex-row">
                      <Loader className="animate-spin" />
                      <p>Efetuando compra</p>
                    </div>
                    )}
                    {!isPending && (
                      <p>Finalizar compra</p>
                    )

                    }
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Link href="/shopping">
                  <DialogClose>
                    <Button className="gap-1 bg-green-400 text-white text-base" >
                      <PlusCircle /> Comprar medicamentos
                    </Button>
                  </DialogClose>
                </Link>
              </div>
            )
          }
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CartDialog;
