import { z } from "zod";

export const createActivitySchema = z.object({
    title: z.string(),
    description: z.string(),
    subject: z.string()
});

export const updateActivitySchema = createActivitySchema.partial();

export type CreateActivityDTO = z.infer<typeof createActivitySchema>;
export type UpdateActivityDTO = z.infer<typeof updateActivitySchema>;