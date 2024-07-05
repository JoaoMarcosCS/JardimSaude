import { EspecialidadeInterface } from "@/app/interfaces/especialidadeInterface";

export interface FuncionarioInterface{
  id:number;
  name:string;
  nascimento:Date;
  email:string;
  crm?:string;
  cpf:string;
  salario:number;
  nivel:number;
  empregado:boolean;
  especialidade?: EspecialidadeInterface;
  pagamento?: Auditoria[]
}
