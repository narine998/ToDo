import { ListItem, ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { completeTask, Todo } from "../../../features/todos/todosSlice";
import styles from "./todoItem.module.css";
import { useDispatch } from "react-redux";

type PropsType = {
  todo: Todo;
  handleOpenEdit: (todo: Todo) => void;
  handleOpenDelete: (task: Todo) => void;
};

const TodoItem = ({ todo, handleOpenEdit, handleOpenDelete }: PropsType) => {
  const dispatch = useDispatch();
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      className={styles.listItem}
      secondaryAction={
        <>
          <IconButton
            onClick={() => handleOpenEdit(todo)}
            edge="end"
            aria-label="comments"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleOpenDelete(todo)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            onChange={() => dispatch(completeTask({ id: todo.id }))}
            edge="start"
            checked={false}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={
            <div className={styles.box}>
              <h3 className={styles.title}>{todo.title}</h3>
              {todo.description && (
                <p className={styles.description}>{todo.description}</p>
              )}
              <span className={styles.deadline}>
                <span>Deadline:</span> {todo.deadline || "Not Specified"}
              </span>
              <br></br>
              <span
                className={
                  todo.status === "Completed" ? styles.green : styles.black
                }
              >
                <span className={styles.status}>Status:</span> {todo.status}
              </span>
            </div>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
