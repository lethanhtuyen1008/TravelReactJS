import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch,Route } from "react-router-dom";
import { Menu, Icon, Row, Col, Button } from 'antd';
import '../../../modules/Account/Info/./detail.less';
import AuthorizedRoute from 'base/helper/AuthorizedRoute';
import UnauthorizedRoute from 'base/helper/UnauthorizedRoute';
import asyncComponent from "utils/asyncComponent";
const { SubMenu } = Menu;

const Info = ({ match }) => {
    console.log(match.url);
    const [collapsed, setCollapsed] = useState(true);
    const [active, setActive] = useState(0);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Router>
            <Row className="row-detail-account">
                <Col xs={24} md={6}>
                    <div  className="menu-account gx-box-shadow">
                        <Menu
                            className="menu-info"
                            mode="inline"
                            theme="red"
                            inlineCollapsed={!collapsed}
                        >
                            <Menu.Item key="1" className="active-info">
                                <Link to={`${match.url}/info`}>
                                    <Icon type="user" />
                                    <span>Tài khoản</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" className="active-info">
                                <Link to={`${match.url}/napoc`}>
                                    <Icon type="inbox" />
                                    <span>Nạp OC</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3" className="active-info">
                                <Link to={`${match.url}/history`}>
                                    <Icon type="history" />
                                    <span>Lịch sử mua hàng</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>

                </Col>
                <Col xs={24} md={18}>
                    <Switch>
                        <Route path={`${match.url}/info`} component={asyncComponent(() => import("./info"))} />
                        <Route path={`${match.url}/napoc`} component={asyncComponent(() => import("./napOC"))} />
                        <Route path={`${match.url}/history`} component={asyncComponent(() => import("./history"))} />
                    </Switch>
                </Col>
            </Row>
        </Router>
    );
}

export default Info;
