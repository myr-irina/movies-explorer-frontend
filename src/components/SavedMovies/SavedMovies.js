import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <section className="saved-movies page__section">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}
