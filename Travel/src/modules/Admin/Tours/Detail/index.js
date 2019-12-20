import React from "react";
import SlideImage from "./SlideImage";
import { Card, Row, Col, Carousel, Form, Input, Button, Icon } from "antd";
import ChuongTrinh from "./ChuongTrinh";
import ImageT from "./Image";
const FormItem = Form;
const Index = props => {
  const { getFieldDecorator } = props.form;
  const listLT = [];
  const listData = [];
  var listHinh = [];
  var listCT = [];
  var listDD = [];
  var listKS = [];
  var listGia = [];
  var a = [];

  var ten = "";

  JSON.parse(JSON.stringify(props.data)).map((item, index) => {
    if (index < 1) listLT.push(item);
  });
  listLT.map((item, index) => {
    if (index < 1) listData.push(item.ma_tour);
  });
  listData.map((item, index) => {
    listHinh.push(item.hinh);
    listCT.push(item.chuongtrinh);
    listGia.push(item.giave);
    ten = item["ten"];
  });
  JSON.parse(JSON.stringify(listHinh)).map((item, index) => {
    if (index < 1) {
      JSON.parse(JSON.stringify(item)).map((item2, index) => {
        a.push(item2.url);
      });
    }
  });
  listCT.map((item, index) => {
    JSON.parse(JSON.stringify(item)).map((item2, index) => {
      listDD.push(item2.dia_diem);
      listKS.push(item2.khach_san);
    });
  });
  const showCT = () => {
    var a = [];
    listCT.map((item, index) => {
      if (index < 1) {
        JSON.parse(JSON.stringify(item)).map((item2, index) => {
          if (index < 1) {
            a.push(
              <div>
                <ChuongTrinh data={item} />
              </div>
            );
          }
        });
      }
    });

    return a;
  };
  console.log(listGia);
  return (
    <Card className="gx-card-widget gx-p-lg-1">
      <Row>
        <Col span={8}>
          <Card className="gx-card-widget">
            <h2
              className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light"
              style={{ height: "50px" }}
            >
              <div style={{ padding: "20px", fontSize: "20px", color: "red" }}>
                {ten}
              </div>
            </h2>
            <Row>
              <Col span={16}>
                <Form>
                  <div>Số điện thoại</div>
                  <Form.Item className="tuyen">
                    {getFieldDecorator("tenKH", {
                      rules: [{ required: true }]
                    })(
                      <Input
                        prefix={<Icon type="user" />}
                        placeholder="họ"
                        defaultValue="hello"
                      />
                    )}
                  </Form.Item>
                </Form>
              </Col>
              <Col span={8}></Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ padding: "20px", fontSize: "15" }}>
        <Col span={24}>
          <div>Hình ảnh</div>
        </Col>
        <Col
          className="hello"
          span={24}
          style={{ padding: "20px", fontSize: "15" }}
        >
          <Row>
            {a.map((item, index) => {
              return (
                <Col xl={9} lg={10} md={5} sm={10} xs={24}>
                  <SlideImage data={item} key={index} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ padding: "20px", fontSize: "15" }}>Chương trình</div>
        </Col>
        <Col>
          <Row>
            <Col span={24}>{showCT()}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ padding: "20px", fontSize: "15" }}>Giá vé</div>
        </Col>
        <Col>
          <Row>
            <Col span={8}>
              <Card className="gx-card-widget">
                <h2
                  className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light"
                  style={{ height: "50px" }}
                ></h2>
                <Form className="gx-signup-form gx-form-row0 gx-mb-0">
                  <Input value="50000000" />
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    Lưu
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
export default Form.create()(Index);
