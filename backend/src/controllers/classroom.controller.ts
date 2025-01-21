import { Request, Response } from "express";
import { prisma } from "../server";
import { createClassroomSchema, updateClassroomSchema } from "../types/classroom.types";
import { ZodError } from "zod";

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

export const getClassroom = async (req: Request, res: Response) => {
    try {
        const { classroomId } = req.params;

        const classroom = await prisma.classroom.findUnique({
            where: {
                id: Number(classroomId)
            },
            include: {
                activities: true
            }
        });

        res.status(200).json(classroom);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const createClassroom = async (req: Request, res: Response) => {
    try {
        const { professorId } = req.params;

        const body = createClassroomSchema.parse(req.body);
        const { name, description, subject } = body;

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

export const updateClassroom = async (req: Request, res: Response) => {
    try {
        const { classroomId } = req.params;

        const body = updateClassroomSchema.parse(req.body);
        const { name, description, subject } = body;

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