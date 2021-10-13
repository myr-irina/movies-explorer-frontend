import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";

export default function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  },[currentUser])


  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile({
      name: name,
      email: email,
    })
    console.log(props)   
  }

  return (
    <section className="profile">
      <Header loggedIn={props.loggedIn} />
      <h2 className="profile__heading">
        {`Привет, ${currentUser.name}!`}
      </h2>
      <article className="page__content">
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input-wrapper">
            <span className="profile__input-name">Имя</span>
            <input
              className="profile__field-name"
              name="name"
              value={name}
              onChange={handleNameChange}
              type="text"
              pattern="^[А-Яа-яЁёA-Za-z]+-? ?[А-Яа-яЁёA-Za-z]+$"
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
              value={email}                    
              onChange={handleEmailChange}
              autoComplete="off"
            ></input>
           
          </div>

          <button className="profile__form-btn" type="submit" onClick={props.onEditProfile}>            
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
