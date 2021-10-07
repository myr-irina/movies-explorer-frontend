import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks() {
  return (
    <>
      {/* <ul className="menu_logged-in"> */}
      <li>
        <NavLink
          to="/movies"
          className="menu__link menu__link-movies"
          activeClassName="menu__link_active"
        >
          Фильмы
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/saved-movies"
          className="menu__link"
          activeClassName="menu__link_active"
        >
          Сохраненные фильмы
        </NavLink>
      </li>
      {/* </ul> */}

      <NavLink
        to="/profile"
        className="menu__link"
        activeClassName="menu__link_active"
      ></NavLink>
    </>
  );
}
