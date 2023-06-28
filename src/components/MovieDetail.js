import React from "react";

function MovieDetail({data}) {
    const {title,year,poster} = data;
    console.log(poster);
  return <li>
    <h1>{title} ({year})</h1>
    <img src={poster}></img>
  </li>
}

export default MovieDetail;
