import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
//9bab8656
import MovieCard from "./MoviesCard";



const API_URL = "http://www.omdbapi.com?apikey=9bab8656";

const movie = {
  Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  Year: "2007",
  imdbID: "tt1132238",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
};

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Bluster</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src="https://cdn.jsdelivr.net/npm/@heroicons/react@1.0.6/outline/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    
    </div>
  );
};

export default App;
