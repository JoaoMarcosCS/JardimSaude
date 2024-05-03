import { MedicoInterface } from "@/app/interfaces/medicoInterface";
import { PacienteInterface } from "@/app/interfaces/pacienteInterface";

export interface Tratamento {
  id: string;
  nome: string;
  valor: number;
  inicio: Date;
  termino?: Date;
  queixas: string;
  status: "Finalizado" | "Em andamento" | "Cancelado";
  medico_responsavel:MedicoInterface;
  paciente:PacienteInterface;
}
