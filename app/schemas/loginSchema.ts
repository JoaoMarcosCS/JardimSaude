import {z} from "zod"

export const loginSchema = z.object({
    email: z.string().email("Preencha com um email válido").min(1, "O campo email não pode estar vazio"),
    senha:z.string().min(6, 'A senha precisa conter no mínimo 6 caracteres!').max(15, 'A senha precisa ter no máximo 15 caracteres!')
})

export type LoginFormData = z.infer<typeof loginSchema>;