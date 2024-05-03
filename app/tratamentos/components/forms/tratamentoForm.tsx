import { useForm } from "react-hook-form";
import { TratamentoFormProps, schemaTratamentoForm } from "../../schemas/tratamentoFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEspecialidadesData } from "@/app/especialidades/hooks/useEspecialidadesData";

const TratamentoForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<TratamentoFormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schemaTratamentoForm)
  })

  const { data, isLoading } = useEspecialidadesData()

  const handleTratamentoSubmit = () => {

  }

  return (
    <>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <section>
          <form onSubmit={handleSubmit(handleTratamentoSubmit)}>
            <Label htmlFor="nomeTratamento">Nome do tratamento</Label>
            <Input type="text" placeholder="Operação de siso, tratamento oncológico..." {...register("nome")} id="nomeTratamento" />
            <Label htmlFor="nomeTratamento" className="text-red-600">{errors.nome?.message}</Label>
            <br />
            <Label htmlFor="especialidade">Selecione uma especialidade do Jardim Saúde</Label>
            <select id="especialidade">
              {
                data!?.length > 0 ? (
                  data?.map((especialidade) => (
                    <option key={especialidade.id} value={especialidade.id}>
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
