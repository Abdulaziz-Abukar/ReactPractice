import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  team: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk to simulate POST request
export const addToTeam = createAsyncThunk("team/addToTeam", async (pokemon) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });

  const data = await response.json();
  return {
    ...pokemon,
    id: data.id, // fake ID returned from jsonplaceholder
  };
});

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {}, // add remove/reset team here later
  extraReducers: (builder) => {
    builder
      .addCase(addToTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.team.push(action.payload); // Add new Pokémon to team
      })
      .addCase(addToTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default teamSlice.reducer;
