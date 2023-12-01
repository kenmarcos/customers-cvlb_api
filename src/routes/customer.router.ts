import express from "express";
import {
  createCustomerController,
  deleteCustomerController,
  listCustomerByIdController,
  listCustomersController,
  updateCustomerController,
} from "../controllers/customer.controllers";
import { validate } from "../middlewares/validation.middleware";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../schemas/customer.schemas";
import { authenticateUser } from "../middlewares/authenticateUser";

const router = express.Router();

export const customerRouter = () => {
  router.post(
    "/",
    authenticateUser,
    validate(createCustomerSchema),
    createCustomerController
  );
  router.get("/", authenticateUser, listCustomersController);
  router.get("/:customerId", authenticateUser, listCustomerByIdController);
  router.patch(
    "/:customerId",
    authenticateUser,
    validate(updateCustomerSchema),
    updateCustomerController
  );
  router.delete("/:customerId", deleteCustomerController);

  return router;
};
