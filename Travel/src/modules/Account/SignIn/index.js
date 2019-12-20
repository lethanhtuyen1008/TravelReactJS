import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input, Icon, notification } from "antd";
import { Link } from "react-router-dom";
import { login } from "../redux/actions";
import { NotificationManager } from "react-notifications";
import ForgotPassword from "../ForgotPassword";

const FormItem = Form.Item;

const Index = props => {
  const dispatch = useDispatch();
  const checkLogin = useSelector(state => state.AuthReducer.checkLogin);
  console.log(checkLogin);
  if (checkLogin !== null) {
    if (checkLogin === true) {
      notification.open({
        message: "Đăng nhâp thành công",
        description: "Chuyển qua trang chủ",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  }
  if (checkLogin === null) {
    if (checkLogin === false) {
      notification.open({
        message: "Đăng nhâp không thành công",
        description: "Vui lòng kiểm tra tên đăng nhâp và mật khẩu",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  }
  const [tuyen, setTuyen] = useState(false);
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(login({ account: values }));
        setTuyen(true);
      }
    });
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">ĐĂNG NHẬP</h1>
        </div>
        <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Vui lòng nhập tài khoản!" },
                { type: "email", message: "Địa chỉ email không đúng!" }
              ]
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Tài khoản/email"
              />
            )}
          </FormItem>
          <FormItem className="gx-mb-2">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Vui lòng nhập mật khẩu!" }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Mật khẩu"
              />
            )}
          </FormItem>
          <FormItem>
            <ForgotPassword />
            <small>
              {" "}
              Tạo tài khoản mới tại{" "}
              <Link className="gx-text-primary" to="/account/signup">
                đây
              </Link>
            </small>
          </FormItem>
          <FormItem className="ft-form-ac gx-text-center">
            <Button
              className="gx-btn-red st-btn-login"
              htmlType="submit"
              disabled={tuyen}
            >
              Đăng nhập
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default Form.create()(Index);
