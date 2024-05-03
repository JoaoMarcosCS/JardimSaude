import {z} from "zod"

export const schemaTratamentoForm = z.object({
  nome:z.string().min(1, "O nome do tratamento é obrigatório"),
  queixas:z.string().min(1, "Escreva as queixas do paciente"),
  valor: z.number().min(1,"Insira um valor maior que R$1,00 para o tratamento"),
  termino:z.date().optional(),
  inicio:z.date(),
  id_medico: z.number(),
  id_paciente:z.number(),
})

export type TratamentoFormProps = z.infer<typeof schemaTratamentoForm>;

