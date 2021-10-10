import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";

export default function Movies(props) {
  return (
    <>
      <main className="main">
        <Header loggedIn={props.loggedIn}/>
        <SearchForm />
        <MoviesCardList  movies={props.movies} />
        <Footer />
      </main>
    </>
  );
}
