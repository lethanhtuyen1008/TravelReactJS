import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "utils/asyncComponent";

const Product = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/list/:id`}
        component={asyncComponent(() => import("./List"))}
      />
      <Route
        path={`${match.url}/detail/:id`}
        component={asyncComponent(() => import("./Detail"))}
      />
    </Switch>
  );
};

export default Product;
