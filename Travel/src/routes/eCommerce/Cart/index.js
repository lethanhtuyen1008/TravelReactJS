import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import ItemCart from "modules/eCommerce/Cart/ItemCart";

const Index = () => {
  

  return (
    <div className="list-carts">
      <Row className="row-cart" type="flex" justify="center">
        <Col className="content-cart" span={23} xs={23} lg={23} md={23}>
          <ItemCart />
        </Col>
      </Row>
    </div>
  );
};
export default Index;
