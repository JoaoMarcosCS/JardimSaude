import { InputField } from "@/app/funcionarios/components/inputs/inputField"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePacienteFormHandlers } from "@/app/pacientes/hooks/usePacienteFormHandlers"
import { PhoneInput } from "../inputs/PhoneInput";

export const ContactFields = () => {
  const { control, register, errors, watch } = usePacienteFormHandlers();

  return (
    <>
       <InputField>
       <Label htmlFor="telefone">Telefone</Label>
        <PhoneInput control={control} name="telefone" error={errors.telefone}/>
      </InputField>
      <InputField>
        <Label htmlFor="email">Email</Label>
        <Input className="border shadow ps-2 rounded border-emerald-100"
          id="email" type="email" placeholder="jmcsjoaomarcos@gmail.com" {...register("email")} />
        <Label htmlFor="email" className="text-red-600">{errors.email?.message}</Label>
      </InputField>
    </>
  )
}
