import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { editTask, Todo } from "../../../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { validationSchema } from "../../../validation";
import TitleInput from "../../TaskForm/TitleInput";
import DescriptionInput from "../../TaskForm/DescriptionInput";
import DateInput from "../../TaskForm/DateInput";
import styles from "./EditDialog.module.css";

type PropsType = {
  handleClose: () => void;
  task: Todo;
};

export default function EditDialog({ handleClose, task }: PropsType) {
  const dispatch = useDispatch();
  const taskData: Todo = task;

  const taskForm = useFormik({
    initialValues: taskData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(editTask(values));
      handleClose();
    },
  });

  return (
    <React.Fragment>
      <Dialog
        open={true}
        onClose={handleClose}
        className={styles.form}
        PaperProps={{
          component: "form",
          onSubmit: taskForm.handleSubmit,
        }}
      >
        <DialogTitle className={styles.dialogTitle}>Edit Task</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogContent>
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
        </DialogContent>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button className={styles.btn} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.btn} type="submit">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
