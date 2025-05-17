import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../features/habits/habitsSlice";

export const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
