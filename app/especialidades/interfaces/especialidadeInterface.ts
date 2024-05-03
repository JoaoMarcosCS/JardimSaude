import { MedicoInterface } from "@/app/interfaces/medicoInterface";

export interface Especialidade {
  id:number;
  nome:string;
  medicos: MedicoInterface[];
}
