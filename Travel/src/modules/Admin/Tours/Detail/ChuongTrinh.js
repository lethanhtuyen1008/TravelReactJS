import React from "react";
import { Card, Form, Input, Button, Row, Col } from "antd";
import DiaDiem from "./ItemDD";
const Index = props => {
  //console.log(props.data);
  const showCT = () => {
    var a = [];
    JSON.parse(JSON.stringify(props.data)).map((item, index) => {
      a.push(
        <Col span={8}>
          <Card className="gx-card-widget">
            <h2
              className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light"
              style={{ height: "50px" }}
            >
              {item.tenCT}
            </h2>
            <Form className="gx-signup-form gx-form-row0 gx-mb-0">
              <DiaDiem data={item.dia_diem} />
              <Button type="primary" className="gx-mb-0" htmlType="submit">
                Lưu
              </Button>
            </Form>
          </Card>
        </Col>
      );
    });
    return a;
  };
  return <Row>{showCT()}</Row>;
};
export default Index;
