import { useMultiPartFormHandlers } from "@/app/funcionarios/hooks/useMultiPartFormHandlers"
import { StepIndicator } from "./stepIndicator"
import { PersonalDataFields } from "./fields/PersonalDataFields"
import { AdreesFields } from "./fields/AdreesFields"
import { ContactFields } from "./fields/ContactFields"
import { Button } from "@/components/ui/button"
import { ArrowBigLeft, ArrowBigRight, Loader2 } from "lucide-react"
import { usePacienteFormHandlers } from "../../hooks/usePacienteFormHandlers"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { usePacienteMultiPartFormHandlers } from "../../hooks/usePacienteMultiPartForm"
import { InputField } from "@/app/funcionarios/components/inputs/inputField"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CPFInput } from "./inputs/CPFInput"
import { HeightInput } from "./inputs/HeightInput"
import { DateInput } from "./inputs/DateInput"
import { PhoneInput } from "./inputs/PhoneInput"

export const PacienteForm = () => {
  const { next, previous, currentStep } = usePacienteMultiPartFormHandlers(3)
  const { handleCreatePaciente, handleSubmit, isSubmitting, errors, control, register } = usePacienteFormHandlers();

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <form action=""
      onSubmit={handleSubmit(handleCreatePaciente)}
      className="rounded p-5 max-sm:w-full mt-2 w-[600px]">
      <StepIndicator currentStep={currentStep} />
      {
        currentStep === 1 && (
          <div data-aos="fade-left">
            <InputField>
              <Label htmlFor="nome">Nome</Label>
              <Input className="border shadow ps-2 rounded border-emerald-100"
                id="nome" type="text" placeholder="João Marcos" {...register("nome")} />
              <Label htmlFor="nome" className="text-red-600">{errors.nome?.message}</Label>
            </InputField>
            <InputField>
              <Label htmlFor="cpf">CPF</Label>
              <CPFInput control={control} name="cpf" error={errors.cpf} />
            </InputField>
            <InputField>
              <Label htmlFor="altura">Altura</Label>
              <HeightInput name="altura" control={control} error={errors.altura} />
            </InputField>
            <InputField>
              <Label htmlFor="sexo">Sexo</Label>
              <select id="sexo" className="shadow p-2 border border-emerald-100 rounded" {...register('sexo')}>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
              <Label htmlFor="nome" className="text-red-600">{errors.sexo?.message}</Label>
            </InputField>
            <InputField>
              <DateInput name="nascimento" control={control} error={errors?.nascimento} />
            </InputField>
          </div>
        )
      }
      {
        currentStep === 2 && (
          <div data-aos="fade-left">
            <InputField>
              <Label htmlFor="uf">UF( Unidade Federal)</Label>
              <Input className="border shadow ps-2 rounded border-emerald-100"
                id="uf" type="text" placeholder="SP, RJ, PR, RS, DF, AC, AL, AP" {...register("uf")} />
              <Label htmlFor="uf" className="text-red-600">{errors.uf?.message}</Label>
            </InputField>
            <InputField>
              <Label htmlFor="cidade">Cidade</Label>
              <Input className="border shadow ps-2 rounded border-emerald-100"
                id="cidade" type="text" placeholder="Aparecida, São Paulo, Guaratinguetá" {...register("cidade")} />
              <Label htmlFor="cidade" className="text-red-600">{errors.cidade?.message}</Label>
            </InputField>
            <InputField>
              <Label htmlFor="rua">Rua e número</Label>
              <Input className="border shadow ps-2 rounded border-emerald-100"
                id="rua" type="text" placeholder="Rua Leopoldo Macedo, 314" {...register("rua")} />
              <Label htmlFor="rua" className="text-red-600">{errors.rua?.message}</Label>
            </InputField>
          </div>
        )
      }
      {
        currentStep === 3 && (
          <div data-aos="fade-left">
            <InputField>
              <Label htmlFor="telefone">Telefone</Label>
              <PhoneInput control={control} name="telefone" error={errors.telefone} />
            </InputField>
            <InputField>
              <Label htmlFor="email">Email</Label>
              <Input className="border shadow ps-2 rounded border-emerald-100"
                id="email" type="email" placeholder="jmcsjoaomarcos@gmail.com" {...register("email")} />
              <Label htmlFor="email" className="text-red-600">{errors.email?.message}</Label>
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
            <Button type="submit" variant={"outline"} disabled={isSubmitting}>
              {isSubmitting ? <>
                <Loader2 className="animate-spin" /> Cadastrando
              </> : "Cadastrar"}
            </Button>
          ) : (
            <Button type="button" variant={"outline"}
              onClick={next}
            >
              Próximo<ArrowBigRight />
            </Button>
          )
        }

      </footer>
    </form>
  )
}
