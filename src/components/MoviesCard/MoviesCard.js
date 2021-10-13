import React from "react";
import { useLocation } from "react-router";
import "./MoviesCard.css";
import { MOVIES_IMAGE_BASE_URL } from "./../../utils/constants";

export default function MoviesCard(props) {
  console.log(props);
  const [isMovieSaved, setIsMovieSaved] = React.useState(false);
  const location = useLocation();
  const moviePath = location.pathname === "/movies";
  const savedMoviePath = location.pathname === "/saved-movies";
  

  function handleMovieSave() {
    setIsMovieSaved(!isMovieSaved);
  }

  function handleMovieDelete(evt) {
    evt.target.closest(".moviecard").remove();
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins >= 60) {
      return hours + "ч " + minutes + "м";
    } else {
      return minutes + "м";
    }
  }

  return (
    <section className="moviecard moviecard__content">
      <div className="moviecard__block">
        <h3 className="moviecard__title">{props.card.nameRU}</h3>
        <p className="moviecard__duration">
          {getTimeFromMins(props.card.duration)}
        </p>
      </div>
      <img
        className="moviecard__pic"
        src={`${MOVIES_IMAGE_BASE_URL}${props.card.image.url}`}
        alt={`Кадр из фильма ${props.card.nameRU}`}
      />
      {moviePath &&
        (isMovieSaved ? (
          <button
            className="moviecard__button moviecard__button_type_saved"
            type="button"
            onClick={handleMovieSave}
          ></button>
        ) : (
          <button
            className="moviecard__button"
            type="button"
            onClick={handleMovieSave}
          >
            Сохранить
          </button>
        ))}
      {savedMoviePath && (
        <button
          className="moviecard__button moviecard__button_type_delete"
          type="button"
          onClick={handleMovieDelete}
        ></button>
      )}
    </section>
  );
}
