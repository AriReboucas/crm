import express from "express";
import { updateClassroom, deleteClassroom, getClassroom } from "../controllers/classroom.controller";
import { createActivity } from "../controllers/activity.controller";

const router = express.Router();

// Classroom
router.patch("/:classroomId", updateClassroom)
router.delete("/:classroomId", deleteClassroom)
router.get("/:classroomId", getClassroom)

// Activity
router.post("/:classroomId/activity", createActivity)

export default router;