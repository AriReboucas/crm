import { Request, Response } from "express";
import { prisma } from "../server";
import { createProfessorSchema } from "../types/professor.types";
import { ZodError } from "zod";

export const createProfessor = async (req: Request, res: Response) => {
    try {
        const body = createProfessorSchema.parse(req.body);

        let { email, password } = body;

        email = email.toLowerCase();

        const createdProfessor = await prisma.professor.create({
            data: {
                email,
                password,
            },
        })
        res.status(201).json(createdProfessor);
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                errors: error.errors.map((err) => ({
                    path: err.path,
                    message: err.message,
                })),
            });
        } else {
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }
}