import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import formatCurrency from "@/app/utils/formatCurrency";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import Link from "next/link";
import CardItem from "@/app/funcionarios/components/cards/CardItem";
import PagamentoCard from "@/app/funcionarios/components/cards/PagamentosCard";
import { HistoricoComprasCard } from "./HistoricoComprasCard";

export interface MedicamentoCardProps {
  medicamento: Medicamento
}

export const MedicamentoCardDetails = ({ medicamento }: MedicamentoCardProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={openDialog} asChild className="hover:cursor-pointer">
        <MoreHorizontal />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400 flex-col flex">
            <h1 className="w-full text-center">{medicamento.nome}</h1>
            <div className="w-full flex justify-center gap-3 mt-2 items-center">
              <Link href="/shopping">
                <DialogClose>
                  <Button className="gap-1 bg-green-400 text-white text-base" >
                    <PlusCircle /> Comprar medicamentos
                  </Button>
                </DialogClose>
              </Link>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CardItem label={"Nome"} value={medicamento.nome} />
          <hr />
          <CardItem label="Tipo" value={medicamento.tipo} />
          <hr />
          <CardItem label="Dosagem" value={medicamento.peso} />
          <hr />
          <CardItem label="Preço unitário" value={formatCurrency(medicamento.valor_unitario)} />
          <hr />
          <CardItem label="Em estoque" value={`${medicamento.quantidade} uni`} />
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <Accordion type="single" collapsible className="w-full ">
              <AccordionItem value="item-1" className="">
                <AccordionTrigger>Descrição</AccordionTrigger>
                <AccordionContent className="border-2 rounded border-slate-200 p-2">
                  {medicamento.descricao}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h1>Histórico de compras:</h1>
            {
              medicamento.historico_compras ? (
                <HistoricoComprasCard compras={medicamento.historico_compras} valor_unitario={medicamento.valor_unitario}/>
              ) : (
                <p>Não houve compras ainda</p>
              )
            }
          </div>
          <hr />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="bg-emerald-500">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}
