import React, { useState } from "react";
import MovieDetail from "./MovieDetail";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [moviesData, setMoviesData] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f38c346d&s=${search}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMoviesData(data.Search);
        console.log(data.Search);
      })
      .catch((error) => {
        console.log("error", error);
        setMoviesData(null);
      });
  }

  return (
    <div>
      <h1>Search Movie</h1>
      <form>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      </form>
      {moviesData ? (
        <ul>
          {moviesData.map((movie, index) => (
            <MovieDetail
              key={index}
              data={{
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
              }}
            />
          ))}
        </ul>
      ) : moviesData == null ? (
        <p className="error">Invalid movie name. Please try again.</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBar;
