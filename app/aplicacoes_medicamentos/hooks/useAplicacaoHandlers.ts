import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import findMedicamentoById from "@/app/medicamentos/services/findMedicamentoById";
import { useState } from "react";
import { toast } from "sonner";
import { useCriarAplicacaoMutate } from "./useCriarAplicacaoMutate";
import { SelectOptions } from "@/app/tratamentos/components/modals/modalFormAplicarMedicamento";
import findMedicamentosByNome from "@/app/tratamentos/services/findMedicamentosByNome";

const useAplicacaoHandlers = () => {

  const [medicamentoId, setMedicamentoId] = useState(0);
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const { mutate,  } = useCriarAplicacaoMutate();
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  }

  const handleDiminuirAplicacao = (idMedicamento: string) => {
    setMedicamentos(prevState =>
      prevState.map(medicamento =>
        medicamento.id === idMedicamento && medicamento.quantidadeAplicada! > 1
          ? { ...medicamento, quantidadeAplicada: medicamento.quantidadeAplicada! - 1 }
          : medicamento
      )
    )
  }

  const handleAumentarAplicacao = (idMedicamento: string) => {
    setMedicamentos(prevState =>
      prevState.map(medicamento =>
        medicamento.id === idMedicamento && medicamento.quantidade > medicamento.quantidadeAplicada!
          ? { ...medicamento, quantidadeAplicada: medicamento.quantidadeAplicada! + 1 }
          : medicamento
      )
    )
  }

  const handleExcludeAplicacao = (idMedicamento: string) => {
    setMedicamentos(prevState =>
      prevState.filter(medicamento => medicamento.id !== idMedicamento));
  }

  const loadOptions = async (search: string) => {
    const response = await findMedicamentosByNome(search);
    const formattedOptions: SelectOptions[] = response.map(medicamento => ({
      value: medicamento.id,
      label: `${medicamento.nome} ${medicamento.peso}mg`
    }))

    return formattedOptions;
  }

  const handleChangeSelectOption = (seletcOption: any) => {
    setMedicamentoId(seletcOption.value);
  }

  const hanldeCriarAplicacao = async (tratamentoId: string) => {
    mutate({ medicamentos: medicamentos, idTratamento: tratamentoId })
    setIsOpen(false);
    setMedicamentos([]);
    setMedicamentoId(0);
  }

  const handleConfirmMedicamento = async () => {
    const response = await findMedicamentoById(medicamentoId);

    const existeMedicamento = medicamentos.find(medicamento => medicamento.id === response.id);

    response.quantidadeAplicada = 1;

    if (existeMedicamento) {
      toast.warning("Esse medicamento já foi selecionado!");;
    } else {
      setMedicamentos(prevState => [...prevState, response]);
    }
  }

  return {
    handleAumentarAplicacao,
    handleDiminuirAplicacao,
    handleChangeSelectOption,
    handleConfirmMedicamento,
    openDialog,
    hanldeCriarAplicacao,
    loadOptions,
    handleExcludeAplicacao,
    isOpen,
    medicamentos,
    setIsOpen
  }
}

export default useAplicacaoHandlers;
