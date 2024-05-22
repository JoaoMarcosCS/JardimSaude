import { AplicacaoMedicamento } from "@/app/aplicacoes_medicamentos/interfaces/aplicacaoMedicamentoInterface";

export interface Medicamento {
  id: string;
  nome: string;
  valor_unitario: number;
  quantidade: number;
  peso:number;
  descricao:string;
  tipo:string;
  codigo: number;
  aplicacoes: AplicacaoMedicamento[];
  historico_compras:any;
}
