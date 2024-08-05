import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { v4 as uuid } from "uuid";

type Status = "Pending" | "Completed" | "Overdue" | "Removed";

export type Todo = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: Status;
};

type TodosState = Todo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, id: uuid() });
    },
    editTask: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = action.payload;
    },
    removeTask: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id) as Todo;
      todo.status = "Removed";
    },
    completeTask: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id) as Todo;
      todo.status = "Completed";
    },
    overdueTask: (state) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      state.forEach((todo) => {
        const deadline = new Date(todo.deadline);
        deadline.setHours(0, 0, 0, 0);

        todo.status =
          today > deadline && todo.status !== "Completed"
            ? "Overdue"
            : todo.status;
      });
    },
  },
});

export const selectTodos = (status: Status) => {
  return (state: RootState) =>
    state.todos.filter((todo) => todo.status === status);
};

export const { addTask, removeTask, editTask, overdueTask, completeTask } =
  todosSlice.actions;

export default todosSlice.reducer;
