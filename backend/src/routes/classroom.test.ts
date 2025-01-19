import request from 'supertest';
import express from 'express';
import { updateClassroom, deleteClassroom, getClassroom } from '../controllers/classroom.controller';
import { createActivity } from '../controllers/activity.controller';

const classroomId = "1";

const classroom = {
    "id": classroomId,
    "name": "Name Sala 2",
    "description": "Description Sala 2",
    "subject": "Subject Sala 2",
    "professor_id": 1
}

const updatedClassroom = { name: 'New Name', description: 'Updated Classroom Description' }

const newActivity = {
    "title": "Title Activity",
    "description": "Description Activity",
    "subject": "Subject Activity"
}

const createdActivity = {
    "id": 1,
    ...newActivity
}

jest.mock('../controllers/classroom.controller', () => ({
    updateClassroom: jest.fn((req, res) =>
        res.status(200).json(classroom)),
    deleteClassroom: jest.fn((req, res) =>
        res.status(200).json(classroom)),
    getClassroom: jest.fn((req, res) =>
        res.status(200).json(classroom))
}));

jest.mock('../controllers/activity.controller', () => ({
    createActivity: jest.fn((req, res) =>
        res.status(200).json(createdActivity))
}));

const app = express();
app.use(express.json());

app.patch("/classroom/:classroomId", updateClassroom);
app.delete("/classroom/:classroomId", deleteClassroom);
app.get("/classroom/:classroomId", getClassroom);

app.post("/classroom/:classroomId/activity", createActivity);

describe("Classroom Route", () => {
    it("should update a classroom", async () => {
        const response = await request(app)
            .patch(`/classroom/${classroomId}`)
            .send(updatedClassroom);

        expect(response.body).toEqual(classroom);
        expect(response.status).toBe(200);
    });

    it("should delete a classroom", async () => {
        const response = await request(app)
            .delete(`/classroom/${classroomId}`);

        expect(response.body).toEqual(classroom);
        expect(response.status).toBe(200);
    });

    it("should get a classroom", async () => {
        const response = await request(app)
            .get(`/classroom/${classroomId}`);

        expect(response.body).toEqual(classroom);
        expect(response.status).toBe(200);
    });

    it("should create an activity", async () => {
        const response = await request(app)
            .post(`/classroom/${classroomId}/activity`)
            .send(newActivity);

        expect(response.body).toEqual(createdActivity);
        expect(response.status).toBe(200);
    })
});
