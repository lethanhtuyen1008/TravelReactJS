import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Form, Button, Input, Icon } from "antd";
import { signUp } from "../redux/actions";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
const Index = props => {
  const dispatch = useDispatch();

  const { getFieldDecorator } = props.form;
  const checkSignUp = useSelector(state => state.AuthReducer.checkSignUp);
  console.log(checkSignUp);
  if (checkSignUp !== null) {
    if (checkSignUp === true) {
      notification.open({
        message: "Đăng kí thành công",
        description: "Chuyển qua trang chủ",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  }
  if (checkSignUp === null) {
    if (checkSignUp === false) {
      notification.open({
        message: "Đăng nhâp không thành công",
        description: "Vui lòng kiểm tra tên đăng nhâp và mật khẩu",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      dispatch(signUp({ info: values }));
    });
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">TẠO TÀI KHOẢN</h1>
        </div>
        <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
          <FormItem className="gx-mb-1">
            <span className="gx-font-size-12">
              Họ và tên <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("firstname", {
              rules: [{ required: true, message: "Thông tin bắt buộc!" }]
            })(<Input placeholder="Nhập họ tên của bạn" />)}
          </FormItem>
          <FormItem className="gx-mb-1">
            <span className="gx-font-size-12">
              Email <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Thông tin bắt buộc!" },
                { type: "email", message: "Địa chỉ email không đúng!" }
              ]
            })(<Input placeholder="Nhập email của bạn" />)}
          </FormItem>
          <FormItem className="gx-mb-1">
            <span className="gx-font-size-12">
              Số điện thoại <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "Thông tin bắt buộc!" }]
            })(<Input placeholder="Nhập họ tên của bạn" />)}
          </FormItem>
          <FormItem className="gx-mb-2">
            <span className="gx-font-size-12">
              Mật khẩu <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Thông tin bắt buộc!" },
                {
                  min: 6,
                  message: "Mật khẩu có độ dài ít nhất 6 ký tự"
                }
              ]
            })(<Input type="password" placeholder="Tối thiểu 6 ký tự" />)}
          </FormItem>
          <FormItem>
            <small className="gx-login-form-forgot">
              Bạn đã có tài khoản?{" "}
              <Link className="gx-text-primary" to="/account/signin">
                {" "}
                Đăng nhập{" "}
              </Link>
              tại đây
            </small>
          </FormItem>
          <FormItem className="ft-form-ac">
            <Button
              className="gx-btn-red gx-mb-1 st-btn-login"
              htmlType="submit"
            >
              Đăng ký
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default Form.create()(Index);
