import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Input, Icon } from 'antd';
import { NotificationManager } from 'react-notifications';
import './forgotPassword.less';

const FormItem = Form.Item;

const Index = (props) => {

  return (
    <div>Đổi mật khẩu</div>
    );
}

export default Form.create()(Index);
