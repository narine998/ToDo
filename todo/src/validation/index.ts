import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(50, "Title must be 50 characters or less")
    .required("Title is required"),
  description: Yup.string().max(
    200,
    "Description must be 200 characters or less"
  ),
  date: Yup.date().min(today, "Deadline cannot be in the past"),
});
