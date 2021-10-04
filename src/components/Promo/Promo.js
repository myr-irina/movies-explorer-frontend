import React from "react";

import "./Promo.css";
import LandingLogo from "./../../images/landing-logo.svg";

export default function Promo() {
  return (
    <div className="promo">
      <p className="promo__text">
        Учебный проект студента факультета Веб-разработки.
      </p>
      <img
        className="promo__image"
        src={LandingLogo}
        alt="логотип промо страницы"
      />
    </div>
  );
}
