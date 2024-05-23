import * as Yup from "yup";

export const validateSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  newPrice: Yup.number()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imageUrl: Yup.string().url().required("Required"),
});
