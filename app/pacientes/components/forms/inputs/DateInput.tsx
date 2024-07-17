import { InputField } from "@/app/funcionarios/components/inputs/inputField"
import { CustomInputProps } from "@/app/pacientes/interfaces/CustomInputProps"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Controller } from "react-hook-form"

export const DateInput = ({ name, control, error = null }: CustomInputProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <InputField>
            <Label htmlFor="nascimento">Data de nascimento</Label>
            <Popover>
              <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                  >
                    {field.value ? (
                      format(field.value, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date: Date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Label htmlFor="nasicmenot" className="text-red-600">{error?.message}</Label>
          </InputField>
        )}
      />
    </>
  )
}
