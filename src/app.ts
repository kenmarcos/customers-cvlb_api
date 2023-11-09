import express, { Application } from "express";
import "reflect-metadata";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

export default app;
