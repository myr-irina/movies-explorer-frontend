import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";

export default function Movies({loggedIn, movies}) {
  return (
    <>
      <main className="main">
        <Header loggedIn={loggedIn}/>
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </main>
    </>
  );
}
