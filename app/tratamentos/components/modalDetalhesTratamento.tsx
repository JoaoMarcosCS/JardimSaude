import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
import { useState } from "react";
import { RootState } from "@/app/store/root-reducer";
import { useSelector } from "react-redux";
import setStatusColor from "../utils/setStatusColor";
import ModalFormAplicarMedicamento from "./modals/modalFormAplicarMedicamento";
import ModalCancelarTratamento from "./modals/modalCancelarTratamento";
import ModalFinalizarTratamento from "./modals/modalFinalizarTratamento";
import ModalMedicamentosAplicados from "./modals/modalMedicamentosAplicados";
import formatCurrency from "@/app/utils/formatCurrency";

interface ModalDetalhesTratamentoProps {
  tratamento: Tratamento;
}


const ModalDetalhesTratamento = ({ tratamento }: ModalDetalhesTratamentoProps) => {

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const {bgColor, textColor} = setStatusColor(tratamento.status);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={openDialog} asChild className="hover:cursor-pointer">
        <MoreHorizontal />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400 flex-col flex">
            <h1 className="w-full text-center">Detalhes do tratamento</h1>
            {
              (nivel === 2 && tratamento.status === "Em andamento") &&
              <div className="w-full flex justify-center gap-3 mt-2 items-center">
                <ModalCancelarTratamento tratamentoId={tratamento.id} modalController={setIsOpen} />
                <ModalFinalizarTratamento tratamentoId={tratamento.id} modalController={setIsOpen} />
                <ModalFormAplicarMedicamento tratamento={tratamento} />
              </div>
            }
          </DialogTitle>
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
            <Badge className={`${textColor} ${bgColor} font-bold`}>{tratamento.status}</Badge>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            <h2>Valor: </h2>
            <h1>{formatCurrency(tratamento.valor)}</h1>
          </div>
          <hr />
          <div className="flex w-full justify-between px-2 items-center">
            {tratamento.aplicacoes_medicamentos!?.length > 0 ? (
              <>
                <h2>Medicamentos aplicados:</h2>
                <ModalMedicamentosAplicados aplicacoes={tratamento.aplicacoes_medicamentos} />
              </>
            ) : (
              <p>Nenhum medicamento aplicado.</p>
            )}
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
