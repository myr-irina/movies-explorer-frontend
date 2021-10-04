import React from "react";
import "./AboutMe.css";
import MyFoto from "./../../images/foto.jpg";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="student" id="student">
      <article className="page__content">
        <p className="student section__title section_size_l">Студент</p>
        <div className="student__profile">
          <div className="student__info">
            <h2 className="student__heading student__heading_size_l">Ирина</h2>
            <h3 className="student__heading student__heading_size_m">
              Фронтенд-разработчик
            </h3>
            <p className="student__text">
              Я живу в Москве, закончила факультет экономики ГУ ВШЭ. У меня есть
              муж и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
              начала кодить. С 2015 года работала в компании Continental. После
              того, как прошла курс по веб-разработке, решила искать работу в
              этой сфере.
            </p>

            <nav className="column-social">
              <li className="column-social__item">
                <a
                  className="column-social__item-link"
                  href="https://www.facebook.com/irina.alexxx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="column-social__item">
                <a
                  className="column-social__item-link"
                  href="https://github.com/myr-irina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </nav>
          </div>
          {/* <div className="student__image-card"> */}
            <img className="student__image" src={MyFoto} alt="мое фото" />
          {/* </div> */}
        </div>

        <Portfolio />
      </article>
    </section>
  );
}
