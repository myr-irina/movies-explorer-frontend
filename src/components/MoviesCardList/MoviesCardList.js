import React from "react";
import "./MoviesCardList.css";
import MovieCard from "./../MoviesCard/MoviesCard";

import cards from "./../../utils/data";

export default function MoviesCardList() {
  return (
    <section className="movies-cardlist">
      <ul className="cards__list">
        {cards.map((card) => (
          // <li className="cards" key={card._id}>
            <MovieCard card={card} key={card._id} />
          // </li>
        ))}
      </ul>
      <button className="movies-cardlist__btn">Еще</button>
    </section>
  );
}
