import express from "express";
import {
  createCustomerController,
  listCustomersController,
} from "../controllers/customer.controller";
import { validate } from "../middlewares/validation.middleware";
import { createCustomerSchema } from "../schemas/customer.schemas";

const router = express.Router();

export const customerRouter = () => {
  router.post("", validate(createCustomerSchema), createCustomerController);
  router.get("", listCustomersController);

  return router;
};
