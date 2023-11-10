import * as yup from "yup";

export const createCustomerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  cpf: yup.string().required("CPF is required"),
  cellphone: yup.string().required("Cellphone is required"),
  birthdate: yup.date().required("Birthdate is required"),
  isClubMember: yup.boolean(),
});

export const updateCustomerSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  cpf: yup.string(),
  cellphone: yup.string(),
  birthdate: yup.date(),
  isClubMember: yup.boolean(),
});
