import React from "react";
import Item from "./item";
import { Carousel } from "antd";
import Slider from "react-slick";
const Index = props => {
  return (
    <Carousel autoplay>
      <Item />
      <Item />
      <Item />
      <Item />
    </Carousel>
  );
};
export default Index;
