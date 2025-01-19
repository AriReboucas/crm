import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("E-mail inválido."),
    password: z.string(),
});

export type LoginDTO = z.infer<typeof loginSchema>;
