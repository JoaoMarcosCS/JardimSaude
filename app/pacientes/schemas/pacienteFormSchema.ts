import {z} from "zod"

export const pacienteFormSchema = z.object({
  nome: z.string({
    required_error:"Nome é obrigatório",
    invalid_type_error:"Nome precisa ser um texto"
  }).min(3,{message:"O nome precisa ter no mínimo 3 letras"})
  .regex(/^[a-zA-Z\s]+$/, "O nome só pode conter letras e espaços"),
  cpf: z.string({
    required_error:"CPF é obrigatório",
    invalid_type_error:"CPF incorreto"
  }),
  altura:z.string({
    required_error: "Altura obrigatória",
  }).regex(/^\d+(\.\d+)?$/,"A altura só pode conter números"
  ),
  uf: z.string({
    required_error: "Unidade Federal é obrigatório"
  }).regex(/^[a-zA-Z]+$/, "A Unidade Federal só pode conter letras"),
cidade: z.string({
  required_error: "Cidade é obrigatória"
}).min(3, "A cidade deve ter mais de três letras")
.regex(/^[a-zA-Z\s]+$/, "A cidade só pode conter letras e espaços"),
})
