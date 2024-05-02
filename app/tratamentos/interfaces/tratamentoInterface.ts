import { medicoInterface } from "@/app/interfaces/medicoInterface";
import { pacienteInterface } from "@/app/interfaces/pacienteInterface";

export interface Tratamento {
  id: string;
  nome: string;
  valor: number;
  inicio: Date;
  termino?: Date;
  queixas: string;
  status: "Finalizado" | "Em andamento" | "Cancelado";
  medico_responsavel:medicoInterface;
  paciente:pacienteInterface;
}
