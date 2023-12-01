import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  cpf: yup.string().required("CPF is required"),
  cellphone: yup.string().required("Cellphone is required"),
  password: yup.string().required("Password is required"),
});

export const loginUserSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});
