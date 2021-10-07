import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

export default function SavedMovies({loggedIn}) {
  return (
    <section className="saved-movies page__section">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}
