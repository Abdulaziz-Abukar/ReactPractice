import React, { useState } from "react";
import moviesByGenre from "../../../data/moviesByGenre";

export function MoviePicker() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [favouriteMovies, setFavoriteMovies] = useState([]);

  const moviesForSelectedGenre = moviesByGenre[selectedGenre] || [];

  return (
    <div>
      <h1>Movie Picker</h1>
      <select
        name="movieGenre"
        id="movieGenre"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">-- Select a movie genre--</option>
        {Object.keys(moviesByGenre).map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      {selectedGenre && (
        <select
          name="movieTitle"
          id="movieTitle"
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option value="">-- Select a movie --</option>
          {moviesForSelectedGenre.map((movie, index) => (
            <option key={index} value={movie}>
              {movie}
            </option>
          ))}
        </select>
      )}
      {selectedMovie && selectedGenre && (
        <div>
          <p>You selected: {selectedMovie}</p>{" "}
          <p style={{ display: "inline", paddingRight: "10px" }}>
            Would you like to favorite it?
          </p>
          <button
            onClick={() => {
              if (!favouriteMovies.includes(selectedMovie)) {
                setFavoriteMovies((prev) => [...prev, selectedMovie]);
              }
            }}
          >
            Favourite
          </button>
        </div>
      )}
      <ul>
        {favouriteMovies.map((movie, index) => (
          <li key={index}>
            {movie}
            <button
              onClick={() =>
                setFavoriteMovies(favouriteMovies.filter((_, i) => i !== index))
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
