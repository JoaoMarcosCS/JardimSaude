import { useForm } from "react-hook-form";
import { TratamentoFormProps, schemaTratamentoForm } from "../../schemas/tratamentoFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import medicosFiltredByEspecialidade from "../../utils/MedicosFiltredByEspecialidade";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface";
import findPacienteByCPF from "../../services/findPacienteByCPF";
import { PacienteInterface } from "@/app/interfaces/pacienteInterface";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import createTratamento from "../../services/createTratamento";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const { push } = useRouter();

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
    async function getPacienteByCPF() {
      const response = await findPacienteByCPF(cpf);
      setPaciente(response);
    }

    getPacienteByCPF();
    getFiltredMedicosByEspecialidade();

    setIsFiltrigMedicos(false);

  }, [selectedEspecialidade, cpf])

  const handleTratamentoSubmit = async (data: TratamentoFormProps) => {
    data.id_paciente = paciente!?.id;
    data.inicio = new Date();
    data.status = "Em andamento";
    data.queixas = data.queixas || "Nenhuma queixa registrada";
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
        <section className=" mx-3 pt-3 mt-2 rounded items-center shadow w-[600px] max-sm:w-full justify-start flex-col flex">
          <form action="" onSubmit={handleSubmit(handleTratamentoSubmit)} className="shadow-lg px-5 w-full ">
            <h1 className="text-2xl text-start font-semibold text-emerald-500 w-full">Iniciar tratamento</h1>
            <div className="py-1">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <Link href="/">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link href="/tratamentos">Tratamentos</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link href="/tratamentos/novoTratamento">Novo</Link>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="nomeTratamento">Nome do tratamento</Label>
              <Input type="text" className="border shadow border-emerald-100" placeholder="Operação de siso, tratamento oncológico..." {...register("nome")} id="nomeTratamento" />
              <Label htmlFor="nomeTratamento" className="text-red-600">{errors.nome?.message}</Label>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="">Especialidade escolhida</Label>
              <select id="especialidade" value={selectedEspecialidade} className="shadow p-2 border border-emerald-100 rounded" onChange={handleSelectEspecialdiade}>
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
            </div>
            <br />
            {
              <div className="flex flex-col mt-4 gap-2">
                <Label htmlFor="medicos">Médico(a) escolhido</Label>
                <select id="medicos" value={selectedMedico} className="shadow p-2 border border-emerald-100 rounded" {...register("id_medico")} onChange={handleSelectMedico}>
                  <option value="">Selecione um médico</option>
                  {
                    medicosFiltrados!?.length > 0 ? (
                      medicosFiltrados?.map((medico) => (
                        <option key={medico.id} value={medico.id}>
                          {medico.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>{selectedEspecialidade ? "Nenhum profissional encontrado para essa especialidade" : "Nenhuma especialdiade selecionada"}</option>
                    )
                  }
                </select>
                <Label htmlFor="medicos" className="text-red-600">{errors.id_medico?.message}</Label>
              </div>

            }
            <br />
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="valorTratamento">Valor(R$) do tratamento</Label>
              <Input type="number" className="border shadow border-emerald-100" {...register("valor")} id="valorTratamento" />
              <Label htmlFor="valorTratamento" className="text-red-600">{errors.valor?.message}</Label>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="cpf">CPF do paciente</Label>
              <Input type="text" className="border shadow border-emerald-100" id="cpf" onChange={handleCPFChange} />
              <Label >Paciente escolhido: {paciente ? (<>{paciente.nome}</>) : (<>Nenhum paciente encontrado</>)}</Label>
            </div>
            <br />
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="queixas">Queixas do paciente</Label>
              <textarea id="queixas" className="border border-emerald-400 rounded" {...register("queixas")} cols={30} rows={10}></textarea>
            </div>

            <div className="flex justify-evenly items-center mt-4 gap-2">
              <Button type="reset">Resetar</Button>
              <Button type="submit">Criar</Button>
            </div>

          </form>
        </section>
      )
      }
    </>

  )
}

export default TratamentoForm;
