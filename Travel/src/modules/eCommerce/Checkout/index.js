import React, { useState } from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import CurrencyFormat from "react-currency-format";
import "./checkout.less";
import ItemCheck from './itemCheck'

const FormItem = Form.Item;
const Index = props => {
  const [count, setCount] = useState(false);


  const listCheckout = [
    {
      id: 1,
      name: "Điện Thoại iPhone XS Max 512GB (2 Sim Vật Lý) - Hàng Nhập Khẩu",
      order: 3,
      price: 200

    },
    {
      id: 2,
      name: "Điện Thoại iPhone XS Max 512GB (2 Sim Vật Lý) - Hàng Nhập Khẩu",
      order: 3,
      price: 400
    },
    {
      id: 3,
      name: "Điện Thoại iPhone XS Max 512GB (2 Sim Vật Lý) - Hàng Nhập Khẩu",
      order: 4,
      price: 200
    }
  ]

  const elmCheck = listCheckout.map((itemCheck, index) => {
    return (
      <ItemCheck itemCheck={itemCheck} key={index} />
    )
  });
  return (
    <div className="checkout-content">
      <Row>
        <Col span={18} xs={24} sm={24} md={18}>
          <Row>
            <Col
              span={14}
              xs={24}
              md={14}
              style={{ borderRadius: 6, background: "white" }}
            >
              <Row>
                <Col span={3} md={4}></Col>
                <Col span={18} xs={24} md={18}>
                 
                </Col>
                <Col span={3}></Col>
              </Row>
            </Col>
            <Col
              span={1}
              xs={24}
              md={1}
              className="middle-item"
            ></Col>
            <Col span={9} xs={24} md={9} className="right-checkout">
              <Row className="row-right-checkout">
                <Col className="right-right-checkout" span={14}>
                  Đơn hàng 3 sản phẩm
                </Col>
                <Col span={10} className="left-right-checkout">
                  <Button>Sửa</Button>
                </Col>
              </Row>
              <Row className="row-right-checkout">

                {elmCheck}

              </Row>
              <Row className="row-right-checkout tamtinh">
                <Col className="right-right-checkout" span={14}>
                  <div>Tạm tính</div>
                </Col>
                <Col span={10} className="left-right-price-tamtinh">
                  <CurrencyFormat
                    value={200000}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" VNĐ"}
                  />
                </Col>
              </Row>
              <Row className="row-right-checkout thanhtien">
                <Col className="right-right-checkout" span={14}>
                  <div>Thành tiền</div>
                </Col>
                <Col span={10} className="left-right-price-tamtinh ">
                  <div className="thanhtien-price">
                    <CurrencyFormat
                      value={200000}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={" VNĐ"}
                    />
                  </div>
                  <div className="vat-checkout">(Đã bao gồm thuế VAT)</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3} xs={1} sm={1} md={3}></Col>
      </Row>
    </div>
  );
};

export default Form.create()(Index);
