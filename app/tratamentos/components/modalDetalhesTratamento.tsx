import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tratamento } from "../interfaces/tratamentoInterface";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ptBR } from "date-fns/locale";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { format } from "date-fns";
interface ModalDetalhesTratamentoProps {
  tratamento: Tratamento
}

const ModalDetalhesTratamento = ({ tratamento }: ModalDetalhesTratamentoProps) => {
  let colorBg = "text-yellow-400";
  if (tratamento.status === "Em andamento") {
    colorBg = "text-yellow-400";
  } else if (tratamento.status === "Finalizado") {
    colorBg = "text-green-400"
  } else if (tratamento.status === "Cancelado") {
    colorBg = "text-red-400";
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MoreHorizontal />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400">Detalhes do tratamento</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Tratamento: </h2>
            <h1>{tratamento.nome}</h1>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Paciente: </h2>
            <h1>{tratamento.paciente.nome}</h1>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Medico responsável: </h2>
            <h1>{tratamento.medico_responsavel.name}</h1>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Especialidade: </h2>
            <h1>{tratamento.medico_responsavel.especialidade.nome}</h1>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Início: </h2>
            <h1>{format(tratamento.inicio, "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR
            })}
            </h1>
          </div>
          <hr />
          {
            tratamento.termino && (<>
              <div className="flex w-full justify-between px-2 items-center">
                <h2>Término: </h2>
                <h1>{format(tratamento.termino, "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR
                })}
                </h1>
              </div>
              <hr />
              </>
            )
          }

          <div className="flex w-full justify-between px-2 items-center">
            <h2>Stauts: </h2>
            <Badge className={`${colorBg} bg-slate-100 font-bold`}>{tratamento.status}</Badge>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Valor: </h2>
            <h1>{Intl.NumberFormat('pt-BR', {
              style: "currency",
              currency: 'BRL'
            }).format(Number(tratamento.valor))}</h1>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <Accordion type="single" collapsible className="w-full ">
              <AccordionItem value="item-1" className="">
                <AccordionTrigger>Queixas</AccordionTrigger>
                <AccordionContent className="border-2 rounded border-slate-200 p-2">
                  {tratamento.queixas}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
          <Button className="bg-emerald-500">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDetalhesTratamento;
