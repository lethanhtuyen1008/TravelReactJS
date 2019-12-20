import React, { useState } from "react";
import { Icon, Form, Select, Input, Button } from 'antd';
const { Option } = Select;
const FormItem = Form.Item;

const Update = (props) => {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (err === null) {
                props.onUpdate(values);
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} layout="inline" >
            <div style={{ display: 'flex' }}>
                <div>
                    <div>Họ</div>
                    <FormItem className="">
                        {getFieldDecorator("first_name", {
                            rules: [{ required: true, message: "Vui lòng nhập họ!" }]
                        })(
                            <Input
                                prefix={<Icon type="user" />}
                                placeholder="họ"
                            />
                        )}
                    </FormItem>
                    <div>Giới tính</div>
                    <Form.Item className="">
                        {getFieldDecorator('gender', {
                            rules: [
                                { required: true, message: 'Vui lòng chọn giới tính!' }]
                        })(
                            <Select className="select-gender-update">
                                <Option value="Nam">Nam</Option>
                                <Option value="Nữ">Nữ</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <div>Số điện thoại</div>
                    <FormItem className="">
                        {getFieldDecorator("phone", {
                            rules: [{ required: true, message: "Vui lòng nhập số điện thoại!" }]
                        })(
                            <Input
                                prefix={<Icon type="phone" />}
                                placeholder="Số điện thoại"
                            />
                        )}
                    </FormItem>
                    <div>Thành phố</div>
                    <FormItem className="">
                        {getFieldDecorator("city", {
                            rules: [{ required: true, message: "Vui lòng chọn thành phố!" }]
                        })(
                            <Input
                                prefix={<Icon type="environment" />}
                                placeholder="Thành phố"
                            />
                        )}
                    </FormItem>
                </div>
                <div>
                    <div>Tên</div>
                    <FormItem className="">
                        {getFieldDecorator("last_name", {
                            rules: [{ required: true, message: "Vui lòng nhập tên!" }]
                        })(
                            <Input
                                prefix={<Icon type="user" />}
                                placeholder="Tên"
                            />
                        )}
                    </FormItem>
                    <div>ID/Passport</div>
                    <FormItem className="">
                        {getFieldDecorator("ID_Passport", {
                            rules: [{ required: true, message: "Vui lòng nhập ID!" }]
                        })(
                            <Input
                                prefix={<Icon type="credit-card" />}
                                placeholder="ID/Passport"
                            />
                        )}
                    </FormItem>
                    <div>Quốc gia</div>
                    <FormItem className="">
                        {getFieldDecorator("country", {
                            rules: [{ required: true, message: "Vui lòng nhập quốc gia!" }]
                        })(
                            <Input
                                prefix={<Icon type="pie-chart" />}
                                placeholder="Quốc gia"
                            />
                        )}
                    </FormItem>
                    <div>Địa chỉ</div>
                    <FormItem className="">
                        {getFieldDecorator("address", {
                            rules: [{ required: true, message: "Vui lòng nhập địa chỉ!" }]
                        })(
                            <Input
                                prefix={<Icon type="environment" />}
                                placeholder="Địa chỉ"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="update-cf-1">
                            <div className="btn-update-1"><Input type="button" value="Thoát" onClick={props.onCancel} /></div>
                            <div><Input type="submit" value="Cập nhật" className="btn-update-user" /></div>
                        </div>
                    </FormItem>
                </div>
            </div>
        </Form>
    );
};

export default Form.create()(Update);