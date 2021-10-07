import React from "react";

import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="project" id="about-project">
      <article className="page__content" >
        <p className="project section__title section_size_l">О проекте</p>
        <ul className="project-list">
          <li className="project-list__item">
            <h3 className="project-list__heading">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project-list__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="project-list__item">
            <h3 className="project-list__heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project-list__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <ul className="project-blocks">
          <li className="project-block">1 неделя</li>
          <li className="project-block project-block_color_grey">4 недели</li>
        </ul>

        <ul className="project-blocks">
          <li className="project-block project-block_type_text">Back-end</li>
          <li className="project-block project-block_type_text">Front-end</li>
        </ul>
      </article>
    </section>
  );
}
