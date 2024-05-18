import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { Tratamento } from "@/app/tratamentos/interfaces/tratamentoInterface";

export interface AplicacaoMedicamento{
  id:string;
  hora_aplicacao: Date;
  quantidade_aplicada: number;
  medicamento: Medicamento;
}
