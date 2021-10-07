import React from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Header from "./../Header/Header";
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
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setMovies(movies);
    }
  }, []);

  React.useEffect(() => {
    mainApi
      .getUserMovies()
      .then((userMovies) => {
        setSavedMovies(userMovies);
        localStorage.setItem("savedMovies", JSON.stringify(userMovies));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  React.useEffect(() => {
    mainApi
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        history.push(location.pathname);
      })
      .catch((err) => {
        console.log(err.message);
        setLoggedIn(false);
        localStorage.removeItem("movies");
        localStorage.removeItem("savedMovies");
      });
  });

  
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

  function handleLoginSubmit(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        handleTokenCheck();
        setLoggedIn(true);
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
        handleLoginSubmit({
          email: data.email,
          password: data.password,
        });
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }
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
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
            />

            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
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
