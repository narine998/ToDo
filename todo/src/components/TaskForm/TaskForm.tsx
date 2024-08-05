import DateInput from "./DateInput";
import DescriptionInput from "./DescriptionInput";
import TitleInput from "./TitleInput";
import { useDispatch } from "react-redux";
import { Todo, addTask } from "../../features/todos/todosSlice";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../../validation";
import styles from "./TaskForm.module.css";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();

  const taskData: Todo = {
    id: "",
    title: "",
    description: "",
    deadline: "",
    status: "Pending",
  };

  const taskForm = useFormik({
    initialValues: taskData,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addTask(values));
      resetForm();
    },
  });
  return (
    <section>
      <form className={styles.form} onSubmit={taskForm.handleSubmit}>
        <div className={styles.inputContainer}>
          <TitleInput
            value={taskForm.values.title}
            onChange={taskForm.handleChange}
            onBlur={taskForm.handleBlur}
            name="title"
          />
          <div className={styles.errors}>
            {taskForm.touched.title && taskForm.errors.title}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <DescriptionInput
            value={taskForm.values.description}
            onChange={taskForm.handleChange}
            onBlur={taskForm.handleBlur}
            name="description"
          />
          <div className={styles.errors}>
            {taskForm.touched.description && taskForm.errors.description}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <DateInput
            value={taskForm.values.deadline}
            onChange={taskForm.handleChange}
            name="deadline"
          />
          <div className={styles.errors}>
            {taskForm.touched.deadline && taskForm.errors.deadline}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit">Create Task</Button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;
