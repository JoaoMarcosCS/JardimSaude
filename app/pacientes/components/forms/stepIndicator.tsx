import { LabelStep } from "@/app/funcionarios/components/forms/labelStep"
import { Fingerprint, MapPinned, Phone } from "lucide-react"

interface StepIndicatorProps{
  currentStep: number
}

export const StepIndicator = ({currentStep}:StepIndicatorProps) => {
  return (
    <div className="w-full flex justify-around gap-4">
      <LabelStep activeStep={1} currentStep={currentStep}>
        <Fingerprint /> Dados pessoais
      </LabelStep >
      <LabelStep activeStep={2} currentStep={currentStep}>
        <MapPinned /> Endreço
      </LabelStep>
      <LabelStep activeStep={3} currentStep={currentStep}>
        <Phone /> Contato
      </LabelStep>
    </div >
  )
}
