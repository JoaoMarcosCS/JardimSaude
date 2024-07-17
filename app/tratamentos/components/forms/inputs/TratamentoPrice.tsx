import { CustomInputProps } from "@/app/pacientes/interfaces/CustomInputProps"
import { Label } from "@/components/ui/label"
import { Controller } from "react-hook-form"
import { NumericFormat } from "react-number-format"

export const TratamentoPrice = ({ name, control, error = null }: CustomInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            className="border shadow ps-2 rounded py-1.5 border-emerald-100"
            prefix="R$ "
            decimalScale={2}
            getInputRef={ref}
            {...rest}
      />
        )}
      />
      {!!error && <Label className="text-red-600">{error?.message}</Label>}
    </>
  )
}
