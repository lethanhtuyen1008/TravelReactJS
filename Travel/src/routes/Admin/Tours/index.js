import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "utils/asyncComponent";

const index = ({ match }) => {
  return (
    <>
      <Route
        exact
        path={`${match.url}`}
        component={asyncComponent(() => import("./List"))}
      />
      <Route
        path={`${match.url}/detail/:id`}
        component={asyncComponent(() => import("./Detail"))}
      />
    </>
  );
};

export default index;
