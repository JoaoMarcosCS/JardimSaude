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

export const PacienteForm = () => {
  const { next, previous, currentStep } = usePacienteMultiPartFormHandlers(3)
  const { handleCreatePaciente, handleSubmit, isSubmitting } = usePacienteFormHandlers();

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
            <PersonalDataFields />
          </div>
        )
      }
      {
        currentStep === 2 && (
          <div data-aos="fade-left">
            <AdreesFields />
          </div>
        )
      }
      {
        currentStep === 3 && (
          <div data-aos="fade-left">
            <ContactFields />
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
                <Loader2 className="animate-spin"/> Cadastrando
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
