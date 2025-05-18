import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  pokemonList: [],
  pokemonListStatus: "idle",
  pokemonListError: null,
  pokemonData: null,
  pokemonDataStatus: "idle",
  pokemonDataError: null,
};

export const fetchPokemon = createAsyncThunk("pokemon/fetch", async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();

  return data.results;
});

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/fetchByName",
  async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // List fetch
      .addCase(fetchPokemon.pending, (state) => {
        state.pokemonListStatus = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokemonListStatus = "succeeded";
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.pokemonListStatus = "failed";
        state.pokemonListError = action.error.message;
      })

      // Detail fetch
      .addCase(fetchPokemonByName.pending, (state) => {
        state.pokemonDataStatus = "loading";
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.pokemonDataStatus = "succeeded";
        state.pokemonData = action.payload;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.pokemonDataStatus = "failed";
        state.pokemonDataError = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
