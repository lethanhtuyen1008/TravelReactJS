import React from "react";
import {
  Icon,
  Tabs,
  Button,
  Card,
  Row,
  Col,
  Table,
  Carousel,
  Form,
  Select,
  Input
} from "antd";
import SlideImage from "./SlideImage";
import ImageT from "./Image";
import { APIIMG } from "../../../../../envAPI";
const Index = props => {
  var listHinh = [];
  var a = [];
  var ten = "";
  props.data.map((item, index) => {
    listHinh.push(item.hinh);
    ten = item["ten"];
  });
  JSON.parse(JSON.stringify(listHinh)).map((item, index) => {
    if (index < 1) {
      JSON.parse(JSON.stringify(item)).map((item2, index) => {
        a.push(item2.url);
      });
    }
  });
  return (
    <Card className="gx-card-widget gx-p-lg-1">
      <Row>
        <Col xl={9} lg={10} md={5} sm={10} xs={24}>
          <Carousel autoplay>
            {a.map((item, index) => {
              return <SlideImage data={item} key={index} />;
            })}
          </Carousel>
        </Col>
        <Col xl={15} lg={14} md={14} sm={14} xs={24}>
          <div className="gx-fnd-content">
            {/* <p className="gx-text-grey">Miền Bắc</p> */}
            <h2 className="gx-text-uppercase gx-font-weight-bold gx-fnd-title color-txt">
              {ten}
            </h2>
            {/* <p>Had a great time with family on beach this weekend.</p> */}
            <ul className="gx-fnd-gallery-list">
              {a.map((item, index) => {
                return <ImageT data={item} key={index} />;
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default Index;
