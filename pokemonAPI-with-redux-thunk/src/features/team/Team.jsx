import React from "react";
import { useSelector } from "react-redux";

export function Team() {
  const { team, status, error } = useSelector((state) => state.team);

  return (
    <section>
      <h2>Your Pokémon Team</h2>

      {status === "loading" && <p>Adding to team...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {team.length === 0 ? (
        <p>Your team is empty.</p>
      ) : (
        <ul>
          {team.map((pokemon, i) => (
            <li key={i}>
              <strong>{pokemon.name}</strong>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              {pokemon?.sprites?.front_default && (
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
