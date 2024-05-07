import {z} from "zod"

export const schemaTratamentoForm = z.object({
  nome:z.string().min(1, "O nome do tratamento é obrigatório"),
  queixas:z.string().default("Nenhuma queixa registrada").optional(),
  valor: z.string().min(1,"Insira um valor maior que R$1,00 para o tratamento"),
  termino:z.date().optional(),
  inicio:z.date(),
  id_medico: z.string().min(1,"Escolha um médico para realizar esse tratamento"),
  id_paciente:z.string(),
})

export type TratamentoFormProps = z.infer<typeof schemaTratamentoForm>;

