import { useEffect, useState } from "react";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import {
  overdueTask,
  selectTodos,
  Todo,
} from "../../../features/todos/todosSlice";
import TodoItem from "../TodoItem/TodoItem";
import EditDialog from "../EditDialog/EditDialog";
import DeleteDialog from "../DeleteDialog/DeleteDialog";

export default function TodoList() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editableTask, setEditableTask] = useState<Todo | null>(null);
  const [deleteTask, setDeleteTask] = useState<Todo | null>(null);
  const [updated, setUpdated] = useState<boolean>(false);

  const dispatch = useDispatch();

  const todos = useSelector(selectTodos("Pending"));

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (todos.length) {
        dispatch(overdueTask());
        setUpdated(!updated);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [updated, todos]);

  const toggleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  const toggleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const handleOpenEdit = (task: Todo) => {
    setOpenEditModal(true);
    setEditableTask(task);
  };

  const handleOpenDelete = (task: Todo) => {
    setOpenDeleteModal(true);
    setDeleteTask(task);
  };

  return (
    <section>
      <List>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleOpenEdit={handleOpenEdit}
              handleOpenDelete={handleOpenDelete}
            />
          );
        })}
      </List>
      {openEditModal && (
        <EditDialog handleClose={toggleEditModal} task={editableTask as Todo} />
      )}
      {openDeleteModal && (
        <DeleteDialog
          handleClose={toggleDeleteModal}
          task={deleteTask as Todo}
        />
      )}
    </section>
  );
}
