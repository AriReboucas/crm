import express from "express";
import { updateClassroom, deleteClassroom } from "../controllers/classroom.controller";

const router = express.Router();

router.patch("/:classroomId", updateClassroom)
router.delete("/:classroomId", deleteClassroom)

export default router;