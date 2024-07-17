import { InputField } from "@/app/funcionarios/components/inputs/inputField"
import { usePacienteFormHandlers } from "@/app/pacientes/hooks/usePacienteFormHandlers"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CPFInput } from "../inputs/CPFInput";
import { DateInput } from "../inputs/DateInput";
import { HeightInput } from "../inputs/HeightInput";

export const PersonalDataFields = () => {
  const { register, errors, control } = usePacienteFormHandlers();
  return (
    <>
      <InputField>
        <Label htmlFor="nome">Nome</Label>
        <Input className="border shadow ps-2 rounded border-emerald-100"
          id="nome" type="text" placeholder="João Marcos" {...register("nome")} />
        <Label htmlFor="nome" className="text-red-600">{errors.nome?.message}</Label>
      </InputField>
      <InputField>
        <Label htmlFor="cpf">CPF</Label>
        <CPFInput control={control} name="cpf" error={errors.cpf} />
      </InputField>
      <InputField>
        <Label htmlFor="altura">Altura</Label>
        <HeightInput name="altura" control={control} error={errors.altura}/>
      </InputField>
      <InputField>
        <Label htmlFor="sexo">Sexo</Label>
        <select id="sexo" className="shadow p-2 border border-emerald-100 rounded" {...register('sexo')}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        <Label htmlFor="nome" className="text-red-600">{errors.sexo?.message}</Label>
      </InputField>
      <InputField>
        <DateInput name="nascimento" control={control} error={errors?.nascimento}/>
      </InputField>
    </>
  )
}
