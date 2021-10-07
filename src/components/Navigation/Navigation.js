import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navigation.css";

export default function Navigation({ loggedIn }) {
  return (
    <>
      {!loggedIn && (
        <ul className="menu">
          <li>
            <Link to="/signup" className="menu__link menu__link_color_white">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/signin" className="menu__link menu__link_color_white">
              <button className="menu__link menu__link-button" type="submit">
                Войти
              </button>
            </Link>
          </li>
        </ul>
      )}
      {loggedIn && (
        <>
          <nav className="normal-nav">
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
          </nav>
          <button className="menu__profile-button">Аккаунт</button>
        </>
      )}
    </>
  );
}
