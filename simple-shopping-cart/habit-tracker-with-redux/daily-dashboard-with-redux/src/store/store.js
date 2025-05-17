import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todosSlice";
import moodReducer from "../features/mood/moodSlice";
import hydrationReducer from "../features/hydration/hydrationSlice";
import notesReducer from "../features/notes/notesSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    mood: moodReducer,
    hydration: hydrationReducer,
    notes: notesReducer,
  },
});
