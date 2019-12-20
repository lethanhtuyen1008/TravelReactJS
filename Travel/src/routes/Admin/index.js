import React from "react";
import { Col } from "antd";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "utils/asyncComponent";
const { SubMenu } = Menu;
const Index = ({ match }) => {
  const handleClick = e => {
    console.log("click ", e);
  };
  return (
    <div style={{ display: "flex" }}>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="menu" />
              <span>Quản lý tour</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Quản lí tour">
            <Menu.Item key="1">
              <a href="/admin/tour">Tour</a>
            </Menu.Item>
            <Menu.Item key="2">Lịch khởi hành</Menu.Item>
            <Menu.Item key="3">Địa điểm</Menu.Item>
            <Menu.Item key="4">Khách sạn</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Báo cáo">
            <Menu.Item key="5">
              <Link to="/admin/ve">Vé đặt</Link>
            </Menu.Item>
            <Menu.Item key="6">Doanh thu</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <div>
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            component={asyncComponent(() => import("./Home"))}
          />
          <Route
            exact
            path={`${match.url}/lichkhoihanh`}
            component={asyncComponent(() => import("./LichKhoiHanh"))}
          />
          <Route
            exact
            path={`${match.url}/diadiem`}
            component={asyncComponent(() => import("./DiaDiem"))}
          />
          <Route
            exact
            path={`${match.url}/tour`}
            component={asyncComponent(() => import("./Tours"))}
          />
          <Route
            exact
            path={`${match.url}/ve`}
            component={asyncComponent(() => import("./Ve"))}
          />
          <Route
            exact
            path={`${match.url}/detail/tour/:id`}
            component={asyncComponent(() => import("./DetailTour"))}
          />
        </Switch>
      </div>
    </div>
  );
};
export default Index;
