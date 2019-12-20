import React from "react";
import {Route, Switch} from "react-router-dom";
import asyncComponent from "utils/asyncComponent";
import UnauthorizedRoute from 'base/helper/UnauthorizedRoute';
import AuthorizedRoute from 'base/helper/AuthorizedRoute';

const Account = ({match}) => (
  <Switch>
    <Route path={`${match.url}/signin`} component={asyncComponent(() => import("./SignIn"))}/>
    <Route path={`${match.url}/signup`} component={asyncComponent(() => import("./SignUp"))}/>
    <Route path={`${match.url}/user`} component={asyncComponent(() => import("./Info"))} />
  </Switch>
);

export default Account;
