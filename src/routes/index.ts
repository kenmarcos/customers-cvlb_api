import { Application, Response } from "express";
import { customerRouter } from "./customer.router";

export const routes = (app: Application) => {
  app.use("/customers", customerRouter());
};
