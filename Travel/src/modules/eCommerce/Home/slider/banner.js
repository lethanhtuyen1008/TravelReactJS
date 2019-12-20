import React from "react";
import { Row, Col } from "antd";
import "./slider.scss";
import ItemBanner from "./itemBanner";

const listdata = [
  {
    icon: "safety-certificate",
    title: "Đảm bảo giá tốt nhất",
    description: "Đảm bảo giá tốt nhất cho khách hàng tại travel."
  },
  {
    icon: "heart",
    title: "Du khách yêu chúng tôi",
    description:
      "Khách hàng đánh giá cao về tour và chất lượng du lịch."
  },
  {
    icon: "star",
    title: "Đại lý du lịch tốt nhất",
    description: "Đại lý đặt tour và lên chương trình tour tốt nhất."
  },
  {
    icon: "fire",
    title: "Hỗ trợ tận tâm của chúng tôi",
    description: "Đội ngũ hộ trợ tận tâm nhiệt tình và chăm sóc 24/24."
  }
];

const SliderItem = ({ slide, height }) => {
  return (
    <Row>
      <Col xs={0} md={3}></Col>
      <Col xs={24} md={18}>
        <Row>
          {listdata.map((data, index) => {
            return <ItemBanner data={data} key={index} />;
          })}
        </Row>
      </Col>
      <Col xs={0} md={3}></Col>
    </Row>
  );
};
export default SliderItem;
