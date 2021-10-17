import React from "react";
import "./MoviesCard.css";
import { MOVIES_IMAGE_BASE_URL } from "./../../utils/constants";

export default function MoviesCard(props) {
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
    <section className="moviecard moviecard__content">
      <div className="moviecard__block">
        <h3 className="moviecard__title">{props.card.nameRU}</h3>
        <p className="moviecard__duration">
          {getTimeFromMins(props.card.duration)}
        </p>
      </div>
      <a
        href={props.card.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="moviecard__link"
      >
        <img
          className="moviecard__pic"
          src={`${MOVIES_IMAGE_BASE_URL}${props.card.image.url}`}
          alt={`Кадр из фильма ${props.card.nameRU}`}
        />
      </a>

      <button
        className={`moviecard__button ${
          props.isMovieSaved ? "moviecard__button_type_saved" : ""
        }`}
        type="button"
        onClick={handleButtonClick}
      >
        {props.isMovieSaved ? "✓" : "Сохранить"}
      </button>
    </section>
  );
}
