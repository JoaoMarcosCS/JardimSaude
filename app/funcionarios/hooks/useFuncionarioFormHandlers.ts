import { useForm } from "react-hook-form";
import { FuncionarioFormProps, FuncionarioFormSchema } from "../schemas/funcionarioFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";
import { useState } from "react";

export const useFuncionarioFormHandlers = () => {

  const {handleSubmit, control, watch, register, setValue, formState:{errors}} = useForm<FuncionarioFormProps>({
    resolver: zodResolver(FuncionarioFormSchema),
    mode:"all",
    reValidateMode: "onChange"
  })

  const {data, isLoading} = useEspecialidadesData();
  const [nascimento, setNascimento] = useState("");

  const handleCreateFuncionario = async (data: FuncionarioFormProps) =>{
    console.log(data)
  }

  const handleNascimentoChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const nascimentoFormatado = event.target.value.replace(/\//g, '-');
    setValue('nascimento', new Date(nascimentoFormatado));
  }

  return({
    handleSubmit,
    register,
    setValue,
    handleCreateFuncionario,
    errors,
    control,
    watch,
    data,
    handleNascimentoChange,
    isLoading
  })
}
