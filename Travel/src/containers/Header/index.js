import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProvince } from "../../base/redux/General/GeneralAction";
import { logOut } from "modules/Account/redux/actions";
import { Layout } from "antd";
import HeaderPC from "./HeaderPC";
import HeaderMobile from "./HeaderMobile";
const { Header } = Layout;

const Index = React.memo(() => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (listProvince.length <= 0) {
  //     dispatch(getProvince());
  //   }
  // }, []);
  return (
    <Header className="header">
      <HeaderPC />
    </Header>
  );
});
export default Index;
