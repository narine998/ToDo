import { Header } from "../components/Header/Header";
import TodoWrapper from "../components/ListOfItems/TodoListWrapper/TodoWrapper";
import TaskForm from "../components/TaskForm/TaskForm";
import StatusSection from "../components/StatusSection/StatusSection";
import { useSelector } from "react-redux";
import { selectTodos } from "../features/todos/todosSlice";

const Home: React.FC = () => {
  const completedTodos = useSelector(selectTodos("Completed"));
  const overdueTodos = useSelector(selectTodos("Overdue"));
  const removedTodos = useSelector(selectTodos("Removed"));

  return (
    <>
      <Header />
      <TaskForm />
      <TodoWrapper />
      <StatusSection todos={completedTodos} status="Done" />
      <StatusSection todos={overdueTodos} status="Overdue" />
      <StatusSection todos={removedTodos} status="Removed" />
    </>
  );
};

export default Home;
