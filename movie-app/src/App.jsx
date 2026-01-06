import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    if (!searchValue.trim()) return;

    try {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container my-4">
      <div className="row align-items-center mb-4">
        <div className="col-md-8">
          <MovieListHeading heading="Movies" />
        </div>
        <div className="col-md-4">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>

      <MovieList movies={movies} />
    </div>
  );
};

export default App;
