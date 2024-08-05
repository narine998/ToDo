import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../ListOfItems/TodoItem/todoItem.module.css";
import s from "../ListOfItems/TodoListWrapper/TodoWrapper.module.css";
import { ListItem, ListItemText } from "@mui/material";
import { Todo } from "../../features/todos/todosSlice";

type PropsType = {
  todos: Todo[];
  status: string;
};

export default function StatusSection({ todos, status }: PropsType) {
  return (
    <section className={s.container}>
      <Accordion sx={{ borderBottomColor: "white" }}>
        <AccordionSummary
          className={s.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ width: "30%" }}
        >
          <h2 className={s.heading}>{status}</h2>
        </AccordionSummary>
        <AccordionDetails>
          {todos.map((todo) => {
            return (
              <ListItem key={todo.id}>
                <ListItemText
                  primary={
                    <div className={styles.box}>
                      <h3 className={styles.title}>{todo.title}</h3>
                      {todo.description && (
                        <p className={styles.description}>{todo.description}</p>
                      )}
                      <span className={s.deadline}>
                        <span>Deadline:</span>
                        {todo.deadline || "Not Specified"}
                      </span>
                      <br></br>
                      <span>
                        <span>Status:</span>
                        {todo.status}
                      </span>
                    </div>
                  }
                />
              </ListItem>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
