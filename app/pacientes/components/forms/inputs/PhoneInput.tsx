import { CustomInputProps } from "@/app/pacientes/interfaces/CustomInputProps"
import { Label } from "@/components/ui/label"
import { Controller } from "react-hook-form"
import { PatternFormat } from "react-number-format"

export const PhoneInput = ({ name, control, error = null }: CustomInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <PatternFormat
            format="+55 (##) #####-####"
            className="border shadow ps-2 rounded py-1.5 border-emerald-100"
            id="cpf"
            placeholder="+55 (12) 99658-5137"
            mask={"_"}
            getInputRef={ref}
            {...rest}
          />
        )}
      />
      {!!error && <Label className="text-red-600">{error?.message}</Label>}
    </>
  )
}
