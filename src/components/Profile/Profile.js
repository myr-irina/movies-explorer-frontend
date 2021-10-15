import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/validation/Validation";

export default function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile({ email: values.email, name: values.name });
  }

  return (
    <section className="profile">
      <Header loggedIn={props.loggedIn} />
      <h2 className="profile__heading">{`Привет, ${currentUser.name}!`}</h2>
      <article className="page__content">
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input-wrapper">
            <span className="profile__input-name">Имя</span>
            <input
              className="profile__field-name"
              name="name"
              value={values.name || currentUser.name}
              onChange={handleChange}
              type="text"
              pattern="^[А-Яа-яЁёA-Za-z]+-? ?[А-Яа-яЁёA-Za-z]+$"
              autoComplete="off"
              minLength="2"
              maxLength="40"
              required
            ></input>
          </div>
          <span className="login__input-error" id="email-error">
            {errors.name}
          </span>
          <div className="profile__input-wrapper">
            <span className="profile__input-email">E-mail</span>
            <input
              className="profile__field-email"
              name="email"
              type="email"
              required
              pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
              value={values.email || currentUser.email}
              onChange={handleChange}
              autoComplete="off"
            ></input>
          </div>
          <span className="login__input-error" id="email-error">
            {errors.email}
          </span>
          {/* {messages && <span className="login__input-error" id="messages">{messages.profileForm}</span>} */}

          <button
            type="submit"
            className={`profile__form-btn
          ${!isValid && "profile__form-btn_disabled"}
          ${
            values.email === currentUser.email &&
            values.name === currentUser.name &&
            "profile__form-btn_disabled"
          }
          ${props.isSending && "profile__form-btn_disabled"}`}
          >
            Редактировать
          </button>
          <Link to="/">
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
