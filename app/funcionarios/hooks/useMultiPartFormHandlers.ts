import { useState } from "react";

export const useMultiPartFormHandlers = (steps_limit: number) => {
  const STEPS_LIMIT = steps_limit;
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    if((currentStep + 1) <= STEPS_LIMIT){
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
