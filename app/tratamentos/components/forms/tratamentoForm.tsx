import { useForm } from "react-hook-form";
import { TratamentoFormProps, schemaTratamentoForm } from "../../schemas/tratamentoFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import medicosFiltredByEspecialidade from "../../utils/MedicosFiltredByEspecialidade";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface";
import findPacienteByCPF from "../../services/findPacienteByCPF";
import { PacienteInterface } from "@/app/interfaces/pacienteInterface";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import createTratamento from "../../services/createTratamento";
import { useRouter } from "next/navigation";

const TratamentoForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<TratamentoFormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaTratamentoForm)
  })

  const { data, isLoading } = useEspecialidadesData();
  const [selectedEspecialidade, setSelectedEspecialidade] = useState("");
  const [medicosFiltrados, setMedicosFiltrados] = useState<FuncionarioInterface[] | null>();
  const [isFiltringMedicos, setIsFiltrigMedicos] = useState(false);
  const [selectedMedico, setSelectedMedico] = useState("");
  const [paciente, setPaciente] = useState<PacienteInterface | null>();
  const [cpf, setCPF] = useState("");
  const {push} = useRouter();

  const handleSelectEspecialdiade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEspecialidade(event.target.value);
  }

  const handleSelectMedico = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMedico(event.target.value);
  }

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(event.target.value);
  }

  useEffect(() => {
    setIsFiltrigMedicos(true);

    async function getFiltredMedicosByEspecialidade() {
      const response = await medicosFiltredByEspecialidade(selectedEspecialidade);
      setMedicosFiltrados(response);
    }
    async function getPacienteByCPF(){
      const response = await findPacienteByCPF(cpf);
      setPaciente(response);
    }

    getPacienteByCPF();
    getFiltredMedicosByEspecialidade();

    setIsFiltrigMedicos(false);

  }, [selectedEspecialidade, cpf])

  const handleTratamentoSubmit = async (data:TratamentoFormProps) => {
    data.id_paciente = paciente!?.id;
    data.inicio = new Date();
    data.status = "Em andamento";
    toast.info("Criando tratamento...");
    await createTratamento(data);
    push("/tratamentos");
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center flex-col mt-2">
          <h1 className="text-green-500 text-2xl">Criando formulário</h1>
          <Loader2 className="animate-spin mr-2 h-4 w-4 text-green-500" />
        </div>
      ) : (
        <section className="px-4 pt-3 shadow-lg mt-2 rounded max-w-96 items-center justify-start flex-col flex">
          <h1 className="text-2xl text-center font-semibold text-emerald-500 w-full">Iniciar tratamento</h1>
          <form action="" onSubmit={handleSubmit(handleTratamentoSubmit)} >
            <Label htmlFor="nomeTratamento">Nome do tratamento</Label>
            <Input type="text" placeholder="Operação de siso, tratamento oncológico..." {...register("nome")} id="nomeTratamento" />
            <Label htmlFor="nomeTratamento" className="text-red-600">{errors.nome?.message}</Label>
            <br />
            <br />
            <label htmlFor="">Especialidade:</label>
            <br />
            <select id="especialidade" value={selectedEspecialidade} onChange={handleSelectEspecialdiade}>
              <option value="">Selecione uma especialidade</option>
              {
                data!?.length > 0 ? (
                  data?.map((especialidade) => (
                    <option key={especialidade.id} value={especialidade.nome}>
                      {especialidade.nome}
                    </option>
                  ))
                ) : (
                  <option disabled>Nenhuma especialidade encontrada no Jardim Saúde</option>
                )
              }
            </select>
            <br />
            <br />
            {
              selectedEspecialidade && (isFiltringMedicos ? (
                <div className="flex items-center justify-center flex-col">
                  <h1 className="text-green-500 text-2xl">Carregando informações</h1>
                  <Loader2 className="animate-spin mr-2 h-4 w-4 text-green-500" />
                </div>
              ) : (
                <>
                  <label htmlFor="medicos">Médico(a) escolhido:</label>
                  <br />
                  <select id="medicos" value={selectedMedico} {...register("id_medico")} onChange={handleSelectMedico}>
                    <option value="">Selecione um médico</option>
                    {
                      medicosFiltrados!?.length > 0 ? (
                        medicosFiltrados?.map((medico) => (
                          <option key={medico.id} value={medico.id}>
                            {medico.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>Nenhum médico cadastrado nessa especialidade</option>
                      )
                    }
                  </select>
                  <br />
                  <Label htmlFor="medicos" className="text-red-600">{errors.id_medico?.message}</Label>
                </>
              ))
            }
            <br />
            <br />
            <Label htmlFor="valorTratamento">Valor do tratamento</Label>
            <Input type="number" {...register("valor")} id="valorTratamento" />
            <Label htmlFor="valorTratamento" className="text-red-600">{errors.valor?.message}</Label>
            <br />
            <Label htmlFor="cpf">CPF do paiciente</Label>
            <input type="text"  id="cpf" onChange={handleCPFChange}/>
            <Label >Paciente escolhido: {paciente ? (<>{paciente.nome}</>) : (<>Nenhum paciente encontrado</>)}</Label>
            <br />
            <Label htmlFor="queixas">Queixas</Label>
            <br />
            <textarea id="queixas" className="border border-emerald-400 rounded" {...register("queixas")} cols={30} rows={10}></textarea>
            <br />
            <Label>
              valor: {errors.valor?.message}
              Paciente: {errors.id_paciente?.message}
              Queixas: {errors.queixas?.message}
              Incio: {errors.inicio?.message}
              Status: {errors.status?.message}
              Termino: {errors.termino?.message}
              Nome: {errors.nome?.message}
              Root: {errors.root?.message}
              Medico: {errors.id_medico?.message}
            </Label>
            <Button type="submit">Criar</Button>
          </form>
        </section>
      )
      }
    </>

  )
}

export default TratamentoForm;
