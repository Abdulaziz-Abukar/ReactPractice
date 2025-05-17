import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    // Add Task
    addTask: (state, action) => {
      const task = state.find((task) => task.name === action.payload.name);

      if (!task) {
        state.push(action.payload);
      }
    },
    // Remove Task
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },

    // ToggleTask
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);

      if (task) {
        task.done = !task.done;
      }
    },

    // ClearAllTasks
    clearAllTasks: () => {
      return [];
    },
  },
});
export const { addTask, removeTask, toggleTask, clearAllTasks } =
  todosSlice.actions;
export default todosSlice.reducer;
