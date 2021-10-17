/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import SearchForm from "../SearchForm/SearchForm";
import SearchSavedMoviesForm from "../SearchSavedMoviesForm/SearchSavedMoviesForm";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  loggedIn,
  message,
  savedMovies,
  searchSavedMovie,
  onMovieUnsave,
  isLoading,
  sortShortMovies,
  foundSavedMovies,
}) {
  const [shortMovies, setShortMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  let movies = foundSavedMovies.length > 0 ? foundSavedMovies : savedMovies;
  if (message) {
    movies = [];
  }

  React.useEffect(() => {
    if (isChecked && !message) {
      setShortMovies(sortShortMovies(movies));
    }
  }, [isChecked, movies]);
  // const [isMoviesFiltered, setIsMoviesFiltered] = React.useState(false);
  // const shortMovie = 40;

  // const filteredSavedMovies = !isMoviesFiltered
  //   ? savedMovies
  //   : savedMovies.filter((movies) => movies.duration <= shortMovie);

  // function handleFilterMovies(value) {
  //   setIsMoviesFiltered(value);
  // }

  return (
    <section className="saved-movies page__section">
      <HeaderMovies loggedIn={loggedIn} />
      <SearchSavedMoviesForm
        searchMovie={searchSavedMovie}
        // isMoviesFiltered={isMoviesFiltered}
        // onFilterMovies={handleFilterMovies}
        setIsChecked={setIsChecked}
      />
      <SavedMoviesCardList
        isLoading={isLoading}
        savedMovies={isChecked ? shortMovies : movies}
        // savedMovies={filteredSavedMovies}
        message={message}
        onMovieUnsave={onMovieUnsave}
      />
      <Footer />
    </section>
  );
}
