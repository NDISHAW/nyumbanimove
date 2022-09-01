import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = localStorage.getItem("auth");

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth && auth.name !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    ></Route>
  );
}