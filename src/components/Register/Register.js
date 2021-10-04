import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";

export default function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  }

  return (
    <section className="register">
      <div className="register__block">
        <Logo />
        <h2 className="register__heading">Добро пожаловать!</h2>
      </div>

      <form className="register__form" onSubmit={handleSubmit}>
        <span className="register__input">Имя</span>
        <input
          className="register__field register__field-name"
          name="name"
          // value={name || ""}
          // onChange={handleNameChange}
          type="text"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        ></input>

        <span className="register__input">E-mail</span>
        <input
          className="register__field register__field-email"
          name="email"
          type="email"
          required
          // value={email || ""}
          // onChange={handleEmailChange}
          autoComplete="off"
        ></input>

        <span className="register__input">Пароль</span>
        <input
          className="register__field register__field-password"
          name="password"
          type="password"
          required
          // value= ".............."
          // onChange={handlePasswordChange}
          autoComplete="off"
        ></input>
        <span className="register__input-error">Что-то пошло не так...</span>

        <button className="register__form-btn" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__signin">
          <p className="register__link-title">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login-link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}
