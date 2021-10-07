import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";

export default function Movies() {
  return (
    <>
      <main className="main">
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </main>
    </>
  );
}
