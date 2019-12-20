import React, { useState } from "react";
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
const FormItem = Form;
const { Option } = Select;
const Index = props => {
  const [count, setCount] = useState(0);
  const { getFieldDecorator } = props.form;
  const onChangetxt = e => {
    setCount(e.target.value);
    console.log(count);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err === null) {
        props.showData(values);
      }
    });
  };
  return (
    <div className="gx-login-container">
      <div className="gx-login-content form-full">
        <div className=" gx-mb-4 color-txt gx-border-bottom">
          <h2 className="color-txt">{props.title}</h2>
        </div>
        <Form onSubmit={props.handleSubmit} layout="inline">
          <div style={{ display: "flex" }}>
            <Row>
              <Col md={12}>
                <div>Họ</div>
                <Form.Item className="tuyen">
                  {getFieldDecorator("first_name", {
                    rules: [{ required: true, message: "Vui lòng nhập họ!" }]
                  })(<Input prefix={<Icon type="user" />} placeholder="họ" />)}
                </Form.Item>
                <div>Giới tính</div>
                <Form.Item className="tuyen">
                  {getFieldDecorator("gender", {
                    rules: [
                      {
                        required: true,
                        message: "Vui lòng chọn giới tính!"
                      }
                    ]
                  })(
                    <Select>
                      <Option value="Nam">Nam</Option>
                      <Option value="Nữ">Nữ</Option>
                    </Select>
                  )}
                </Form.Item>
                <div>Số điện thoại</div>
                <Form.Item className="tuyen">
                  {getFieldDecorator("phone", {
                    rules: [
                      {
                        required: true,
                        message: "Vui lòng nhật số điện thoại"
                      }
                    ]
                  })(<Input prefix={<Icon type="user" />} placeholder="họ" />)}
                </Form.Item>
              </Col>
              <Col md={12}>
                <div>Tên</div>
                <Form.Item className="tuyen">
                  {getFieldDecorator("last_name", {
                    rules: [
                      {
                        required: true,
                        message: "Vui lòng nhập tên!"
                      }
                    ]
                  })(<Input prefix={<Icon type="user" />} placeholder="tên" />)}
                </Form.Item>
                <div>Email</div>
                <Form.Item className="tuyen">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        message: "Vui lòng nhật email !"
                      }
                    ]
                  })(
                    <Input prefix={<Icon type="email" />} placeholder="email" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Form.create()(Index);
