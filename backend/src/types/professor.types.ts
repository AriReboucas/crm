import { z } from "zod";

export const createProfessorSchema = z.object({
    email: z.string().email("E-mail inválido."),
    password: z.string(),
});

export type createProfessorDTO = z.infer<typeof createProfessorSchema>;
