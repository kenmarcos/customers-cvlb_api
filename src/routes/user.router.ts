import express from "express";
import { validate } from "../middlewares/validation.middleware";
import { createUserSchema, loginUserSchema } from "../schemas/user.schemas";
import {
  createUserController,
  loginUserController,
} from "../controllers/user.controllers";

const router = express.Router();

export const userRouter = () => {
  router.post("/", validate(createUserSchema), createUserController);
  router.post("/login", validate(loginUserSchema), loginUserController);

  return router;
};
