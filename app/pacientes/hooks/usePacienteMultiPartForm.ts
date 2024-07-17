import { useState } from "react";
import { usePacienteFormHandlers } from "./usePacienteFormHandlers";
import { toast } from "sonner";

export const usePacienteMultiPartFormHandlers = (steps_limit:number) => {
  const [currentStep, setCurrentStep] = useState(1);
  const {errors} = usePacienteFormHandlers()

  const next = () => {
    if((currentStep + 1) <= steps_limit){
      setCurrentStep(currentStep + 1);
    }
  }

  const previous = () => {
    if((currentStep - 1) > 0){
      setCurrentStep(currentStep - 1)
    }
  }

  return({
    next,
    previous,
    currentStep
  })

}
