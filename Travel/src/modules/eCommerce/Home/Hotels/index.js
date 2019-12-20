import React from "react";
import Item from "./item";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import "./less.css";
const Index = props => {
  return (
    <div style={{ padding: "20px" }}>
      <div className="text-title">Khách sạn nổi bật</div>
      <Carousel autoplay>
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </div>
  );
};
export default Index;
