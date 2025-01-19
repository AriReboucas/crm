import { Request, Response } from "express";
import { prisma } from "../server";
import { createActivitySchema, updateActivitySchema } from "../types/activity.types";
import { ZodError } from "zod";

export const createActivity = async (req: Request, res: Response) => {
    try {
        const { classroomId } = req.params;

        const body = createActivitySchema.parse(req.body);
        const { title, description, subject } = body;

        const createdActivity = await prisma.activity.create({
            data: {
                title,
                description,
                subject,
                classroom_id: Number(classroomId)
            }
        })

        res.status(201).json(createdActivity);
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

export const updateActivity = async (req: Request, res: Response) => {
    try {
        const { activityId } = req.params;

        const body = updateActivitySchema.parse(req.body);
        const { title, description, subject } = body;

        const updatedActivity = await prisma.activity.update({
            where: {
                id: Number(activityId)
            },
            data: {
                title,
                description,
                subject
            }
        })

        res.status(200).json(updatedActivity);
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

export const deleteActivity = async (req: Request, res: Response) => {
    try {
        const { activityId } = req.params;

        const deletedActivity = await prisma.activity.delete({
            where: {
                id: Number(activityId)
            }
        })
        res.status(200).json(deletedActivity);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getActivity = async (req: Request, res: Response) => {
    try {
        const { activityId } = req.params;

        const activity = await prisma.activity.findUnique({
            where: {
                id: Number(activityId)
            }
        });

        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}