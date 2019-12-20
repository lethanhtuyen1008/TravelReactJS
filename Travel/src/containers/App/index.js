import React from "react";
import { Route, Switch } from "react-router-dom";
import MainApp from "./MainApp";
import 'antd/dist/antd.css';
import "assets/vendors/style"
import "assets/styles-less/wieldy.less"

const Index = props => {
  return (
    <Switch>
      {/* <Route exact path='/signup' component={SignUp}/> */}
      <Route path={`${props.match.url}`} component={MainApp} />
    </Switch>
  );
};

export default Index;
