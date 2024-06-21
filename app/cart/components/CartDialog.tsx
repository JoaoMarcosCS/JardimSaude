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

const CartDialog = () => {
  const [open, setOpen] = useState(false)

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
            <DialogDescription>
              Seu carrinho está vazio :(
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}

export default CartDialog;
