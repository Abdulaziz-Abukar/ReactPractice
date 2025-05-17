import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "mood",
  initialState: { currentMood: "Neutral" },
  reducers: {
    setMood: (state, action) => {
      state.currentMood = action.payload;
    },
    resetMood: (state) => {
      state.currentMood = "Neutral";
    },
  },
});

export const { setMood, resetMood } = moodSlice.actions;
export default moodSlice.reducer;
