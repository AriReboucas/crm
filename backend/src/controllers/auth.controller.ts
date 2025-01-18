import { Request, Response } from "express";
import { prisma } from "../server";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const loggedProfessor = await prisma.professor.findFirst({
            where: {
                email,
                password
            }
        })

        if (!loggedProfessor) {
            res.status(401).json({ error: "Invalid email or password" });
        } else {
            res.status(200).json(loggedProfessor);
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
}