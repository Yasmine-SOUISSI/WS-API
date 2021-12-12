import { React, useState } from "react";
import { Data } from "./Components/Data";
import "./App.css";
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";
import ModalAddMovie from "./Components/ModalAddMovie";

function App() {
    const [movies, setMovies] = useState(Data);
    const [search, setSearch] = useState("");
    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };
    return (
        <div className="App">
            <NavBar search={search} setSearch={setSearch} />
            <MovieList movies={movies} search={search} />
            <ModalAddMovie addMovie={addMovie} />
        </div>
    );
}

export default App;
