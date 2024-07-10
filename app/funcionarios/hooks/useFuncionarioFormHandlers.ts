import { useForm } from "react-hook-form";
import { FuncionarioFormProps, FuncionarioFormSchema } from "../schemas/funcionarioFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";
import { useState } from "react";
import { toast } from "sonner";
import { formatSalary } from "../utils/formatSalario";
import createFuncionario from "../services/createFuncionario";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export const useFuncionarioFormHandlers = () => {

  const {handleSubmit, control, watch, register, setValue, formState:{errors}} = useForm<FuncionarioFormProps>({
    resolver: zodResolver(FuncionarioFormSchema),
    mode:"all",
    reValidateMode: "onChange"
  })
  const { push } = useRouter();
  const {data, isLoading} = useEspecialidadesData();
  const [cpf, setCPF] = useState("");
  const [crm, setCRM] = useState("");

  const handleCreateFuncionario = async (data: FuncionarioFormProps) => {
    data.cpf = cpf;
    data.crm = crm || " ";
    data.empregado = true;
    console.log("Dados a serem enviados: " + JSON.stringify(data));
    await createFuncionario(data);
    push("/funcionarios");

  }

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(event.target.value);
  }

  const handleCRMChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCRM(event.target.value);
  }

  const handleNascimentoChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const nascimentoFormatado = event.target.value.replace(/\//g, '-');
    setValue('nascimento', new Date(nascimentoFormatado));
  }

  const handleSalarioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const salarioSemFormatacao = event.target.value.replace(/\D+/g, '');
    const valorFormatado = Number(formatSalary(salarioSemFormatacao));
    setValue('salario', valorFormatado);
  };

  return({
    handleSubmit,
    register,
    setValue,
    handleCreateFuncionario,
    handleCPFChange,
    handleCRMChange,
    errors,
    control,
    watch,
    crm,
    cpf,
    data,
    handleSalarioChange,
    handleNascimentoChange,
    isLoading
  })
}
