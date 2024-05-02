import { z } from "zod"

export const schemaLoginForm = z.object({
  email: z.string().email("Informe um email válido"),
  senha: z.string().min(8, "A senha deve conter no mínimo 8 caracteres")
})

export type LoginFormProps = z.infer<typeof schemaLoginForm>;
