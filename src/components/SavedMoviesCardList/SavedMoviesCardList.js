import React from "react";
import "./SavedMoviesCardList.css";
import SavedMovieCard from './../SavedMoviesCard/SavedMoviesCard';

import {
  CARDS_FOR_MAX_WIN_SIZE,
  CARDS_FOR_MEDIUM_WIN_SIZE,
  CARDS_FOR_MIN_WIN_SIZE,
  ADD_CARDS_FOR_MAX_WIN_SIZE,
  ADD_CARDS_FOR_MEDIUM_WIN_SIZE,
} from "./../../utils/constants";

export default function SavedMoviesCardList(props) {
  const savedMovies = props.savedMovies || [];
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [cardsArray, setCardsArray] = React.useState(0);

  function renderCards() {
    if (windowWidth > 768) {
      setCardsArray(CARDS_FOR_MAX_WIN_SIZE);
    } else if (windowWidth > 480 && windowWidth < 768) {
      setCardsArray(CARDS_FOR_MEDIUM_WIN_SIZE);
    } else {
      setCardsArray(CARDS_FOR_MIN_WIN_SIZE);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => renderCards(), [windowWidth]);

  return (
    <>
      <section className="saved-movies-cardlist">
        {props.message && (
          <p className="saved-movies-message">{props.message}</p>
        )}
        <ul className="saved-cards__list">
          {savedMovies.slice(0, cardsArray).map((savedMovie) => {
            return (
              <SavedMovieCard
                card={savedMovie}
                key={savedMovie.id}
                onChangeState={props.onMovieUnsave}
                isMovieSaved={true}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}
