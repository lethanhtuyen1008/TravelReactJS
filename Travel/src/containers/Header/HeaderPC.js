import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Icon, Button, Menu } from "antd";
import { setCookie, getCookie, delCookie } from "base/helper/cookie";
import "./header.less";
const { SubMenu } = Menu;
const HeaderPC = props => {
  const [show, setShow] = useState(false);
  const state = {
    openKeys: ["sub1"]
  };
  const logout = () => {
    console.log("logout");
    delCookie("user_info");
    delCookie("token_user");
    window.location.reload(true);
  };
  const x = JSON.parse(getCookie("user_info"));
  const menulogin = x ? (
    <SubMenu
      title={
        <span className="submenu-title-wrapper">
          {x.firstName + " " + x.lastName}
        </span>
      }
    >
      <Menu.Item key="userinfo" className="item-menu">
        <Link to="/account/user/info">Thông tin</Link>
      </Menu.Item>
      <Menu.Item key="logout" className="item-menu">
        <div onClick={() => logout()}>Đăng xuất</div>
      </Menu.Item>
    </SubMenu>
  ) : (
    <Menu.Item key="login" className="item-menu">
      <Link to="/account/signin">Đăng nhập</Link>
    </Menu.Item>
  );

  const t = <div>tuyen</div>;
  const onOpenChange = openKeys => {
    //console.log("tuyen");
  };
  return (
    <div className="container-menu">
      <div className="menu-pc">
        <Menu mode="horizontal">
          <Menu.Item key="home" className="item-menu">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" className="item-menu">
            <Link to="/about">Giới thiệu</Link>
          </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper">Tours</span>}>
            <Menu.Item key="tours:1" className="item-menu">
              <Link to="/tours/list/5df8b23d7fc3123640551e58">
                Tour trong nước
              </Link>
            </Menu.Item>
            <Menu.Item key="tours:2" className="item-menu">
              <Link to="/tours/list/5df9c1b6cac6ec11d0df72c8">
                {" "}
                Tour ngoài nước{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key="tours:3" className="item-menu">
              Tour HOT
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="blog" className="item-menu">
            <Link to="/about">Tin tức</Link>
          </Menu.Item>
          <Menu.Item key="hotel" className="item-menu">
            <Link to="/about">Khách sạn</Link>
          </Menu.Item>

          {menulogin}

          <Menu.Item key="cart" className="item-menu">
            <Link to="/about">
              <Icon
                type="shopping-cart"
                twoToneColor="#52c41a"
                style={{ fontSize: "20px" }}
              />
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      <div className="menu-mobile">
        <Menu
          mode="inline"
          onOpenChange={onOpenChange}
          style={{ width: "380px", color: "black" }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="menu" />
                <span>Menu</span>
              </span>
            }
          >
            <Menu.Item key="home" className="item-menu">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" className="item-menu">
              <Link to="/about">Giới thiệu</Link>
            </Menu.Item>
            <SubMenu
              style={{ width: "200px", color: "black", paddingLeft: "34px" }}
              title={<span className="submenu-title-wrapper">Tours</span>}
            >
              <Menu.Item key="tours:1" className="item-menu">
                <Link to="/tours/list">Tour trong nước</Link>
              </Menu.Item>
              <Menu.Item key="tours:2" className="item-menu">
                Tour ngoài nước
              </Menu.Item>
              <Menu.Item key="tours:3" className="item-menu">
                Tour HOT
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="login" className="item-menu">
              <Link to="/account/signin">Đăng nhập</Link>
            </Menu.Item>
            <Menu.Item key="blog" className="item-menu">
              <Link to="/about">Tin tức</Link>
            </Menu.Item>
            <Menu.Item key="hotel" className="item-menu">
              <Link to="/about">Khách sạn</Link>
            </Menu.Item>
            <Menu.Item key="cart" className="item-menu">
              <Link to="/about">
                <Icon
                  type="shopping-cart"
                  twoToneColor="#52c41a"
                  style={{ fontSize: "20px" }}
                />
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};
export default HeaderPC;
