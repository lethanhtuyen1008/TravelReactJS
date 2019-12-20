import React from "react";
import { useSelector } from "react-redux";
import SignUp from "modules/Account/SignUp";
import Home from "routes/eCommerce/Home";

const Index = (props) => {
  return(
    <SignUp route={props}/>
  )
}

export default Index;
