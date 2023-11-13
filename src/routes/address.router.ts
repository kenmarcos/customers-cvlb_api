import express from "express";
import { validate } from "../middlewares/validation.middleware";
import { createAddressController } from "../controllers/address.controllers";
import { createAddressSchema } from "../schemas/address.schemas";

const router = express.Router();

export const addressRouter = () => {
  router.post("/", validate(createAddressSchema), createAddressController);

  return router;
};
