import React, { useState } from "react";
import MovieDetail from "./MovieDetail";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [moviesData, setMoviesData] = useState("");
  function handleSearch() {
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
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
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
        <p>Invalid Movie Name. Please try again.</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBar;
