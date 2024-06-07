import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PatternFormat } from "react-number-format"
import useFormNovoTratamentioHandlers from "../../hooks/useFormNovoTratamentoHandlers";

const TratamentoForm = () => {

  const {
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
    paciente,
    cpf,
    handleCPFChange,
    handleValorTratamentoChange,
    handleTratamentoSubmit,
  } = useFormNovoTratamentioHandlers();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center flex-col mt-2">
          <h1 className="text-green-500 text-2xl">Criando formulário</h1>
          <Loader2 className="animate-spin mr-2 h-4 w-4 text-green-500" />
        </div>
      ) : (
        <section className=" mx-3 pt-3 mt-2 items-center pb-5 max-sm:w-full justify-start flex-col flex">
          <form action="" onSubmit={handleSubmit(handleTratamentoSubmit)} className="shadow-lg rounded p-5 max-sm:w-full w-[600px]">
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
                    <Link href="/tratamentos/novo">Novo</Link>
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
              <select id="especialidade" value={selectedEspecialidade} className="shadow p-2 border border-emerald-100 rounded" onChange={handleSelectEspecialidade}>
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
              <Label htmlFor="valorTratamento">Valor do tratamento</Label>
              <div>
                <Label htmlFor="valorTratamento" className="">R$</Label>
                <input
                type="text"
                className="border-b-2 ms-1 border-emerald-100 ps-1"
                {...register('valor', { onChange:  handleValorTratamentoChange})}
                id="valorTratamento"
                pattern="[0-9]*"
                inputMode="numeric"
              />
              </div>

              <Label htmlFor="valorTratamento" className="text-red-600">{errors.valor?.message}</Label>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="cpf">CPF do paciente</Label>

              <PatternFormat
                format="###.###.###-##"
                placeholder="123.456.789-09"
                className="border shadow ps-2 rounded border-emerald-100" id="cpf" onChange={handleCPFChange}
              />
              <Label >Paciente escolhido: {paciente ? (<>{paciente.nome}</>) : (<>Nenhum paciente encontrado</>)}</Label>
            </div>
            <br />
            <div className="flex flex-col mt-4 gap-2">
              <Label htmlFor="queixas">Queixas do paciente</Label>
              <textarea id="queixas" className="border border-emerald-400 rounded" {...register("queixas")} cols={30} rows={10}></textarea>
            </div>

            <div className="flex justify-evenly items-center mt-4 gap-2">
              <Button type="reset" className="border-none bg-transparent text-black hover:bg-slate-200">Limpar dados</Button>
              <Button type="submit" className="bg-emerald-500 text-white">Criar</Button>
            </div>

          </form>
        </section>
      )
      }
    </>

  )
}

export default TratamentoForm;
