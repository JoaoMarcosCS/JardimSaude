import {EspecialidadeInterface} from "./especialidadeInterface"

export interface MedicoInterface{
  id:number;
  name:string;
  nascimento:Date;
  email:string;
  crm:string;
  cpf:string;
  senha:string;
  salario:number;
  nivel:number;
  empregado:boolean;
  especialidade: EspecialidadeInterface;
}
