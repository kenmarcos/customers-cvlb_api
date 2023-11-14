import * as yup from "yup";
import { createCustomerSchema } from "../schemas/customer.schemas";

export type CreateCustomerBody = yup.InferType<typeof createCustomerSchema>;
export type UpdateCustomerBody = Partial<
  Pick<
    CreateCustomerBody,
    "name" | "email" | "cpf" | "cellphone" | "birthdate" | "isClubMember"
  >
>;
