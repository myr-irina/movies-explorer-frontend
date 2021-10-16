/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Route,
  Switch,
  useHistory, 
  Redirect,
} from "react-router-dom";
import "./App.css";

import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "./../Profile/Profile";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import PageNotFound from "./../PageNotFound/PageNotFound";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from "./../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Preloader from "./../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMoviesLoading, setIsMoviesLoading] = React.useState(false);
  const [isUserDataLoading, setIsUserDataLoading] = React.useState(true);
  const [isSavedMoviesLoading, setIsSavedMoviesLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [message, setMessage] = React.useState(null);
  const [isFormSending, setIsFormSending] = React.useState(false);

  const history = useHistory();

  const resetMessage = () => {
    setMessage(null);
  };

  React.useEffect(() => {
    if (loggedIn) {
      const userLocalStorage = localStorage.getItem("currentUser");
      const moviesLocalStorage = localStorage.getItem("movies");
      const savedMovieLocalStorage = localStorage.getItem("savedMovies");

      if (!userLocalStorage) {
        mainApi
          .getUserInfo()
          .then((res) => {
            localStorage.setItem("currentUser", JSON.stringify(res || {}));
            console.log(currentUser);
            setCurrentUser(res || {});
          })
          .catch((err) =>
            console.log("Невозможно получить данные с сервера", err)
          );
      } else {
        setCurrentUser(JSON.parse(userLocalStorage));
      }

      if (!moviesLocalStorage) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem("movies", JSON.stringify(res || []));
            setMovies(res || []);
            setIsMoviesLoading(false)
          })
          .catch((err) =>
            console.log("Невозможно получить данные с сервера", err)
          );
      } else {
        setMovies(JSON.parse(moviesLocalStorage));
        setIsMoviesLoading(false);
      }

      if (!savedMovieLocalStorage) {
        mainApi
          .getUserMovies()
          .then((res) => {
            console.log(res);
            localStorage.setItem("savedMovies", JSON.stringify(res || []));
            setSavedMovies(res || []);
            setIsSavedMoviesLoading(false);
          })
          .catch((err) =>
            console.log("Невозможно получить данные с сервера", err)
          );
      } else {
        setSavedMovies(JSON.parse(savedMovieLocalStorage));
        setIsSavedMoviesLoading(false);
      }
    }
  }, [loggedIn]);

  React.useEffect(() => {
    resetMessage();
  }, []);

  const handleTokenCheck = React.useCallback(() => {
    mainApi
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
        setIsUserDataLoading(false);
      })
      .catch((err) => {
        setLoggedIn(false);
        setIsUserDataLoading(false);
        console.log(`Error: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  function handleLoginSubmit(data) {
    setIsFormSending(true);
    mainApi
      .login(data)
      .then((res) => {
        handleTokenCheck();
        history.push("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден");
        }
      })
      .finally(() => setIsFormSending(false));
  }

  function handleRegisterSubmit(data) {
    setIsFormSending(true);
    mainApi
      .register(data)
      .then((res) => {
        handleLoginSubmit(data);
      })
      .catch((err) => {
        if (err.status === 40) {
          console.log("400 - некорректно заполнено одно из полей");
        }
      })
      .finally(() => setIsFormSending(false));
  }

  function handleEditProfile(email, name) {
    setIsFormSending(true);
    mainApi
      .setUserInfo(email, name)
      .then((res) => {
        console.log(res);
        localStorage.setItem("currentUser", JSON.stringify(res));
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("409 - ошибка при сохранении данных", err);
        }
      })
      .finally(() => setIsFormSending(false));
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({
          name: "",
          email: "",
        });
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        console.log(`Ошибка при выходе из приложения. ${err}`);
      });
  }

  // функция поиска фильма
  function handleMovieSearch(query) {
    const searchTerm = query.toLowerCase();

    const movieSearchResult = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchTerm);
    });
    if (movieSearchResult.length === 0) {
      setMessage("Ничего не найдено");
      setFoundMovies([]);
    } else {
      setFoundMovies(movieSearchResult);
      resetMessage();
    }
  }

  //функция сохранения фильмв
  function handleMovieLike(movie) {
    console.log(movie);
    mainApi
      .saveMovie(movie)
      .then((res) => {
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([res, ...savedMovies])
        );
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        console.log(
          `Невозможно сохранить карточку с фильмом. Код ошибки ${err.code}`
        );
      });
  }

  //функция поиска в сохраненных фильмах
  function handleSavedMovieSearch(query) {
    const searchTerm = query.toLowerCase();

    const movieSearchResult = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchTerm);
    });
    if (movieSearchResult.length === 0) {
      setMessage("Ничего не найдено");
      setFoundMovies([]);
    } else {
      setFoundMovies(movieSearchResult);
      resetMessage();
    }
  }

  //функция удаления фильма
  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find((elem) => elem.movieId === movie.id);
    if (!savedMovie) {
      console.error("Попытка удалить фильм, который не был сохранен.", movie);
      return;
    }
    mainApi
      .deleteMovie(savedMovie._id)
      .then((res) => {
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(savedMovies.filter((i) => i._id !== savedMovie._id))
        );
        setSavedMovies(savedMovies.filter((i) => i._id !== savedMovie._id));
      })
      .catch((err) => {
        console.log(err);
        console.error(
          `Невозможно удалить карточку с фильмом. Код ошибки ${err.code}`
        );
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          {isMoviesLoading ? (
            <Preloader />
          ) : (
            <Switch>
              <Route exact path="/" component={Main} />

              <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                message={message}
                component={Movies}
                movies={foundMovies}
                savedMovies={savedMovies}
                isLoading={isMoviesLoading}
                searchMovie={handleMovieSearch}
                onMovieSave={handleMovieLike}
                onMovieUnsave={handleDeleteMovie}
              />

              <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                message={message}
                component={SavedMovies}
                savedMovies={savedMovies}
                searchMovie={handleSavedMovieSearch}
                onMovieUnsave={handleDeleteMovie}
                isLoading={isSavedMoviesLoading}
              />

              <ProtectedRoute
                path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                isLoading={isUserDataLoading}
                onSignOut={handleSignOut}
                onEditProfile={handleEditProfile}
                isSending={isFormSending}
              />

              <Route path="/signup">
                {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
                  <Register
                    onRegister={handleRegisterSubmit}
                    isSending={isFormSending}
                  />
                )}
              </Route>

              <Route path="/signin">
                {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
                  <Login
                    onLogin={handleLoginSubmit}
                    isSending={isFormSending}
                  />
                )}
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          )}
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
