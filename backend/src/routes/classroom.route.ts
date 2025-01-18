import express from "express";
import { updateClassroom, deleteClassroom, getClassroom } from "../controllers/classroom.controller";

const router = express.Router();

router.patch("/:classroomId", updateClassroom)
router.delete("/:classroomId", deleteClassroom)
router.get("/:classroomId", getClassroom)

export default router;