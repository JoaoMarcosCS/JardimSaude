import { useMultiPartFormHandlers } from "@/app/funcionarios/hooks/useMultiPartFormHandlers"
import { StepIndicator } from "./stepIndicator"

export const PacienteForm = () => {
  const {next, previous, currentStep} = useMultiPartFormHandlers(3)

  return(
    <form action="" className="rounded p-5 max-sm:w-full mt-2 w-[600px]">
      <StepIndicator currentStep={currentStep}/>

      <button type="button" onClick={previous}>anterios</button>
      <button type="button" onClick={next}>proximo</button>
    </form>
  )
}
