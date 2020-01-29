import React from "react";

// components
import MovieDetails from "./MovieDetails";

function MovieList(props) {

  const { movies, setMovies } = props;

  function routeToMovie(e, movie) {
    e.preventDefault();
    props.history.push(`/update-movie/${movie.id}`);
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails onClick={e => routeToMovie(e, movie)} key={movie.id} movie={movie} movies={movies} setMovies={setMovies} />
      ))}
    </div>
  );
}

export default MovieList;