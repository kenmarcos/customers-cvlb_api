import express from "express";
import { validate } from "../middlewares/validation.middleware";
import {
  createAddressController,
  deleteAddressController,
} from "../controllers/address.controllers";
import { createAddressSchema } from "../schemas/address.schemas";
import { authenticateUser } from "../middlewares/authenticateUser";

const router = express.Router();

export const addressRouter = () => {
  router.post(
    "/",
    authenticateUser,
    validate(createAddressSchema),
    createAddressController
  );
  router.delete("/:addressId", authenticateUser, deleteAddressController);

  return router;
};
