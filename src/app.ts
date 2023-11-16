import "reflect-metadata";
import express, { Application } from "express";
import { routes } from "./routes";
import { handleError } from "./middlewares/error.midleware";
import cors from "cors";

const app: Application = express();

app.use(cors());

app.use(express.json());

routes(app);

app.use(handleError);

export default app;
