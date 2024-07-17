import { useForm } from "react-hook-form"
import { PacienteFormProps, pacienteFormSchema } from "../schemas/pacienteFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { useCreatePacienteMutate } from "./useCreatePacienteMutate"
import { useRouter } from "next/navigation"

export const usePacienteFormHandlers = () => {
  const {
    register,
    formState:{
      errors,
      isSubmitting
    },
    handleSubmit,
    control,
    watch,
  } = useForm<PacienteFormProps>({
    resolver: zodResolver(pacienteFormSchema),
    mode:"all",
    reValidateMode:"onChange"
  })

  const {mutate, isSuccess} = useCreatePacienteMutate();
  const {push} = useRouter();

  const handleCreatePaciente = async (data: PacienteFormProps) => {
    mutate(data);
    if(isSuccess){
      toast.success("Paciente cadastrado!");
      push('/pacientes');
    }
  }

  return {
    register,
    handleSubmit,
    handleCreatePaciente,
    errors,
    control,
    watch,
    isSubmitting
  }
}
