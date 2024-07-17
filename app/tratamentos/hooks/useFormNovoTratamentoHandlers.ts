import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";
import { useEffect, useState } from "react";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface";
import { PacienteInterface } from "@/app/interfaces/pacienteInterface";
import { useRouter } from "next/navigation";
import { TratamentoFormProps, schemaTratamentoForm } from "../schemas/tratamentoFormSchema";
import createTratamento from "../services/createTratamento";
import findPacienteByCPF from "../services/findPacienteByCPF";
import medicosFiltredByEspecialidade from "../utils/MedicosFiltredByEspecialidade";

const useFormNovoTratamentioHandlers = () => {
  const { handleSubmit, register, formState: { errors }, setValue, control  } = useForm<TratamentoFormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaTratamentoForm)
  });

  const { data, isLoading } = useEspecialidadesData();
  const [selectedEspecialidade, setSelectedEspecialidade] = useState("");
  const [medicosFiltrados, setMedicosFiltrados] = useState<FuncionarioInterface[] | null>();
  const [selectedMedico, setSelectedMedico] = useState("");
  const [paciente, setPaciente] = useState<PacienteInterface | null>();
  const [cpf, setCPF] = useState("");
  const [isSearchingCPF, setIsSearchingCPF] = useState(false);
  const { push } = useRouter();

  const handleSelectEspecialidade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEspecialidade(event.target.value);
  }

  const handleSelectMedico = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMedico(event.target.value);
  }

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cpfFormatado = event.target.value.replace(/[.-]/g, '');
    setCPF(cpfFormatado);
  }

  const formatarValor = (valor:string) => {
    return `${valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  };

  const handleValorTratamentoChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const valorSemFormatacao = event.target.value.replace(/\D+/g, '');
    const valorFormatado = formatarValor(valorSemFormatacao);
    setValue('valor', valorFormatado);
  };

  useEffect(() => {
    const getFiltredMedicosByEspecialidade = async () => {
      const response = await medicosFiltredByEspecialidade(selectedEspecialidade);
      setMedicosFiltrados(response);
    }

    const getPacienteByCPF = async () => {
      setIsSearchingCPF(true);
      const response = await findPacienteByCPF(cpf);
      setPaciente(response);
      setIsSearchingCPF(false);
    }

    if (selectedEspecialidade) {
      getFiltredMedicosByEspecialidade();
    }

    if (cpf) {
      getPacienteByCPF();
    }

  }, [selectedEspecialidade, cpf]);

  const handleTratamentoSubmit = async (data: TratamentoFormProps) => {
    data.id_paciente = paciente?.id;
    data.inicio = new Date();
    data.status = "Em andamento";
    data.queixas = data.queixas || "Nenhuma queixa registrada";
    await createTratamento(data);
    push("/tratamentos");
  }

  return {
    handleSubmit,
    register,
    errors,
    data,
    isLoading,
    selectedEspecialidade,
    handleSelectEspecialidade,
    medicosFiltrados,
    selectedMedico,
    handleSelectMedico,
    isSearchingCPF,
    paciente,
    control,
    cpf,
    setValue,
    handleCPFChange,
    handleTratamentoSubmit,
    handleValorTratamentoChange
  }
}

export default useFormNovoTratamentioHandlers;
