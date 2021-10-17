/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import HeaderMovies from "./../HeaderMovies/HeaderMovies";

export default function Movies({
  loggedIn,
  movies,
  isLoading,
  searchMovie,
  onMovieSave,
  onMovieUnsave,
  savedMovies,
  message,
  sortShortMovies,
}) {
  const [shortMovies, setShortMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (isChecked) {
      setShortMovies(sortShortMovies(movies));
    }
  }, [isChecked]);

  return (
    <>
      <main className="main">
        <HeaderMovies loggedIn={loggedIn} />
        <SearchForm searchMovie={searchMovie} setIsChecked={setIsChecked} />
        <MoviesCardList
          isLoading={isLoading}
          movies={isChecked ? shortMovies : movies}
          savedMovies={savedMovies}
          message={message}
          onMovieSave={onMovieSave}
          onMovieUnsave={onMovieUnsave}
        />
        <Footer />
      </main>
    </>
  );
}
