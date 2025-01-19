import { z } from "zod";

// Validação dos dados usando Zod
export const createProfessorSchema = z.object({
    email: z.string().email("E-mail inválido."),
    password: z.string(),
});

// Tipo inferido do Zod (usado para tipar o controlador)
export type createProfessorDTO = z.infer<typeof createProfessorSchema>;
