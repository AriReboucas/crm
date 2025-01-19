import request from 'supertest';
import express from 'express';
import { login } from '../controllers/auth.controller';

const auth = {
    email: "teste@teste.com",
    password: "123"
}

jest.mock('../controllers/auth.controller', () => ({
    login: jest.fn((req, res) =>
        res.status(200).json(auth))
}));

const app = express();
app.use(express.json());
app.post("/auth/login", login);

describe("Auth Controller", () => {
    it("should login a professor", async () => {
        const response = await request(app).post("/auth/login").send(auth);

        expect(response.body).toEqual(auth);
        expect(response.status).toBe(200);
    })

});