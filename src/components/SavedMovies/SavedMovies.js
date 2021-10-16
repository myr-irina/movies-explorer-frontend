import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
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

  const filteredMovies = !isMoviesFiltered
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
        isMoviesFiltered={isMoviesFiltered}
        onFilterMovies={handleFilterMovies}
      />    
      <SavedMoviesCardList
        isLoading={isLoading}        
        savedMovies={filteredMovies}
        message={message}
        onMovieUnsave={onMovieUnsave}        
      />
      <Footer />
    </section>
  );
}
