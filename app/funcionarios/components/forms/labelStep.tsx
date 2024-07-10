import React from "react"

export interface LabelStepProps {
  children: React.ReactNode
  activeStep: number,
  currentStep: number
}

export const LabelStep = ({ children, currentStep, activeStep }: LabelStepProps) => {
  return (
    <div className={`flex w-1/3 items-start justify-center flex-col `}>
      <p className={`flex gap-1 mb-2 flex-row max-sm:hidden ${currentStep >= activeStep
        ? 'text-black '
        : 'text-muted-foreground'
        } w-full items-center transition-all`}>
        {children}
      </p>
      <span className={`${currentStep >= activeStep
        ? 'bg-green-500 '
        : 'bg-green-200'
        } w-full rounded-full h-1 transition-all`}></span>
    </div>
  )
}
