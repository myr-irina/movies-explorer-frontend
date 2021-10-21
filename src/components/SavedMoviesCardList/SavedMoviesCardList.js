/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./SavedMoviesCardList.css";
import SavedMoviesCard from "./../SavedMoviesCard/SavedMoviesCard";
import Preloader from "../Preloader/Preloader";

import {
  CARDS_FOR_MAX_WIN_SIZE,
  CARDS_FOR_MEDIUM_WIN_SIZE,
  CARDS_FOR_MIN_WIN_SIZE,
} from "./../../utils/constants";

export default function SavedMoviesCardList(props) {
  const savedMovies = props.savedMovies || [];
  const windowWidth = window.innerWidth;
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

  React.useEffect(() => {
    window.addEventListener("resize", renderCards);
    return () => {
      window.removeEventListener("resize", renderCards);
    };
  }, []);

  return (
    <section className="saved-movies-cardlist">
      {props.isLoading && <Preloader />}
      {props.message && <p className="saved-movies-message">{props.message}</p>}

      <ul className="saved-cards__list">
        {savedMovies.slice(0, cardsArray).map((savedMovie) => {
          return (
            <SavedMoviesCard
              card={savedMovie}
              key={savedMovie._id}
              onChangeState={props.onMovieUnsave}
            />
          );
        })}
      </ul>
    </section>
  );
}
