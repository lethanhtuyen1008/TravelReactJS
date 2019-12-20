import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "./Account";
import News from "./News";
import Tours from './eCommerce/Tours';
import Booking from './eCommerce/Booking';
import ResetPassword from './Account/ResetPassword';
import Seller from './eCommerce/Seller';
import asyncComponent from "utils/asyncComponent";
import AuthorizedRoute from 'base/helper/AuthorizedRoute';

const App = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.url}admin`} component={asyncComponent(() => import("./Admin"))} />
        <Route exact path={`${match.url}`} component={asyncComponent(() => import("./eCommerce/Home"))} />
        <div className="gx-main-content-wrapper">
          <Route path={`${match.url}tours`} component={asyncComponent(() => import("./eCommerce/Tours"))} />
          <Route path={`${match.url}booking`} component={asyncComponent(() => import("./eCommerce/Booking"))} />
          <Route path={`${match.url}cart`} component={asyncComponent(() => import("./eCommerce/Cart"))} />
          <Route path={`${match.url}account`} component={asyncComponent(() => import("./Account"))} />
          <Route path={`${match.url}about`} component={asyncComponent(() => import("./eCommerce/About"))} />
          <Route path={`${match.url}hotel`} component={asyncComponent(() => import("./eCommerce/Hotel"))} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
