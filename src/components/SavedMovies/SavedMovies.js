/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
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

  return (
    <section className="saved-movies page__section">
      <HeaderMovies loggedIn={loggedIn} />
      <SearchSavedMoviesForm
        searchMovie={searchSavedMovie}
        setIsChecked={setIsChecked}
      />
      <SavedMoviesCardList
        isLoading={isLoading}
        savedMovies={isChecked ? shortMovies : movies}
        message={message}
        onMovieUnsave={onMovieUnsave}
      />
      <Footer />
    </section>
  );
}
