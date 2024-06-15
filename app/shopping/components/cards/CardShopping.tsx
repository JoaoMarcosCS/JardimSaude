import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface"
import AOS from "aos"
import { Info, Pill, ShoppingCart } from "lucide-react";
import "aos/dist/aos.css"
import { useEffect } from "react"
import formatCurrency from "@/app/utils/formatCurrency";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CardShoppingProps {
  medicamento: Medicamento
}

const CardShopping = ({ medicamento }: CardShoppingProps) => {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <TooltipProvider delayDuration={200}>
      <div data-aos="fade-up" key={medicamento.id} className="flex pt-2 pb-3 transition-all hover:bg-slate-50 bg-white rounded-md shadow min-w-[340px] max-sm:w-[340px]">
        <div className="w-1/3 flex justify-center items-center">
          <div className="rounded-full shadow p-2 border border-red-200">
            <Pill className="text-red-600" size={30} />
          </div>
        </div>
        <div className="w-2/3">
          <p className="text-sm text-muted-foreground">{medicamento.tipo}</p>
          <p className="text-lg flex items-center">
            {medicamento.nome} {medicamento.peso}mg
            <Tooltip defaultOpen={false} >
              <TooltipTrigger asChild className="ms-1">
                <Info size={15} />
              </TooltipTrigger>
              <TooltipContent key={medicamento.id} side={"left"} className="text-sm text-neutral-700 text-left w-80 text-wrap">
                {medicamento.descricao}
              </TooltipContent>
            </Tooltip>
          </p>
          <p className="text-base">{formatCurrency(medicamento.valor_unitario)}</p>
          <p className="text-sm gap-1 font-semibold hover:cursor-pointer hover:font-medium transition-all pt-1 items-center flex">
            <ShoppingCart size={15} />Adicionar ao carrinho
          </p>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default CardShopping;
