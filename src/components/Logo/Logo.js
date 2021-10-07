import React from "react";
import { Link } from "react-router-dom";

import LogoRegPage from "./../../images/logo-start-page.svg";
import './Logo.css';


export default function Logo() {
  return (
    <Link to="/signup">
      <img className="logo" src={LogoRegPage} alt="логотип" />
    </Link>
  );
}
