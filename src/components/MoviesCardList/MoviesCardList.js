import React from "react";
import "./MoviesCardList.css";
import MovieCard from "./../MoviesCard/MoviesCard";

import {
  CARDS_FOR_MAX_WIN_SIZE,
  CARDS_FOR_MEDIUM_WIN_SIZE,
  CARDS_FOR_MIN_WIN_SIZE,
} from "./../../utils/constants";

export default function MoviesCardList(props) {
  const movies = props.movies || [];
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [cardsArray, setCardsArray] = React.useState(0);

  const renderCards = () => {
    if (windowWidth > 768) {
      setCardsArray(CARDS_FOR_MAX_WIN_SIZE);
    } else if (windowWidth > 480 && windowWidth < 768) {
      setCardsArray(CARDS_FOR_MEDIUM_WIN_SIZE);
    } else {
      setCardsArray(CARDS_FOR_MIN_WIN_SIZE);
    }
  };

  React.useEffect(() => renderCards(), [windowWidth]);

  return (
    <>
   
    <section className="movies-cardlist">
    {props.message && <p className="movies-message">{props.message}</p>}
      <ul className="cards__list">
        {movies.slice(0, cardsArray).map((movie) => (
          <MovieCard card={movie} key={movie.id} />
        ))}
      </ul>
      <button className="movies-cardlist__btn">Еще</button>
    </section>
    </>
  );
}
