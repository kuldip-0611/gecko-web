import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone must be a number")
    .required("Phone is required"),
  budget: Yup.string().required("Budget is required"),
  description: Yup.string().required("Description is required"),
});
