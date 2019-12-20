import React from "react";
import { Row, Col } from "antd";
import {Link} from "react-router-dom";

const Index = () => (
  <Row>
    <Col className="content-cart-item gx-pt-3 gx-mr-lg-4 gx-mr-md-3 gx-text-center gx-pb-5 gx-mb-4" span={24}>
      <p className="gx-p-3">Không có sản phẩm trong giỏ hàng</p>
      <Link className="gx-btn gx-btn-primary gx-pl-5 gx-pr-5" to="/">Tiếp tục mua sắm</Link>
    </Col>
  </Row>
);

export default Index;
