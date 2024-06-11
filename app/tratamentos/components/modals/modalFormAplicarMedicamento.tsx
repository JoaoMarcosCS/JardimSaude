import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, PlusCircleIcon, Trash2Icon } from "lucide-react";
import AsyncSelect from "react-select/async";
import { Tratamento } from "../../interfaces/tratamentoInterface";
import useAplicacaoHandlers from "@/app/aplicacoes_medicamentos/hooks/useAplicacaoHandlers";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export interface ModalFormAplicarMedicamentoProps {
  tratamento: Tratamento;
}

export interface SelectOptions {
  value: number;
  label: string;
}


const ModalFormAplicarMedicamento = ({ tratamento }: ModalFormAplicarMedicamentoProps) => {

  const {
    openDialog,
    handleAumentarAplicacao,
    handleDiminuirAplicacao,
    handleChangeSelectOption,
    handleConfirmMedicamento,
    isOpen,
    setIsOpen,
    handleExcludeAplicacao,
    loadOptions,
    hanldeCriarAplicacao,
    medicamentos
  } = useAplicacaoHandlers()

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogTrigger asChild onClick={openDialog}>
        <Button className="bg-yellow-400 hover:bg-yellow-500">+Aplicar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[450px] overflow-y-scroll overflow-x-hidden">
        <DialogHeader>
          <DialogTitle>Aplicar medicação em {tratamento.paciente.nome}</DialogTitle>
          <DialogDescription >
            Digite o nome do medicamento e selecione a dosagem.
            <br />
            <br />
            <div className="flex flex-row gap-1 w-full">
              <AsyncSelect
                className="w-11/12"
                loadOptions={loadOptions}
                placeholder={"Dopamina, Adrenalina..."}
                onChange={handleChangeSelectOption}
                noOptionsMessage={() => "Nenhum medicamento encontrado"}
                loadingMessage={() => "Procurando..."}
              />

              <Button className="bg-emerald-500 text-white hover:bg-emerald-600" onClick={handleConfirmMedicamento}><PlusCircleIcon /></Button>
            </div>

          </DialogDescription>

          {medicamentos.slice().reverse().map(medicamento => (
            <div key={medicamento.id} data-aos="fade-up" className="w-full rounded-xl p-3 mt-3 border-emerald-100 border justify-between shadow items-center flex flex-wrap">
              <div className="w-full flex justify-between">
                <p className="text-base font-semibold  text-left">{medicamento.nome} {medicamento.peso}mg</p>
                <Trash2Icon size={16} onClick={() => handleExcludeAplicacao(medicamento.id)} className="text-red-500 hover:cursor-pointer hover:text-red-600 hover:scale-105 transition-transform" />
              </div>
              <div className="w-3/5 flex flex-col">
                <p className="text-muted-foreground text-sm text-left">{medicamento.tipo}</p>
                <p className="text-muted-foreground text-sm text-left">Preço unitário: {medicamento.valor_unitario}</p>
                <p className="text-sm font-semibold text-left">Qtd disponível: {medicamento.quantidade}</p>
              </div>
              <div className="w-1/3 flex flex-row bg-slate-100 rounded-md h-6 items-center justify-center gap-2 mb-3">

                <Minus size={20} className="hover:cursor-pointer" onClick={() => handleDiminuirAplicacao(medicamento.id)} />

                <p className="text-emerald-400">{medicamento.quantidadeAplicada}</p>

                <Plus size={20} className="hover:cursor-pointer" onClick={() => handleAumentarAplicacao(medicamento.id)} />

              </div>
            </div>

          ))
          }

        </DialogHeader>
        <div className="grid gap-4 py-4">

        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="border-none bg-white text-black hover:bg-gray-100">Cancelar</Button>
          </DialogClose>
          <Button className="bg-yellow-400 hover:bg-yellow-500" onClick={() => hanldeCriarAplicacao(tratamento.id)}>+Aplicar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default ModalFormAplicarMedicamento;
