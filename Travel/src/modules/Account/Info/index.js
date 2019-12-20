import React, { useState } from "react";
import { Menu, Icon, Row, Col } from "antd";
import Info from "./Info";
import History from "./History";
import NapOC from "./NapOC";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./detail.less";

const { SubMenu } = Menu;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Row className="row-detail-account">
        <Col xs={24} md={6} className="menu-account">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="red"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span>
                <Link to="/account/info">Tài khoản</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="inbox" />
              <span>
                <Link to="/account/napoc">Nạp OC</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="history" />
              <span>
                <Link to="/account/history">Lịch sử mua hàng</Link>
              </span>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="11">Option 1</Menu.Item>
              <Menu.Item key="22">Option 2</Menu.Item>
              <Menu.Item key="33">Option 3</Menu.Item>
              <Menu.Item key="44">Option 4</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col xs={24} md={18}>
          <Switch>
            <Route path="/account/info" component={Info} />
            <Route path="/account/napoc" component={NapOC} />
            <Route path="/account/history" component={History} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};
export default Index;
