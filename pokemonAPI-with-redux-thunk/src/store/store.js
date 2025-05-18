import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import teamReducer from "../features/team/teamSlice";
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    team: teamReducer,
  },
});
