import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Search from "./components/Search";

//
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getMovieRequest(searchValue) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4cf49bf2`;
    const response = await fetch(url);
    const json = await response.json();

    //set main page to default and search only when type in input field
    if (json.Search) {
      setMovies(json.Search);
    }
  }
  //call getMovieRequest
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <div className="search-component">
        <div className="search-content">
          <Header movies="Movies" />
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      <div className="movie-div">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
