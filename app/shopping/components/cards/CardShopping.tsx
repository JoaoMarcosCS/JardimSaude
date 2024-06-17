import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface"
import AOS from "aos"
import { Info, Pill, ShoppingCart } from "lucide-react";
import "aos/dist/aos.css"
import { useEffect } from "react"
import formatCurrency from "@/app/utils/formatCurrency";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface CardShoppingProps {
  medicamento: Medicamento
}

const CardShopping = ({ medicamento }: CardShoppingProps) => {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <TooltipProvider delayDuration={200}>
      <div data-aos="fade-up" key={medicamento.id} className="flex flex-col border border-emerald-100 py-3 px-4 transition-all hover:bg-slate-50 bg-white rounded-md shadow min-w-[340px] max-sm:w-[340px]">
        <div className="flex flex-row items-center justify-between">

          <div className="flex flex-row items-center gap-2">
            <Pill className="text-emerald-300" />
            <div>
              <p className="text-sm text-black">{medicamento.nome} {medicamento.peso}mg</p>
              <p className="text-muted-foreground text-xs italic">{medicamento.tipo}</p>
              <p className="text-base">{formatCurrency(medicamento.valor_unitario)}</p>
            </div>

          </div>

          <div className="flex">
            <Tooltip defaultOpen={false} >
              <TooltipTrigger asChild >
                <div className="ms-1 text-base flex flex-row items-center  gap-1">
                  <Info size={15} />
                  <p className="text-sm">Descrição</p>
                </div>
              </TooltipTrigger>
              <TooltipContent key={medicamento.id} side={"left"} className="text-sm text-neutral-700 text-left w-80 text-wrap">
                {medicamento.descricao}
              </TooltipContent>
            </Tooltip>
          </div>

        </div>
        <div className="flex w-full justify-end items-center mt-3">
          <Button size={"sm"} className="mt-1 mb-2 bg-emerald-400 py-0 gap-1 flex items-center">
            <ShoppingCart size={17} />Adicionar
          </Button>
        </div>
        {/* <div className="w-1/3 flex justify-center items-center">
          <div className="rounded-full shadow p-2 border border-red-200">
            <Pill className="text-red-600" size={35} />
          </div>
        </div>
        <div className="w-2/3 ">
          <p className="text-sm text-muted-foreground italic mt-1">{medicamento.tipo}</p>
          <p className="text-lg flex items-center mt-1">
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
          <p className="text-base mt-1">{formatCurrency(medicamento.valor_unitario)}</p>
          <Button size={"sm"} className="mt-1 mb-2 bg-emerald-400 py-0 gap-1 flex items-center">
              <ShoppingCart size={17} />Adicionar
          </Button>
        </div> */}
      </div>
    </TooltipProvider>
  )
}

export default CardShopping;
