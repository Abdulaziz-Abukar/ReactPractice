import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasktracker",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    clearTasks: () => {
      return [];
    },
  },
});

export const { addTask, toggleTask, removeTask, clearTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
