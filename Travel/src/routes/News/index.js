import React from "react";
import {Route, Switch} from "react-router-dom";
import asyncComponent from "utils/asyncComponent";

const News = ({match}) => (
  <Switch>
    <Route path={`${match.url}/list`} component={asyncComponent(() => import("./List.js"))}/>
    <Route path={`${match.url}/detail/:id`} component={asyncComponent(() => import("./Detail.js"))}/>
  </Switch>
);

export default News;