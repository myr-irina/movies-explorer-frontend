import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

export default function ProtectedRoute({ component: Component, ...props }) {
  if (props.isLoading) {
    return (
      <Route>{() => <Preloader/>}</Route>
    );
  }
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  );
}
