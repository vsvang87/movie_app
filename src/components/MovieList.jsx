import React from "react";
import "../css/movielist.css";

function MovieList(props) {
  return (
    <div className="movie-container">
      <div className="container">
        <div className="movie-list-content">
          {props.movies.map((movie) => (
            <div className="movie-list-card" key={movie.id}>
              <img src={movie.Poster} alt="movie poster" />
              <p>{movie.Title}</p>
              <p>Year: {movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
