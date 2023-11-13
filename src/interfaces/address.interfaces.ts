import * as yup from "yup";
import { createAddressSchema } from "../schemas/address.schemas";

export type CreateAddressBody = yup.InferType<typeof createAddressSchema>;
