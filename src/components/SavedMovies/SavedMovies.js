import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SavedMoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  loggedIn,
  message,
  savedMovies,
  searchMovie,
  onMovieUnsave,
  isLoading,
}) {
  const [isMoviesFiltered, setIsMoviesFiltered] = React.useState(false);
  const shortMovie = 40;

  const moviesData = !isMoviesFiltered
    ? savedMovies
    : savedMovies.filter((movie) => movie.duration <= shortMovie);

  function handleFilterMovies(value) {
    setIsMoviesFiltered(value);
  }

  return (
    <section className="saved-movies page__section">
     <HeaderMovies loggedIn={loggedIn} />
      <SearchForm
        searchMovie={searchMovie}
        isLoading={isLoading}
        isMoviesFiltered={isMoviesFiltered}
        onFilterMovies={handleFilterMovies}
      />
      {/* <MoviesCardList /> */}
      {/* <SavedMoviesCardList
        isLoading={isLoading}
        savedMovies={savedMovies}
        message={message}
        onMovieUnsave={onMovieUnsave}
      /> */}
      <Footer />
    </section>
  );
}
