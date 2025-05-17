import { createSlice } from "@reduxjs/toolkit";

const hydrationSlice = createSlice({
  name: "hydration",
  initialState: { cups: 0 },
  reducers: {
    incrementCup: (state) => {
      state.cups += 1;
    },
    decrementCup: (state) => {
      if (state.cups > 0) {
        state.cups -= 1;
      }
    },
    resetCups: (state) => {
      state.cups = 0;
    },
  },
});
export const { incrementCup, decrementCup, resetCups } = hydrationSlice.actions;
export default hydrationSlice.reducer;
