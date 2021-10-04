import React from "react";
import "./Profile.css";

export default function Profile() {
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
          <button
            className="profile__form-btn profile__form-btn_type_exit"
            type="button"
          >
            Выйти из аккаунта
          </button>
        </form>
      </article>
    </section>
  );
}
