import { Request, Response } from "express";
import { prisma } from "../server";

export const getAllClassrooms = async (req: Request, res: Response) => {
    try {
        const { professorId } = req.params;

        const classrooms = await prisma.classroom.findMany({
            where: {
                professor_id: Number(professorId)
            }
        });

        res.status(200).json(classrooms);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const createClassroom = async (req: Request, res: Response) => {
    try {
        const { professorId } = req.params;
        const { name, description, subject } = req.body;

        const createdClassroom = await prisma.classroom.create({
            data: {
                name,
                description,
                subject,
                professor_id: Number(professorId)
            }
        })

        res.status(201).json(createdClassroom);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const updateClassroom = async (req: Request, res: Response) => {
    try {
        const { classroomId } = req.params;
        const { name, description, subject } = req.body;

        const updatedClassroom = await prisma.classroom.update({
            where: {
                id: Number(classroomId)
            },
            data: {
                name,
                description,
                subject
            }
        })

        res.status(200).json(updatedClassroom);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const deleteClassroom = async (req: Request, res: Response) => {
    try {
        const { classroomId } = req.params;

        const deletedClassroom = await prisma.classroom.delete({
            where: {
                id: Number(classroomId)
            }
        })

        res.status(200).json(deletedClassroom);
    } catch (error) {
        res.status(500).json({ error: error })
    }
} 