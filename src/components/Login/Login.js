import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailSubmit(e) {
    setEmail(e.target.value);
  }

  function handlePasswordSubmit(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <section className="login">
      <div className="login__block">
        <Logo />
        <h2 className="login__heading">Рады видеть!</h2>
      </div>

      <form className="login__form" onSubmit={handleSubmit}>
        <span className="login__input">E-mail</span>
        <input
          className="login__field login__field-email"
          name="email"
          type="email"
          required
          // value={email || ""}
          // onChange={handleEmailChange}
          autoComplete="off"
        ></input>

        <span className="login__input">Пароль</span>
        <input
          className="login__field login__field-password"
          name="password"
          type="password"
          required
          // value= ".............."
          // onChange={handlePasswordSubmit}
          autoComplete="off"
        ></input>   

        <button className="login__form-btn" type="submit">
          Войти
        </button>
        <div className="login__signin">
          <p className="login__link-title">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__login-link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
