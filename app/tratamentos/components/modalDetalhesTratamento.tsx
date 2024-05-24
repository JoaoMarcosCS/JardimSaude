import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tratamento } from "../interfaces/tratamentoInterface";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ptBR } from "date-fns/locale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Select from "react-select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useActionTratamentoMutate } from "../hooks/useActionTratamentoMutate";
import { RootState } from "@/app/store/root-reducer";
import { useSelector } from "react-redux";
import returnMedicamentosByNome, { PesquisaMedicamento } from "../services/returnMedicamentosByNome";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";



interface ModalDetalhesTratamentoProps {
  tratamento: Tratamento;
}

interface SelectOptions {
  value: number;
  label: string;
}

const ModalDetalhesTratamento = ({ tratamento }: ModalDetalhesTratamentoProps) => {

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);
  const { mutate } = useActionTratamentoMutate()
  const [isOpen, setIsOpen] = useState(false);
  const [nomeMedicamento, setNomeMedicamento] = useState("");
  const [options, setOptions] = useState<SelectOptions[]>([])

  const handleFinalizarTratamento = () => {
    mutate({ id: tratamento.id, action: "finalizar" })
    setIsOpen(false);
  }

  const handleCancelarTratamento = () => {
    mutate({ id: tratamento.id, action: "cancelar" })
    setIsOpen(false);
  }

  const handleNomeMedicamentoChange = (newValue: string) => {
    setNomeMedicamento(newValue);
  }

  const openDialog = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    async function searchMedicamento() {
      const response = await returnMedicamentosByNome(nomeMedicamento);
      const formattedOptions = response.map(medicamento => ({
        value:medicamento.id,
        label: `${medicamento.nome} ${medicamento.peso}mg`
      }))

      setOptions(formattedOptions);
    }

    searchMedicamento();
  }, [nomeMedicamento])

  let colorBg = "text-yellow-400";
  if (tratamento.status === "Em andamento") {
    colorBg = "text-yellow-400";
  } else if (tratamento.status === "Finalizado") {
    colorBg = "text-green-400"
  } else if (tratamento.status === "Cancelado") {
    colorBg = "text-red-400";
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={openDialog} asChild>
        <MoreHorizontal />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400 flex-col flex">
            <h1 className="w-full text-center">Detalhes do tratamento</h1>
            {
              (nivel === 2 && tratamento.status === "Em andamento") &&
              <div className="w-full flex justify-center gap-3 mt-2 items-center">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant={"destructive"}>Cancelar</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Essa ação não pode ser revertida. Caso tenha cometido um erro ao cancelar esse tratamento,
                        você terá que pedir para uma secretária(o) criar um novo para você com o mesmo paciente.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-none">Voltar</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive" onClick={handleCancelarTratamento}>Cancler</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-emerald-700 hover:bg-emerald-800">Finalizar</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Essa ação não pode ser revertida. Caso tenha cometido um erro ao finalizar esse tratamento,
                        você terá que pedir para uma secretária(o) criar um novo para você com o mesmo paciente.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-none">Voltar</AlertDialogCancel>
                      <AlertDialogAction className="bg-emerald-700 hover:bg-emerald-800" onClick={handleFinalizarTratamento}>Finalizar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-yellow-400 hover:bg-yellow-500">+Aplicar</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Aplicar medicação em {tratamento.paciente.nome}</DialogTitle>
                      <DialogDescription>
                        Agora você está escolhendo um medicamento para aplicar em {tratamento.paciente.nome}.
                        <br />
                        <Select
                          options={options}
                          defaultInputValue="Nenhum medicamento encontrado"
                          onInputChange={handleNomeMedicamentoChange}
                          inputValue={nomeMedicamento}
                          isMulti
                          placeholder="Dopamina, Adrenalina..."
                        />
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">

                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="border-none bg-white text-black hover:bg-gray-100">Cancelar</Button>
                      </DialogClose>
                      <Button className="bg-yellow-400 hover:bg-yellow-500">+Aplicar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

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
                <AccordionTrigger>Medicamentos aplicados</AccordionTrigger>
                <AccordionContent className="border-2 rounded border-slate-200 p-2">
                  {tratamento.aplicacoes_medicamentos!?.length > 0 ? (
                    tratamento.aplicacoes_medicamentos?.map((aplicacao) => (
                      <div className="flex justify-around" key={aplicacao.id}>
                        <p>{aplicacao.medicamento.nome}</p>
                        <p>{aplicacao.quantidade_aplicada} uni</p>
                        <p>{new Date(aplicacao.hora_aplicacao).toLocaleTimeString()}</p>
                        <p>{new Date(aplicacao.hora_aplicacao).toLocaleDateString()}</p>
                      </div>
                    ))
                  ) : (
                    <p>Nenhum medicamento aplicado.</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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
