import { Request, Response } from "express";
import { prisma } from "../server";
import { loginSchema } from "../types/auth.types";
import { ZodError } from "zod";

export const login = async (req: Request, res: Response) => {
    try {
        const body = loginSchema.parse(req.body);

        let { email, password } = body;

        email = email.toLowerCase();

        const loggedProfessor = await prisma.professor.findFirst({
            where: {
                email,
                password,
            },
        });

        if (!loggedProfessor) {
            res.status(401).json({ error: "E-mail ou senha inválidos." });
        } else {
            res.status(200).json(loggedProfessor);
        }
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
};
