import express from "express";
import {
  createCustomerController,
  deleteCustomerController,
  listCustomerByIdController,
  listCustomersController,
  updateCustomerController,
} from "../controllers/customer.controller";
import { validate } from "../middlewares/validation.middleware";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../schemas/customer.schemas";

const router = express.Router();

export const customerRouter = () => {
  router.post("/", validate(createCustomerSchema), createCustomerController);
  router.get("/", listCustomersController);
  router.get("/:customerId", listCustomerByIdController);
  router.patch(
    "/:customerId",
    validate(updateCustomerSchema),
    updateCustomerController
  );
  router.delete("/:customerId", deleteCustomerController);

  return router;
};
