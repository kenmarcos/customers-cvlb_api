import express from "express";
import { validate } from "../middlewares/validation.middleware";
import {
  createAddressController,
  deleteAddressController,
} from "../controllers/address.controllers";
import { createAddressSchema } from "../schemas/address.schemas";

const router = express.Router();

export const addressRouter = () => {
  router.post("/", validate(createAddressSchema), createAddressController);
  router.delete("/:addressId", deleteAddressController);

  return router;
};
