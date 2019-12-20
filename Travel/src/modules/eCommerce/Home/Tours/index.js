import React from "react";
import { Row, Col } from "antd";
import Tour from "./Tour";
import "./tours.less";

const Index = props => {
  return (
    <div className="gx-login-container">
      <div className="gx-login-content form-full">
        <div id="product">
          <Row>
            <Col xs={0} md={1}></Col>
            <Col
              xs={24}
              md={16}
              className="gx-border-bottom"
              style={{ paddingBottom: "20px" }}
            >
              <h2 className="text-tour">Tou du lịch HOT trong tháng</h2>
            </Col>
            <Col xs={0} md={3}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={20}>
              <Row>
                {props.data.map((item, index) => {
                  if (index < 8) return <Tour data={item} key={index} />;
                })}
              </Row>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Index;
