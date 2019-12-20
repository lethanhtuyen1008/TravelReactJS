import React, { useState } from "react";
import { Row, Col, Icon, Drawer, Badge } from "antd";
import { Link } from "react-router-dom";
import CustomScrollbars from "utils/CustomScrollbars";

const HeaderMobile = React.memo((props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <div className="tuyen">
      <div id="menu-container">
        <div id="menu-wrapper">
          <div id="hamburger-menu"><span /><span /><span /></div>
          {/* hamburger-menu */}
        </div>
        {/* menu-wrapper */}
        <ul className="menu-list accordion">
          <li id="nav1" className="toggle accordion-toggle">
            <span className="icon-plus" />
            <a className="menu-link" href="#">Menu1</a>
          </li>
          {/* accordion-toggle */}
          <ul className="menu-submenu accordion-content">
            <li><a className="head" href="#">Submenu1</a></li>
            <li><a className="head" href="#">Submenu2</a></li>
            <li><a className="head" href="#">Submenu3</a></li>
          </ul>
          {/* menu-submenu accordon-content*/}
          <li id="nav2" className="toggle accordion-toggle">
            <span className="icon-plus" />
            <a className="menu-link" href="#">Menu2</a>
          </li>
          {/* accordion-toggle */}
          <ul className="menu-submenu accordion-content">
            <li><a className="head" href="#">Submenu1</a></li>
            <li><a className="head" href="#">Submenu2</a></li>
          </ul>
          {/* menu-submenu accordon-content*/}
          <li id="nav3" className="toggle accordion-toggle">
            <span className="icon-plus" />
            <a className="menu-link" href="#">Menu3</a>
          </li>
          {/* accordion-toggle */}
          <ul className="menu-submenu accordion-content">
            <li><a className="head" href="#">Submenu1</a></li>
            <li><a className="head" href="#">Submenu2</a></li>
            <li><a className="head" href="#">Submenu3</a></li>
            <li><a className="head" href="#">Submenu4</a></li>
          </ul>
          {/* menu-submenu accordon-content*/}
        </ul>
        {/* menu-list accordion*/}
      </div>
      {/* menu-container */}
    </div>
  );
});
export default HeaderMobile;
