import { z } from "zod";

export const createClassroomSchema = z.object({
    name: z.string(),
    description: z.string(),
    subject: z.string()
});

export const updateClassroomSchema = createClassroomSchema.partial();

export type CreateClassroomDTO = z.infer<typeof createClassroomSchema>;
export type UpdateClassroomDTO = z.infer<typeof updateClassroomSchema>;