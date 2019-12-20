import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "utils/asyncComponent";

const Index = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/tour/:id/:id_lich`}
        component={asyncComponent(() => import("./book"))}
      />
    </Switch>
  );
};

export default Index;
