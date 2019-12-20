import React from "react";
import { Layout } from "antd";
import AppRoute from "routes";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../../modules/eCommerce/Seller/bannerSeller";
import "./app.less";

const { Content } = Layout;

const MainApp = props => {
  return (
    <Layout className="gx-app-layout">
      <Header />
      <Content className="gx-layout-content">
        <AppRoute match={props.match} />
        <Footer />
      </Content>
    </Layout>
  );
};

export default MainApp;
