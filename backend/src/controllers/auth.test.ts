import request from "supertest";
import express from "express";
import { prisma } from "../server";
import { login } from "./auth.controller";

jest.mock("../server", () => ({
    prisma: {
        professor: {
            findFirst: jest.fn()
        }
    }
}));

const app = express();
app.use(express.json());
app.post("/login", login);

describe("Auth Controller", () => {
    it("should login a professor", async () => {
        const professor = {
            email: "teste@teste.com",
            password: "123"
        }

        const loggedProfessor = {
            id: 1,
            ...professor
        };

        (prisma.professor.findFirst as jest.Mock).mockResolvedValue(loggedProfessor);

        const response = await request(app).post("/login").send(professor);

        expect(response.body).toEqual(loggedProfessor);
        expect(response.status).toBe(200);
    })
})