import * as yup from "yup";

export const createCustomerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  cpf: yup.string().required("CPF is required"),
  cellphone: yup.string().required("Cellphone is required"),
  birthdate: yup.date().required("Birthdate is required"),
  isClubMember: yup.boolean(),
});
