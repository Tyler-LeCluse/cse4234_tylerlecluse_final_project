import MovieSection from "./movieSection";
// import { useState, useEffect } from "react";
// import { Carousel } from 'react-responsive-carousel';

function Movies({ genres }) {
//   console.log(movies);
  return (
    <div className="cards">
      {genres
        ? genres?.map((genre, ind) => (
            (
            <MovieSection
              key={genre+ind}
              genre={genre}
            />)
          ))
        : null}
    </div>
  );
}
export default Movies;
