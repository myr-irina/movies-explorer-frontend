import React from "react";
import "./MoviesCardList.css";
import MovieCard from "./../MoviesCard/MoviesCard";

import cards from "./../../utils/data";

export default function MoviesCardList(props) {
  console.log(props)
  const movies = props.movies || [];

  return (
    <section className="movies-cardlist">
      <ul className="cards__list">
        {movies.map((movie) => (
          <MovieCard card={movie} key={movie.id} />
        ))}
      </ul>
      <button className="movies-cardlist__btn">Еще</button>
    </section>
  );
}
