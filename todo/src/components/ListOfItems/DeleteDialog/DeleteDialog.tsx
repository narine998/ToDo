import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { removeTask, Todo } from "../../../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import styles from "./DeleteDialog.module.css";

type PropsType = {
  handleClose: () => void;
  task: Todo;
};

export default function DeleteDialog({ handleClose, task }: PropsType) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask({ id: task.id }));
    handleClose();
  };
  return (
    <React.Fragment>
      <Dialog
        className={styles.dialog}
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={styles.heading}>
          {"Are you sure you want to delete this task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={styles.title}
          >
            {task.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={styles.btn} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.btn} onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
