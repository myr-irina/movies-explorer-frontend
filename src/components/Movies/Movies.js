import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";

export default function Movies({loggedIn, movies, isLoading, searchMovie, message}) {
 
  const [filteredMovies, setFilteredMovies] = React.useState(false);
  const shortMovie = 40;

  const moviesData = !filteredMovies
    ? movies
    : movies.filter((movie) => movie.duration <= shortMovie);

  function handleFilterMovies(value) { 
    setFilteredMovies(value);
  }

  return (
    <>
      <main className="main">
        <Header loggedIn={loggedIn} />
        <SearchForm
          searchMovie={searchMovie}
          isLoading={isLoading}
          filteredMovies={filteredMovies}
          onFilterMovies={handleFilterMovies}
        />
        <MoviesCardList isLoading={isLoading} movies={moviesData} message={message} />
        <Footer />
      </main>
    </>
  );
}
