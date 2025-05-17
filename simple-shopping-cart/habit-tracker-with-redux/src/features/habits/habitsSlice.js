import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    // Add Habit (state, action)
    addHabit: (state, action) => {
      const habit = state.find((habit) => habit.name === action.payload.name);

      habit ? state : state.push(action.payload);
    },
    // Remove Habit (state, action)
    removeHabit: (state, action) => {
      return state.filter((habit) => habit.id !== action.payload.id);
    },

    // IncrementStreak (state, action)
    incrementStreak: (state, action) => {
      const habit = state.find((habit) => habit.id === action.payload.id);

      if (habit) {
        habit.streak += 1;
      }
    },
    // Reset Streak (state, action)
    resetStreak: (state, action) => {
      const habit = state.find((habit) => habit.id === action.payload.id);

      if (habit) {
        habit.streak = 0;
      }
    },

    // Clear Habits (state)
    clearHabits: () => {
      return [];
    },
  },
});

export const {
  addHabit,
  removeHabit,
  incrementStreak,
  resetStreak,
  clearHabits,
} = habitSlice.actions;
export default habitSlice.reducer;
