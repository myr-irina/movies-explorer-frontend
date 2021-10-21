import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";


export default function ProtectedRoute({ component: Component, isUserDataLoading, ...props }) {
  if(isUserDataLoading) {
    return <Preloader />
  }
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
}
