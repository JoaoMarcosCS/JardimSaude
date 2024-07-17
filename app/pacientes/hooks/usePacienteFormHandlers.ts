import { useForm } from "react-hook-form"
import { PacienteFormProps, pacienteFormSchema } from "../schemas/pacienteFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

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

  const handleCreatePaciente = async (data: PacienteFormProps) => {
    console.log(data);
    toast.info(JSON.stringify(data));
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
