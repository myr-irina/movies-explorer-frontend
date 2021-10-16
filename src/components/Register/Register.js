/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../utils/validation/Validation";

export default function Register(props) {
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
    const { password, email, name } = values;
    props.onRegister({ password, email, name });
  };

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
          value={values.name || ""}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
          disabled={props.isSending}
        ></input>
        <span className="register__input-error" id="name-error">
          {errors.name}
        </span>

        <span className="register__input">E-mail</span>
        <input
          className="register__field register__field-email"
          name="email"
          type="email"
          required
          pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="off"
          disabled={props.isSending}
        ></input>
        <span className="register__input-error" id="email-error">
          {errors.email}
        </span>

        <span className="register__input">Пароль</span>
        <input
          className="register__field register__field-password"
          name="password"
          type="password"
          required
          value={values.password || ""}
          onChange={handleChange}
          autoComplete="off"
          disabled={props.isSending}
        ></input>
        <span className="register__input-error" id="password-error">
          {errors.password}
        </span>

        <button
          type="submit"
          className={`register__form-btn
            ${!isValid && "register__form-btn_disabled"}
            ${props.isSending && "register__form-btn_disabled"}`}
        >
          {props.isSending ? "Регистрация..." : "Зарегистрироваться"}
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
