import React from 'react';
import { Link } from 'react-router-dom';

// components
import MovieCard from './MovieCard';

function MovieDetails(props) {

    const { movie, movies, setMovies } = props;

    return (
        <MovieCard movie={movie} movies={movies} />
    );
}

export default MovieDetails;