import React, { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon, fetchPokemonByName } from "./pokemonSlice";
import { addToTeam } from "../team/teamSlice";

export function Pokemon() {
  const dispatch = useDispatch();
  const {
    pokemonList,
    pokemonData,
    pokemonListStatus,
    pokemonListError,
    pokemonDataStatus,
    pokemonDataError,
  } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (pokemonListStatus === "idle") {
      dispatch(fetchPokemon());
    }
  }, [dispatch, pokemonListStatus]);

  const [searchPokemon, setSearchPokemon] = useState("");

  function searchPokemonHandler(e) {
    e.preventDefault();
    dispatch(fetchPokemonByName(searchPokemon));
    setSearchPokemon("");
  }

  return (
    <section>
      <h2>Pokemon List</h2>

      <div>
        {pokemonListStatus === "loading" && <p>Loading Pokemon...</p>}
        {pokemonListStatus === "failed" && <p>error: {pokemonListError}</p>}
        {pokemonListStatus === "succeeded" && (
          <ul>
            {pokemonList.map((poke, i) => (
              <li key={i}>{poke.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <form onSubmit={searchPokemonHandler}>
          <label htmlFor="searchPokemon">Search for Pokemon: </label>
          <input
            type="text"
            name="searchPokemon"
            id="searchPokemon"
            placeholder="search for a pokemon..."
            value={searchPokemon}
            onChange={(e) => setSearchPokemon(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {pokemonDataStatus === "loading" && <p>Loading Pokemon...</p>}
        {pokemonDataStatus === "failed" && <p>error: {pokemonDataError}</p>}
        {pokemonDataStatus === "succeeded" && (
          <div>
            <p>Name: {pokemonData.name}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Types:</p>
            <ul>
              {pokemonData?.types?.map((t, i) => (
                <li key={i}>{t.type.name}</li>
              ))}
            </ul>

            {pokemonData?.sprites?.front_default && (
              <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            )}
            {pokemonData?.sprites?.front_shiny && (
              <img
                src={pokemonData.sprites.front_shiny}
                alt={pokemonData.name}
              />
            )}
            <button onClick={() => dispatch(addToTeam(pokemonData))}>
              Add to Team
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
