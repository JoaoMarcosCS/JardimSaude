import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface"
import AOS from "aos"
import { Info, Pill, ShoppingCart } from "lucide-react";
import "aos/dist/aos.css"
import { useEffect } from "react"
import formatCurrency from "@/app/utils/formatCurrency";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { updateCartItem } from "@/app/cart/storage/updateCartItem";
import { useDispatch } from "react-redux";
import { adicionarMedicamento } from "@/app/states/cart/cartSlice";

interface CardShoppingProps {
  medicamento: Medicamento
}

const CardShopping = ({ medicamento }: CardShoppingProps) => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   AOS.init({});
  // }, [])

  const handleAddToCartClick = () => {
    dispatch(adicionarMedicamento(medicamento));
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div  key={medicamento.id}
        className="flex flex-col border border-emerald-100 py-3 px-4 transition-all
       hover:bg-slate-50 bg-white rounded-md shadow min-w-[340px] max-sm:w-[340px]">

        <div className="flex flex-row items-start justify-between">

          <div className="flex flex-row items-center gap-2">
            <Pill className="text-emerald-300" />
            <div>
              <p className="text-sm text-black">{medicamento.nome} {medicamento.peso}mg</p>
              <p className="text-muted-foreground text-xs italic">{medicamento.tipo}</p>
              <p className="text-base">{formatCurrency(medicamento.valor_unitario)}</p>
            </div>

          </div>

          <div className="flex ">
            <Tooltip defaultOpen={false} >
              <TooltipTrigger asChild >
                <div className="ms-1 text-base flex flex-row items-center  gap-1">
                  <Info size={15} />
                  <p className="text-xs transition-all hover:cursor-pointer hover:text-slate-500">Descrição</p>
                </div>
              </TooltipTrigger>
              <TooltipContent key={medicamento.id} side={"left"} className="text-sm text-neutral-700 text-left w-80 text-wrap">
                {medicamento.descricao}
              </TooltipContent>
            </Tooltip>
          </div>

        </div>
        <div className="flex w-full justify-between  items-center mt-3">
          <div className="flex justify-start items-center">
            <p className=" w-36  h-24 text-xs text-ellipsis overflow-hidden text-start">
              &ldquo;{medicamento.descricao}&rdquo;
            </p>
          </div>
          <Button size={"sm"} onClick={handleAddToCartClick}
            className="mt-1 mb-2 bg-emerald-400 py-0 gap-1 flex items-center">
            <ShoppingCart size={17} />Adicionar
          </Button>
        </div>

      </div>
    </TooltipProvider>
  )
}

export default CardShopping;
