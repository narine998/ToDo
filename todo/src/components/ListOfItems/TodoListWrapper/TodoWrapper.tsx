import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoWrapper.module.css";

export default function TodoWrapper() {
  return (
    <section className={styles.container}>
      <Accordion sx={{ borderBottomColor: "white" }}>
        <AccordionSummary
          className={styles.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ width: "30%" }}
        >
          <h2 className={styles.heading}>My Todo List</h2>
        </AccordionSummary>
        <AccordionDetails>
          <TodoList />
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
