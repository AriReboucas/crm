import express, { Request, Response } from "express";
import cors from "cors"; // Importa o middleware CORS
import { PrismaClient } from "@prisma/client";
import * as Routes from "./routes";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {
    // Middleware para JSON
    app.use(express.json());

    // Middleware para permitir CORS com origem aberta
    app.use(cors({ origin: "*" }));

    // Suas rotas
    app.use("/auth", Routes.Auth);
    app.use("/professor", Routes.Professor);
    app.use("/classroom", Routes.Classroom);
    app.use("/activity", Routes.Activity);

    // Tratamento para rotas não encontradas
    app.all("*", (req: Request, res: Response) => {
        res.status(404).json({ error: `Route ${req.originalUrl} not found` });
    });

    // Inicializa o servidor
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

main()
    .then(async () => {
        await prisma.$connect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
