import React from "react";
import { useLocation } from "react-router";
import "./HeaderMovies.css";
import Navigation from "../Navigation/Navigation";
import "./../App/App.css";
import Logo from "../Logo/Logo";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

function HeaderMovies({ loggedIn }) {
  let location = useLocation();

  return (
    <header
      className={`${
        location.pathname === "/"
          ? "header-movies"
          : "header-movies header-movies-logged-in"
      }`}
    >
      <article className="header-movies__section">
        <Logo />
        <Navigation loggedIn={loggedIn} />
        <MobileNavigation loggedIn={loggedIn} />
      </article>
    </header>
  );
}

export default HeaderMovies;
