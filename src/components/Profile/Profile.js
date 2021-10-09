import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";

export default function Profile(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section className="profile">
      <Header loggedIn={props.loggedIn} />
      <h2 className="profile__heading">Привет, Ирина!</h2>
      <article className="page__content">
        <form className="profile__form">
          <div className="profile__input-wrapper">
            <span className="profile__input-name">Имя</span>
            <input
              className="profile__field-name"
              name="name"
              // value="Ирина"
              onChange={handleNameChange}
              type="text"
              autoComplete="off"
              minLength="2"
              maxLength="40"
              required
            ></input>
          </div>

          <div className="profile__input-wrapper">
            <span className="profile__input-email">E-mail</span>
            <input
              className="profile__field-email"
              name="email"
              type="email"
              required
              value="myr-irina2@yandex.ru"
              onChange={handleEmailChange}
              autoComplete="off"
            ></input>
          </div>

          <button className="profile__form-btn" type="submit">
            Редактировать
          </button>
          <Link to='/'>
          <button
            className="profile__form-btn profile__form-btn_type_exit"
            type="button"
            onClick={props.onSignOut}
          >
            Выйти из аккаунта
          </button>
          </Link>
        </form>
      </article>
    </section>
  );
}
