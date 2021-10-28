/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../utils/validation/Validation";

export default function Login(props) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  React.useEffect(() => {
    resetForm({});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    const { password, email } = values;
    props.onLogin({ password, email });
  };

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
          pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="off"
          disabled={props.isSending}
        ></input>
        <span className="login__input-error" id="email-error">
          {errors.email}
        </span>

        <span className="login__input">Пароль</span>
        <input
          className="login__field login__field-password"
          name="password"
          type="password"
          required
          value={values.password || ""}
          minLength="8"
          onChange={handleChange}
          autoComplete="off"
          disabled={props.isSending}
        ></input>

        <span className="login__input-error" id="password-error">
          {errors.password}
        </span>
        <span className="login__input-error">{props.message}</span>

        <button
          className={`login__form-btn
          ${!isValid && "login__button_disabled"}
          ${props.isSending && "login__button_disabled"}`}
          type="submit"
        >
          {props.isSending ? "Вход..." : "Войти"}
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
