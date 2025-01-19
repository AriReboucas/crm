import request from "supertest";
import express from "express";
import { prisma } from "../server";
import { getAllClassrooms, getClassroom, createClassroom, updateClassroom, deleteClassroom } from "./classroom.controller";

jest.mock("../server", () => ({
    prisma: {
        classroom: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        }
    }
}));

const app = express();
app.use(express.json());
app.get("/classroom", getAllClassrooms);
app.get("/classroom/:classroomId", getClassroom);
app.post("/classroom", createClassroom);
app.patch("/classroom/:classroomId", updateClassroom);
app.delete("/classroom/:classroomId", deleteClassroom);

describe("Classroom Controller", () => {
    it("should get all classrooms", async () => {
        const allClassrooms = [
            {
                "id": 2,
                "name": "Name Sala 2",
                "description": "Description Sala 2",
                "subject": "Subject Sala 2",
                "professor_id": 1
            }
        ];

        (prisma.classroom.findMany as jest.Mock).mockResolvedValue(allClassrooms);

        const response = await request(app).get("/classroom");

        expect(response.body).toEqual(allClassrooms);
        expect(response.status).toBe(200);
    });

    it("should get a classroom", async () => {
        const classroomId = 1;

        const classroom = {
            "id": classroomId,
            "name": "Name Sala 2",
            "description": "Description Sala 2",
            "subject": "Subject Sala 2",
            "professor_id": 1
        };

        (prisma.classroom.findUnique as jest.Mock).mockResolvedValue(classroom);

        const response = await request(app).get(`/classroom/${classroomId}`);

        expect(response.body).toEqual(classroom);
        expect(response.status).toBe(200);
    });

    it("should create a classroom", async () => {
        const newClassroom = {
            "name": "Games",
            "description": "Virga concido avaritia depraedor cubitum nemo. Sapiente tolero fugiat mollitia usitas balbus aeger curia. Tristis auctus cavus adulescens confero minus antea bene considero solitudo.",
            "subject": "Recycled Cotton Computer",
            "professor_id": 10
        }

        const createdClassroom = {
            "id": 1,
            ...newClassroom
        };

        (prisma.classroom.create as jest.Mock).mockResolvedValue(createdClassroom);

        const response = await request(app).post("/classroom").send(newClassroom);

        expect(response.body).toEqual(createdClassroom);
        expect(response.status).toBe(201);
    });

    it("should update a classroom", async () => {
        const toUpdateClassroom = {
            "name": "Games",
            "description": "Cuius adiuvo labore constans circumvenio tantum volva vacuus ustulo vitium. Curriculum alienus apto tabgo. Aggredior adimpleo acerbitas.",
            "subject": "Sleek Rubber Bike",
        }

        const classroomId = 1;

        const updatedClassroom = {
            "id": classroomId,
            ...toUpdateClassroom
        };

        (prisma.classroom.update as jest.Mock).mockResolvedValue(updatedClassroom);

        const response = await request(app).patch(`/classroom/${classroomId}`).send(toUpdateClassroom);

        expect(response.body).toEqual(updatedClassroom);
        expect(response.status).toBe(200);

    });

    it("should delete a classroom", async () => {
        const classroomId = 1;

        const deletedClassroom = {
            "id": classroomId
        };

        (prisma.classroom.delete as jest.Mock).mockResolvedValue(deletedClassroom);

        const response = await request(app).delete(`/classroom/${classroomId}`);

        expect(response.body).toEqual(deletedClassroom);
        expect(response.status).toBe(200);

    });

})