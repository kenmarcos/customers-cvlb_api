import * as yup from "yup";
import { createUserSchema, loginUserSchema } from "../schemas/user.schemas";

export type CreateUserBody = yup.InferType<typeof createUserSchema>;
export type LoginUserBody = yup.InferType<typeof loginUserSchema>;
