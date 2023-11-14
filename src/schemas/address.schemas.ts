import * as yup from "yup";

export const createAddressSchema = yup.object().shape({
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
