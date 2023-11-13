import * as yup from "yup";
import { createCustomerSchema } from "../schemas/customer.schemas";

export type CreateCustomerBody = yup.InferType<typeof createCustomerSchema>;
export type UpdateCustomerBody = Partial<CreateCustomerBody>;
