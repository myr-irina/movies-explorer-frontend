import React from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
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

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
 

  const history = useHistory();
 

  React.useEffect(() => {
    if (loggedIn) {
      const userLocalStorage = localStorage.getItem("currentUser");
      const moviesLocalStorage = localStorage.getItem("movies");
      const savedMovieLocalStorage = localStorage.getItem("savedMovies");

      if (!userLocalStorage) {
        mainApi
          .getUserInfo()
          .then((res) => {
            localStorage.setItem("currentUser", JSON.stringify(res));
            console.log(localStorage)
            setCurrentUser(res);
            
          })
          .catch((err) => console.log("Невозможно получить данные с сервера", err));
      } else {
        setCurrentUser(
          JSON.parse(userLocalStorage));
      }

      if (!moviesLocalStorage) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem("movies", JSON.stringify(res));
            setMovies(res);
            console.log(res)
          })
          .catch((err) => console.log("Невозможно получить данные с сервера", err));
      } else {
        setMovies(JSON.parse(moviesLocalStorage));
      }

      if (!savedMovieLocalStorage) {
        mainApi
          .getUserMovies()
          .then((res) => {
            console.log(res)
            localStorage.setItem("savedMovies", JSON.stringify(res || []));
            setSavedMovies(res || []);
          })
          .catch((err) => console.log("Невозможно получить данные с сервера", err));
      } else {
        setSavedMovies(JSON.parse(savedMovieLocalStorage));        
      }
    }
  }, [loggedIn]);



  const handleTokenCheck = React.useCallback(() => {
    mainApi
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setLoggedIn(false);
        setIsLoading(false);
        console.log(`Error: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  function handleLoginSubmit(data) {
    mainApi
      .login(data)
      .then((res) => {
        handleTokenCheck();
        // setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден");
        }
      });
  }

  function handleRegisterSubmit(data) {
    mainApi
      .register(data)
      .then((res) => {
        handleLoginSubmit(data);
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }
      });
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        console.log(`Ошибка при выходе из приложения. ${err}`);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Switch>
            <Route exact path="/" component={Main} isLoading={isLoading} />

            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              movies={movies}
              isLoading={isLoading}
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              savedMovies={savedMovies}
              isLoading={isLoading}
            />

            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              isLoading={isLoading}
              onSignOut={handleSignOut}
            />

            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register onRegister={handleRegisterSubmit} />
              )}
            </Route>

            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login onLogin={handleLoginSubmit} />
              )}
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
