import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import findMedicamentoById from "@/app/medicamentos/services/findMedicamentoById";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCriarAplicacaoMutate } from "./useCriarAplicacaoMutate";
import { SelectOptions } from "@/app/tratamentos/components/modals/modalFormAplicarMedicamento";
import findMedicamentosByNome, { PesquisaMedicamento } from "@/app/tratamentos/services/findMedicamentosByNome";
import api from "@/app/services/axios";
import { DEFAULT_MEDICAMENTOS } from "@/app/constants/apiEndPoints";
import { formatterOptionsSelect } from "../utils/formatterOptionsSelect";

const useAplicacaoHandlers = () => {

  const [medicamentoId, setMedicamentoId] = useState(0);
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const { mutate, isPending } = useCriarAplicacaoMutate();
  const [defaultOptions, setDefaultOptions] = useState<SelectOptions[]>()
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    defaultMedicamentos();
  },[])

  const defaultMedicamentos = async () => {
    const response = await api.get<PesquisaMedicamento[]>(DEFAULT_MEDICAMENTOS);

    const formattedOptions = formatterOptionsSelect(response.data);

    setDefaultOptions(formattedOptions);
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
    if (medicamentoId) {
      const response = await findMedicamentoById(medicamentoId);

      const existeMedicamento = medicamentos.find(medicamento => medicamento.id === response.id);

      response.quantidadeAplicada = 1;

      if (existeMedicamento) {
        toast.warning("Esse medicamento já foi selecionado!");;
      } else {
        setMedicamentos(prevState => [...prevState, response]);
      }
    } else {
      toast.warning("Nenhum medicamento pesquisado")
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
    isPending,
    medicamentos,
    setIsOpen,
    defaultOptions
  }
}

export default useAplicacaoHandlers;
