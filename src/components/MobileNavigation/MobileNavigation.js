import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavigation.css";

import closeBurgerMenu from "./../../images/mobile-close-icon.svg";

export default function MobileNavigation({ loggedIn }) {
  const [open, setOpen] = React.useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    loggedIn && (
      <>
        {open ? (
          <button
            className="menu-burger__close-btn"
            onClick={() => closeMobileMenu()}
          >
            <img
              className="menu-burger__close-btn-img"
              src={closeBurgerMenu}
              alt=""
            />
          </button>
        ) : (
          <button
            className="menu-burger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="menu-burger__bar"></span>
            <span className="menu-burger__bar"></span>
            <span className="menu-burger__bar"></span>
          </button>
        )}

        {open && (
          <>
            <ul className="mobile-nav">
              <div className="mobile-nav__wrapper">
                <ul className="mobile-nav__menu">
                  <li>
                    <NavLink
                      exact
                      to="/"
                      className="mobile-nav__link"
                      activeClassName="mobile-nav__link mobile-nav__link_type_active"
                      onClick={() => closeMobileMenu()}
                    >
                      Главная
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/movies"
                      className="mobile-nav__link"
                      activeClassName="mobile-nav__link mobile-nav__link_type_active"
                      onClick={() => closeMobileMenu()}
                    >
                      Фильмы
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/saved-movies"
                      className="mobile-nav__link"
                      activeClassName="mobile-nav__link mobile-nav__link_type_active"
                      onClick={() => closeMobileMenu()}
                    >
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
                <li>
                  <NavLink to="/profile" onClick={() => closeMobileMenu()}>
                    <button className="mobile-nav__profile-button">
                      Аккаунт
                    </button>
                  </NavLink>
                </li>
              </div>
            </ul>
            <div className="cover"></div>
          </>
        )}
      </>
    )
  );
}
