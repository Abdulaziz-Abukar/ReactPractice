import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: { content: "" },
  reducers: {
    updateNote: (state, action) => {
      state.content = action.payload;
    },
    clearNote: (state) => {
      state.content = "";
    },
  },
});
export const { updateNote, clearNote } = notesSlice.actions;
export default notesSlice.reducer;
