import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <article className="page__content">
        <p className="section__title section_size_m">Технологии</p>
        <ul className="techs-list">
          <li className="techs-list__item">
            <h2 className="techs-list__item techs-list__item__heading_size_l">
              7 технологий
            </h2>
          </li>
          <li className="techs-list__item">
            <h3 className="techs-list__item techs-list__item__heading_size_m">
              На курсе веб-разработки мы освоили технологии, которые применили в
              дипломном проекте.
            </h3>
          </li>
        </ul>

        <ul className="techs-stack-list">
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">HTML</p>
          </li>
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">CSS</p>
          </li>
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">JS</p>
          </li>
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">React</p>
          </li>
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">Git</p>
          </li>
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">Express.js</p>
          </li>
          <li className="techs-stack-list__item">
            <p className="techs-stack-list__text">mongoDB</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
