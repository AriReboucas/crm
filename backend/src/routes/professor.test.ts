import request from 'supertest';
import express from 'express';

import { createProfessor } from '../controllers/professor.controller';
import { getAllClassrooms, createClassroom } from '../controllers/classroom.controller';


const classroomId = "1";

const newClassroom = {
    "name": "Name Sala 2",
    "description": "Description Sala 2",
    "subject": "Subject Sala 2",
    "professor_id": 1
}

const createdClassroom = {
    "id": classroomId,
    ...newClassroom
}

const professorId = "1";

const newProfessor = {
    "email": "teste@teste.com",
    "password": "teste"
}

const createdProfessor = {
    "id": professorId,
    ...newProfessor
}

jest.mock('../controllers/professor.controller', () => ({
    createProfessor: jest.fn((req, res) =>
        res.status(201).json(createdProfessor)),
}));

jest.mock('../controllers/classroom.controller', () => ({
    getAllClassrooms: jest.fn((req, res) =>
        res.status(200).json([createdClassroom])),
    createClassroom: jest.fn((req, res) =>
        res.status(201).json(createdClassroom)),
}));

const app = express();
app.use(express.json());

app.post("/professor", createProfessor);
app.get("/professor/:professorId/classrooms", getAllClassrooms);
app.post("/professor/:professorId/classrooms", createClassroom);

describe("Professor Route", () => {
    it("should create a professor", async () => {
        const response = await request(app)
            .post(`/professor`)
            .send(newProfessor);

        expect(response.body).toEqual(createdProfessor);
        expect(response.status).toBe(201);
    });

    it("should get all classrooms of a professor", async () => {
        const response = await request(app)
            .get(`/professor/${professorId}/classrooms`);

        expect(response.body).toEqual([createdClassroom]);
        expect(response.status).toBe(200);
    });

    it("should create a classroom", async () => {
        const response = await request(app)
            .post(`/professor/${professorId}/classrooms`)
            .send(newClassroom);

        expect(response.body).toEqual(createdClassroom);
        expect(response.status).toBe(201);
    });
});