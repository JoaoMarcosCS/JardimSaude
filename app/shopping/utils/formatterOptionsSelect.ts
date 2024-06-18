import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { SelectOptions } from "@/app/tratamentos/components/modals/modalFormAplicarMedicamento";
import { PesquisaMedicamento } from "@/app/tratamentos/services/findMedicamentosByNome";

export const formatterOptionsSelect = (medicamentos:PesquisaMedicamento[] | Medicamento[]):SelectOptions[] => {
  const formattedOptions:SelectOptions[] = medicamentos.map(medicamento => ({
    value: Number( medicamento.id),
    label: `${medicamento.nome} ${medicamento.peso}mg`
  }))

  return formattedOptions;
}
