import { Tratamento } from "@/app/tratamentos/interfaces/tratamentoInterface";

export interface Paciente {
  nome: string,
  cpf: string,
  altura: string,
  uf: string,
  cidade: string,
  rua: string,
  sexo: string,
  telefone: string,
  email: string,
  nascimento: string,
  tratamentos?: Tratamento[]
}
