import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
    const filtredMovies = props.movies.filter((movie) =>
        movie.title.toLowerCase().includes(props.search.toLowerCase())
    );

    return (
        <div className="movies">
            {filtredMovies.map((movie, key) => (
                <MovieCard movie={movie} key={key} />
            ))}
        </div>
    );
}

export default MovieList;
