import { z } from "zod"

export const pacienteFormSchema = z.object({
  nome: z.string({
    required_error: "Nome é obrigatório",
    invalid_type_error: "Nome precisa ser um texto"
  }).min(3, { message: "O nome precisa ter no mínimo 3 letras" })
    .regex(/^[a-zA-Z\s]+$/, "O nome só pode conter letras e espaços"),

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

  altura: z.string({
    required_error: "Altura obrigatória",
  })
    .max(4, "A altura deve conter no máximo 3 casas decimais")
    .regex(/^\d+(\.\d+)?$/, "A altura só pode conter números"
    ),

  uf: z.string({
    required_error: "Unidade Federal é obrigatório"
  }).max(2, "A sigla da Unidade Federal só pode ter duas letras")
  .min(2, "A sigla da Unidade Federal deve ter no minímo duas letras")
  .regex(/^[a-zA-Z]+$/, "A Unidade Federal só pode conter letras")
  .transform((uf) => uf.toUpperCase()),

  cidade: z.string({
    required_error: "Cidade é obrigatória"
  }).min(3, "A cidade deve ter mais de três letras")
    .regex(/^[a-zA-Z\s]+$/, "A cidade só pode conter letras e espaços"),

  rua: z.string({
    required_error: "Endereço da rua é obrigatório"
  }).min(3, "A rua deve ter mais de três letras"),

  sexo: z.string({
    required_error: "Sexo do paciente obrigatório"
  }),

  telefone: z.string({
    required_error: "Telefone obirgatório"
  }),

  email: z.string({
    required_error: "Email obrigatório"
  }).email("Insira um email válido"),

  nascimento: z.date({
    required_error: "Data de nascimento obrigatória"
  })
})

export type PacienteFormProps = z.infer<typeof pacienteFormSchema>;
