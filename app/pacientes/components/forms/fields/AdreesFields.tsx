import { InputField } from "@/app/funcionarios/components/inputs/inputField"
import { usePacienteFormHandlers } from "@/app/pacientes/hooks/usePacienteFormHandlers"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AdreesFields = () => {
  const { register, errors, control } = usePacienteFormHandlers();

  return (
    <>
      <InputField>
        <Label htmlFor="uf">UF( Unidade Federal)</Label>
        <Input className="border shadow ps-2 rounded border-emerald-100"
          id="uf" type="text" placeholder="SP, RJ, PR, RS, DF, AC, AL, AP" {...register("uf")} />
        <Label htmlFor="uf" className="text-red-600">{errors.uf?.message}</Label>
      </InputField>
      <InputField>
        <Label htmlFor="cidade">Cidade</Label>
        <Input className="border shadow ps-2 rounded border-emerald-100"
          id="cidade" type="text" placeholder="Aparecida, São Paulo, Guaratinguetá" {...register("cidade")} />
        <Label htmlFor="cidade" className="text-red-600">{errors.cidade?.message}</Label>
      </InputField>
      <InputField>
        <Label htmlFor="rua">Rua e número</Label>
        <Input className="border shadow ps-2 rounded border-emerald-100"
          id="rua" type="text" placeholder="Rua Leopoldo Macedo, 314" {...register("rua")} />
        <Label htmlFor="rua" className="text-red-600">{errors.rua?.message}</Label>
      </InputField>
    </>
  )
}
