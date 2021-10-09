import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  console.log("loggedInRoute", props);
  if (props.isLoading) {
    return (
      <Route>{() => <div>Данные вашего пользователя загружаются</div>}</Route>
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
