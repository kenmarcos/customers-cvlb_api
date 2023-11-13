import { Application, Response } from "express";
import { customerRouter } from "./customer.router";
import { addressRouter } from "./address.router";

export const routes = (app: Application) => {
  app.use("/customers", customerRouter());
  app.use("/address", addressRouter());
};
