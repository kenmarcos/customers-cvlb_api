import * as yup from "yup";

export const createCustomerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  cpf: yup.string().required("CPF is required"),
  cellphone: yup.string().required("Cellphone is required"),
  birthdate: yup.date().required("Birthdate is required"),
  isClubMember: yup.boolean(),
  zipCode: yup.string().required("ZipCode is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  district: yup.string().required("District is required"),
  street: yup.string().required("Street is required"),
  number: yup.number().required("Number is required"),
  complement: yup.string(),
  title: yup.string(),
  customerId: yup.string(),
});

export const updateCustomerSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  cpf: yup.string(),
  cellphone: yup.string(),
  birthdate: yup.date(),
  isClubMember: yup.boolean(),
});
