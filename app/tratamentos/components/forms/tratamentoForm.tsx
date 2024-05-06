import { useForm } from "react-hook-form";
import { TratamentoFormProps, schemaTratamentoForm } from "../../schemas/tratamentoFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";
import { Loader2 } from "lucide-react";
import { useFuncionariosData } from "@/app/funcionarios/hooks/useFuncionariosData[";
import { useEffect, useState } from "react";
import { Especialidade } from "@/app/especialidades/interfaces/especialidadeInterface";

const TratamentoForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<TratamentoFormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaTratamentoForm)
  })

  const { data, isLoading } = useEspecialidadesData();
  const [selectedEspecialidade, setSelectedEspecialidade] = useState("");

  const handleSelectEspecialdiade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEspecialidade(event.target.value);
  }

  useEffect(()=>{}, [])

  const handleTratamentoSubmit = () => {

  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center flex-column justify-content-center">
        <h1 className="text-green-500 text-2xl">Criando formulário</h1>
        <Loader2 className="animate-spin mr-2 h-4 w-4 text-green-500"/>
        </div>
      ) : (
        <section>
          <form onSubmit={handleSubmit(handleTratamentoSubmit)}>
            <Label htmlFor="nomeTratamento">Nome do tratamento</Label>
            <Input type="text" placeholder="Operação de siso, tratamento oncológico..." {...register("nome")} id="nomeTratamento" />
            <Label htmlFor="nomeTratamento" className="text-red-600">{errors.nome?.message}</Label>
            <br />
            <Label htmlFor="especialidade">Selecione uma especialidade do Jardim Saúde</Label>
            <select id="especialidade" value={selectedEspecialidade} onChange={handleSelectEspecialdiade}>
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
          </form>
        </section>
      )
      }
    </>

  )
}

export default TratamentoForm;
