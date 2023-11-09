import "reflect-metadata";
import express, { Application } from "express";
import { routes } from "./routes";

const app: Application = express();

app.use(express.json());

routes(app);

export default app;
