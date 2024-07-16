import { Label } from "@/components/ui/label";
import { useFuncionarioFormHandlers } from "../../hooks/useFuncionarioFormHandlers"
import { useMultiPartFormHandlers } from "../../hooks/useMultiPartFormHandlers";
import { InputField } from "../inputs/inputField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Fingerprint, Loader2, Lock, Send, SendHorizontal, UserCog } from "lucide-react";
import { LabelStep } from "./labelStep";
import { PatternFormat } from "react-number-format";
import { useWatch } from "react-hook-form";

const FuncionarioForm = () => {
  const { register, errors, watch,
    handleCPFChange,
    handleCRMChange,
    data, isLoading,
    handleSubmit,
    handleNascimentoChange,
    handleCreateFuncionario,
    handleSalarioChange,
    crm
  } = useFuncionarioFormHandlers();
  const { next, previous, currentStep } = useMultiPartFormHandlers(3)

  const selectedCargo = watch('nivel');
  const fields = watch();

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-green-500 text-2xl">Criando formulário</h1>
          <Loader2 className="animate-spin mr-2 h-4 w-4 text-green-500" />
        </div>
      ) : (
        <form action="" className="rounded p-5 max-sm:w-full mt-2 w-[600px]" onSubmit={handleSubmit(handleCreateFuncionario)}>
          <div className="w-full flex justify-around gap-4">
            <LabelStep activeStep={1} currentStep={currentStep}>
              <Fingerprint /> Dados pessoais
            </LabelStep >
            <LabelStep activeStep={2} currentStep={currentStep}>
              <UserCog />Cargo
            </LabelStep>
            <LabelStep activeStep={3} currentStep={currentStep}>
              <Lock />Acesso
            </LabelStep>
          </div >
          {
            currentStep === 1 && (
              <div data-aos="fade-left">
                <InputField>
                  <Label htmlFor="nome">Nome</Label>
                  <Input className="border shadow ps-2 rounded  border-emerald-100"
                  id="nome" type="text" placeholder="João Marcos" {...register("name")} />
                  <Label htmlFor="nome" className="text-red-600">{errors.name?.message}</Label>
                </InputField>
                <InputField>
                  <Label htmlFor="crm">CPF do funcionário</Label>
                  <PatternFormat
                    format="###.###.###-##"
                    placeholder="123.456.789-09"
                    className="border shadow ps-2 rounded py-1.5 border-emerald-100" id="cpf"
                    onChange={handleCPFChange}
                  />
                  <Label htmlFor="cpf" className="text-red-600">{errors.cpf?.message}</Label>
                </InputField>
                <InputField>
                  <Label htmlFor="email">Email</Label>
                  <Input className="border shadow ps-2 rounded  border-emerald-100" id="email" type="email" placeholder="jmcsjoaomarcos@gmail." {...register("email")} />
                  <Label htmlFor="email" className="text-red-600">{errors.email?.message}</Label>
                </InputField>
                <InputField>
                  <Label htmlFor="nascimento">Nascimento</Label>
                  <Input className="border shadow ps-2 rounded border-emerald-100"
                    id="nascimento" type="date" placeholder="18/04/2005"
                    onChange={handleNascimentoChange}
                  // {...register("nascimento", { valueAsDate: true })}
                  />
                  <Label htmlFor="nascimento" className="text-red-600">{errors.nascimento?.message}</Label>
                </InputField>
              </div>
            )
          }
          {
            currentStep === 2 && (
              <div data-aos="fade-left">
                <InputField>
                  <Label htmlFor="cargo">Cargo</Label>
                  <select id="cargo" className="shadow p-2 border border-emerald-100 rounded" {...register("nivel", { valueAsNumber: true })}>
                    <option value="">Selecione um cargo</option>
                    <option value="1">Secretário(a)</option>
                    <option value="2">Médico(a)</option>
                  </select>
                  <Label htmlFor="cargo" className="text-red-600">{errors.nivel?.message}</Label>
                </InputField>
                <InputField>
                  <Label htmlFor="salario">Salário</Label>
                  <input
                    type="number"
                    className="border-b-2 ms-1 border-emerald-100 ps-1"
                    {...register('salario', { valueAsNumber: true })}

                  />
                  <Label htmlFor="salario" className="text-red-600">{errors.salario?.message}</Label>
                </InputField>
                {selectedCargo == 2 && (
                  <div>
                    <InputField>
                      <Label htmlFor="crm">CRM</Label>
                      <Input className="border shadow ps-2 rounded  border-emerald-100"
                        id="nome" type="text"
                        placeholder="CRM-SP-12345"
                        onChange={handleCRMChange}
                        value={crm}
                      />
                      <Label htmlFor="cargo" className="text-red-600">{errors.crm?.message}</Label>
                    </InputField>
                    <InputField>
                      <Label htmlFor="">Especialidade</Label>
                      <select id="cargo"
                        className="shadow p-2 border border-emerald-100 rounded"
                        {...register("id_especialidade", { valueAsNumber: true })}
                      >
                        <option value="">Selecione uma especialdiade</option>
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
                      <Label htmlFor="cargo" className="text-red-600">{errors.id_especialidade?.message}</Label>
                    </InputField>
                  </div>
                )}
              </div>
            )
          }
          {
            currentStep === 3 && (
              <div data-aos="fade-left">
                <InputField>
                  <Label htmlFor="nome">Senha</Label>
                  <Input id="nome" type="text" placeholder="JMCS2024" {...register("senha")} />
                  <Label htmlFor="nome" className="text-red-600">{errors.senha?.message}</Label>
                </InputField>
              </div>
            )
          }
          <footer className="flex mt-2 justify-between items-center">
            <Button type="button" variant={"outline"} disabled={currentStep === 1} onClick={previous}>
              <p className="flex flex-row items-center gap-1">
                <ArrowBigLeft />Anterior
              </p>

            </Button>
            {
              currentStep === 3 ? (
                <Button type="submit" variant={"outline"}>
                  Contratar
                </Button>
              ) : (
                <Button type="button" variant={"outline"} onClick={next}>
                  Próximo<ArrowBigRight />
                </Button>
              )
            }

          </footer>
        </form >
      )
      }
    </>

  )
}

export default FuncionarioForm
