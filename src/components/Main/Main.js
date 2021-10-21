import React from "react";

import Promo from "./../Promo/Promo";
import NavTab from "./../NavTab/NavTab";
import AboutProject from "./../AboutProject/AboutProject";
import Techs from "./../Techs/Techs";
import AboutMe from "./../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Main.css";

export default function Main({ loggedIn }) {
  return (
    <section className="main">
      <Header loggedIn={loggedIn} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </section>
  );
}
