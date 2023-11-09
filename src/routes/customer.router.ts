import express from "express";
import { listCustomersController } from "../controllers/customer.controller";

const router = express.Router();

export const customerRouter = () => {
  router.get("", listCustomersController);

  return router;
};
