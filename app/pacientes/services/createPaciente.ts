import api from "@/app/services/axios";
import { toast } from "sonner";
import { PacienteFormProps } from "../schemas/pacienteFormSchema";
import { PACIENTES } from "@/app/constants/apiEndPoints";

const createPaciente = async (data: PacienteFormProps) => {
  await api.post(`${PACIENTES}`, data);
  toast.success("Paciente cadastrado!");
}

export default createPaciente;
