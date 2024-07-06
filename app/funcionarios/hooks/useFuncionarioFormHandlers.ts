import { useForm } from "react-hook-form";
import { FuncionarioFormProps, FuncionarioFormSchema } from "../schemas/funcionarioFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";

export const useFuncionarioFormHandlers = () => {

  const {handleSubmit, register, setValue, formState:{errors}} = useForm<FuncionarioFormProps>({
    resolver: zodResolver(FuncionarioFormSchema),
    mode:"all",
    reValidateMode: "onChange"
  })

  const {data, isLoading} = useEspecialidadesData()

  return({
    handleSubmit,
    register,
    setValue,
    errors,
    data,
    isLoading
  })
}
