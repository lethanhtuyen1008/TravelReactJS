import React, { useState } from "react";
import {
  Row,
  Col,
  Avatar,
  Button,
  Modal,
  Icon,
  Form,
  Card,
  Input,
  Select
} from "antd";
import Update from "./Update";
import { setCookie, getCookie, delCookie } from "base/helper/cookie";
import "./detail.less";
const { Option } = Select;
const FormItem = Form.Item;

const Info = props => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState(false);
  const { getFieldDecorator } = props.form;
  const onUpdate = values => {
    setShow(!show);
  };
  const onClose = () => {
    setShow(!show);
  };
  const x = JSON.parse(getCookie("user_info"));
  const handleSubmitPass = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err === null) {
        console.log(values);
      }
    });
  };
  return (
    <Row>
      <Col xs={24} md={16}>
        <div className="gx-order-history padding-top info-user">
          <Card
            className="gx-card-widget"
            title={
              <h2 className="h4 gx-text-capitalize gx-mb-0 dipaly-title">
                Thông tin tài khoản
              </h2>
            }
            extra={
              <div className="gx-text-primary gx-mb-0 gx-pointer image-info-user">
                <Avatar
                  size={100}
                  src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg"
                />
              </div>
            }
          >
            <div className="gx-table-responsive">
              <Row>
                <Col
                  xs={24}
                  md={8}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">Họ</div>
                  <div className="info-right-text-2">{x.firstName}</div>
                </Col>
                <Col
                  xs={24}
                  md={16}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">Tên</div>
                  <div className="info-right-text-2">{x.lastName}</div>
                </Col>
                <Col
                  xs={24}
                  md={8}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">Giới tính</div>
                  <div className="info-right-text-2">Nam</div>
                </Col>
                <Col
                  xs={24}
                  md={8}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">Số điện thoại</div>
                  <div className="info-right-text-2">{x.phone}</div>
                </Col>
                <Col
                  xs={24}
                  md={8}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">ID/Passport</div>
                  <div className="info-right-text-2">242345654323</div>
                </Col>
                <Col
                  xs={24}
                  md={8}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">Địa chỉ</div>
                  <div className="info-right-text-2">Quảng Ngãi</div>
                </Col>
                <Col
                  xs={24}
                  md={8}
                  className="info-right-text gx-border-bottom"
                >
                  <div className="info-right-text-1">Số OC hiện tại</div>
                  <div className="info-right-text-2">15</div>
                </Col>
                <Col xs={24} md={24} sm={24}>
                  <div className="info-right-text">
                    <Button onClick={() => setShow(!show)} className="btn-info">
                      Cập nhật
                    </Button>
                    <Modal
                      title={
                        <div>
                          <h2>Cập nhật thông tin</h2>
                        </div>
                      }
                      visible={show}
                      onCancel={() => setShow(!show)}
                      footer={null}
                    >
                      <Update onUpdate={onUpdate} onCancel={onClose} />
                    </Modal>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </Col>
      <Col xs={24} md={8} className="info-row-2">
        <div className="info1-account gx-box-shadow">
          <h1>Tài khoản</h1>
          <div className="text-right-acc">
            <div className="icon-account">
              <Icon type="mail" size={20} />
            </div>
            <div className="text-right-account">
              <div className="info-right-text-1">Email</div>
              <div className="info-right-text-2">levankhan@gmail.com</div>
            </div>
          </div>
          <div className="text-right-acc">
            <div className="icon-account">
              <Icon type="lock" size={20} />
            </div>
            <div className="text-right-account">
              <div className="info-right-text-1">Mật khẩu</div>
              <div style={{ display: "flex" }}>
                <div className="info-right-text-2">****************</div>
                <div>
                  <Icon type="edit" onClick={() => setPass(!pass)}></Icon>
                  <Modal
                    title={
                      <div>
                        <h2>Cập nhật thông tin</h2>
                      </div>
                    }
                    width={300}
                    visible={pass}
                    onCancel={() => setPass(!pass)}
                    footer={null}
                  >
                    <Form onSubmit={handleSubmitPass} style={{}}>
                      <div className="div-form-pasword">
                        <div>Mật khẩu hiện tại</div>
                        <FormItem block>
                          {getFieldDecorator("old_Password", {
                            rules: [
                              {
                                required: true,
                                message: "Vui lòng nhập mật khẩu hiện tại!"
                              }
                            ]
                          })(
                            <Input
                              prefix={<Icon type="lock" />}
                              placeholder="********"
                            />
                          )}
                        </FormItem>
                        <div>Mật khẩu mới</div>
                        <Form.Item className="tuyen">
                          {getFieldDecorator("new_Password", {
                            rules: [
                              {
                                required: true,
                                message: "Vui lòng nhập mật khẩu mới!"
                              }
                            ]
                          })(
                            <Input
                              prefix={<Icon type="lock" />}
                              placeholder="********"
                            />
                          )}
                        </Form.Item>
                        <div>Xác nhận mật khẩu mới</div>
                        <FormItem className="">
                          {getFieldDecorator("confirm_Password", {
                            rules: [
                              {
                                required: true,
                                message: "Vui lòng xác nhận mật khẩu!"
                              }
                            ]
                          })(
                            <Input
                              prefix={<Icon type="lock" />}
                              placeholder="********"
                            />
                          )}
                        </FormItem>
                      </div>
                      <div className="btn-update-pass">
                        <Button block type="danger" onClick={handleSubmitPass}>
                          Cập nhật
                        </Button>
                      </div>
                    </Form>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Form.create()(Info);
