import React from "react";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Switch>
            <Route exact path="/">
              <Header loggedIn={loggedIn} />
              <Main />
            </Route>
            <Route path="/movies">
              <Header loggedIn={loggedIn} />
              <Movies />
            </Route>
            <Route path="/saved-movies">
              <Header loggedIn={loggedIn} />
              <SavedMovies />
            </Route>
            <Route path="/profile">
              <Header loggedIn={loggedIn} />
              <Profile />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
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
