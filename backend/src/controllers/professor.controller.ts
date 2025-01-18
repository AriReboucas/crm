import { Request, Response } from "express";
import { prisma } from "../server";

export const createProfessor = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const createdProfessor = await prisma.professor.create({
            data: {
                email,
                password,
            },
        })
        res.status(201).json(createdProfessor);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}