import { z } from "zod"

export const perfilFormSchema = z.object({
  name: z.string({
    required_error: "Nome é obrigatório",
    invalid_type_error: "Nome precisa ser um texto"
  }).min(3, { message: "O nome precisa ter no mínimo 3 letras" })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ~´]*$/, "O nome só pode conter letras e espaços"),

  cpf: z.string({
    required_error: "CPF é obrigatório.",
    invalid_type_error: "CPF incorreto."
  })
    .refine((cpf) => {
      const formattedCpf = cpf.replace(/\D/g, '');
      return !!Number(formattedCpf);
    }, 'CPF deve conter apenas números.')
    .refine((cpf) => {
      const formattedCpf = cpf.replace(/\D/g, '');
      return formattedCpf.length >= 11;
    }, 'CPF deve conter 11 caracteres.')
    .transform((cpf) => cpf.replace(/\D/g, '')),

  email: z.string({
    required_error: "Email obrigatório"
  }).email("Insira um email válido"),

  nascimento: z.date({
    required_error: "Data de nascimento obrigatória",
    invalid_type_error: "É necessário um dado no formato de data"
  })
})

export type PerfilFormProps = z.infer<typeof perfilFormSchema>;
