import request from "supertest";
import express from "express";
import { prisma } from "../server";
import { createProfessor } from "./professor.controller";

jest.mock("../server", () => ({
    prisma: {
        professor: {
            create: jest.fn()
        }
    }
}));

const app = express();
app.use(express.json());
app.post("/professor", createProfessor);

describe("Professor Controller", () => {
    it("should create a professor", async () => {
        const professor = {
            email: "teste@teste.com",
            password: "123"
        }

        const createdProfessor = {
            id: 1,
            ...professor
        };

        (prisma.professor.create as jest.Mock).mockResolvedValue(createdProfessor);

        const response = await request(app).post("/professor").send(professor);

        expect(response.body).toEqual(createdProfessor);
        expect(response.status).toBe(201);
    });
});