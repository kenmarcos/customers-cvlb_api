import "reflect-metadata";
import express, { Application } from "express";
import { routes } from "./routes";
import { handleError } from "./middlewares/error.midleware";

const app: Application = express();

app.use(express.json());

routes(app);

app.use(handleError);

export default app;
