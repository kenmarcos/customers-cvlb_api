import express from "express";
import {
  createCustomerController,
  listCustomersController,
} from "../controllers/customer.controller";

const router = express.Router();

export const customerRouter = () => {
  router.post("", createCustomerController);
  router.get("", listCustomersController);

  return router;
};
