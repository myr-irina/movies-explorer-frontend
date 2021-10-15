import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import HeaderMovies from './../HeaderMovies/HeaderMovies';

export default function Movies({
  loggedIn,
  movies,
  isLoading,
  searchMovie,
  message,
  onMovieSave,
  onMovieUnsave,
  savedMovies,
}) {
  const [isMoviesFiltered, setIsMoviesFiltered] = React.useState(false);
  const shortMovie = 40;

  const moviesData = !isMoviesFiltered
    ? movies
    : movies.filter((movie) => movie.duration <= shortMovie);

  function handleFilterMovies(value) {
    setIsMoviesFiltered(value);
  }

  return (
    <>
      <main className="main">
        <HeaderMovies loggedIn={loggedIn} />
        <SearchForm
          searchMovie={searchMovie}
          isLoading={isLoading}
          isMoviesFiltered={isMoviesFiltered}
          onFilterMovies={handleFilterMovies}
        />
        <MoviesCardList
          isLoading={isLoading}
          movies={moviesData}
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
