import express from "express";
import { createProfessor } from "../controllers/professor.controller";
import { getAllClassrooms, createClassroom } from "../controllers/classroom.controller";

const router = express.Router();

router.post("/", createProfessor)
router.get("/:professorId/classrooms", getAllClassrooms)
router.post("/:professorId/classrooms", createClassroom)

export default router;