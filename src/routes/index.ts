import { Application, Response } from "express";
import { customerRouter } from "./customer.router";
import { addressRouter } from "./address.router";
import { userRouter } from "./user.router";

export const routes = (app: Application) => {
  app.use("/users", userRouter());
  app.use("/customers", customerRouter());
  app.use("/address", addressRouter());
};
