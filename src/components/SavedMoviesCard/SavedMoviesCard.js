import React from "react";
import "./MoviesCard.css";
import { MOVIES_IMAGE_BASE_URL } from "./../../utils/constants";

export default function SavedMoviesCard(props) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins >= 60) {
      return hours + "ч " + minutes + "м";
    } else {
      return minutes + "м";
    }
  }

  function handleButtonClick() {
    return props.onChangeState(props.card);
  }

  return (
    <section className="saved-moviecard saved-moviecard__content">
      <div className="saved-moviecard__block">
        <h3 className="saved-moviecard__title">{props.card.nameRU}</h3>
        <p className="saved-moviecard__duration">
          {getTimeFromMins(props.card.duration)}
        </p>
      </div>
      <a
        href={props.card.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="saved-moviecard__link"
      >
        <img
          className="saved-moviecard__pic"
          src={`${MOVIES_IMAGE_BASE_URL}${props.card.image.url}`}
          alt={`Кадр из фильма ${props.card.nameRU}`}
        />
      </a>

      <button
          className="saved-moviecard__button saved-moviecard__button_type_delete"
          type="button"
          onClick={handleButtonClick}
        ></button>

   
    </section>
  );
}
