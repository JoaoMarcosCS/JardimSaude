import {z} from "zod"

export const FuncionarioFormSchema = z.object({
  name: z.string().min(5, "O nome precisa ter no mínimo cinco letras")
  .regex(/^[a-zA-Z\s]+$/, "O nome só pode conter letras e espaços"),
  salario: z.string().min(1, "Insira um valor maior que R$1,00"),
  nascimento: z.date(),
  emprgado: z.boolean(),
  crm: z.string().min(10, "O CRM está incompleto").optional(),
  cpf: z.string().min(11, "O CPF está incompleto"),
  nivel: z.number().min(1, "Escolha um cargo para o novo funcionário"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  idEspecialdiade: z.string().min(1, "Selecione uma especialdidade").optional()
});

export type FuncionarioFormProps = z.infer<typeof FuncionarioFormSchema>
