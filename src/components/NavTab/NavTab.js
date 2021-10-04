import React from "react";

import "./NavTab.css";

export default function NavTab() {
  return (
    <section className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a
            className="nav__list-link"
            href="#about-project"
            target="_self"
            rel="noopener noreferrer"
          >
            О проекте
          </a>
        </li>
        <li className="nav__list-item">
          <a
            className="nav__list-link"
            href="#techs"
            target="_self"
            rel="noopener noreferrer"
          >
            Технологии
          </a>
        </li>
        <li className="nav__list-item">
          <a
            className="nav__list-link"
            href="#student"
            target="_self"
            rel="noopener noreferrer"
          >
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
